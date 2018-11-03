from rest_framework import generics
from .models import Usuarios
from pergunta.models import Pergunta, Resposta
from .serializers import UsuariosSerializer, CreateUser
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from random import randint
from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope, TokenHasScope, OAuth2Authentication
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAdminUser, AllowAny

    
class UsuariosCreate(generics.ListCreateAPIView):

    queryset = Usuarios.objects.all()
    serializer_class = CreateUser
    permission_classes = (AllowAny,)

    def create(self, request):
        user = User.objects.create_user(username=request.data['nome'],
                                        password=request.data['senha'])
        
        usuario = Usuarios.objects.create(nome=request.data['nome'], senha=request.data['senha'])
        user = authenticate(username=request.data['nome'], password=request.data['senha'])
        login(request, user)
        return Response({'Criado': True, 'id': usuario.id}, headers={'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})


class UsuariosLogin(generics.CreateAPIView):

    queryset = Usuarios.objects.all()
    serializer_class = CreateUser
    permission_classes = (AllowAny,)
    def create(self, request):
        user = authenticate(username=request.data['nome'], password=request.data['senha'])
        if user is not None:
            usuario = Usuarios.objects.get(nome=request.data['nome'], senha=request.data['senha'])
            login(request, user)
            return Response({'Logado': True, 'id': usuario.id})
        else:
            return Response({'Logado': False})        


class UsuariosUpdate(generics.UpdateAPIView):

    serializer_class = UsuariosSerializer
    queryset = Usuarios.objects.all()
    authentication_classes = [OAuth2Authentication, SessionAuthentication]
    permission_classes = (TokenHasReadWriteScope, )

    def update(self, request, **params):
        compativel = Usuarios.objects.get(id=request.data['id'])
        pergunta_existe = False
        compativel.perdeu = False
        zero = ''
        if request.data['pergunta'] != 'none' and request.data['resposta'] != 'none':
            rels = {
                'limpeza': compativel.limpeza,
                'disciplina': compativel.disciplina,
                'saude': compativel.saude,
                'organizacao': compativel.organizacao,
                'utilizacao': compativel.utilizacao,
                'producao': compativel.producao,
                'gastos': compativel.gastos
            }
            resposta = Resposta.objects.get(pergunta__texto_pergunta=request.data['pergunta'], texto_resposta=request.data['resposta'])
            alters = resposta.aumenta.split()
            for i in alters:
                if i != 'nada':
                    palavra = i.split('(')
                    palavra[-1] = int(palavra[-1][:-1])
                    if palavra[0] == 'gastos' or palavra[0] == 'producao':
                        rels[palavra[0]] += (palavra[-1] / 100) * rels[palavra[0]]
                    elif rels[palavra[0]] + palavra[-1] > 100:
                        rels[palavra[0]] = 100
                    else:
                        rels[palavra[0]] += palavra[-1]
            
            alters = resposta.diminui.split()
            for i in alters:
                if i != 'nada':
                    palavra = i.split('(')
                    palavra[-1] = int(palavra[-1][:-1])
                    if rels[palavra[0]] - palavra[-1] < 0:
                        rels[palavra[0]] = 0
                    elif palavra[0] == 'gastos' or palavra[0] == 'producao':
                        rels[palavra[0]] -= (palavra[-1] / 100) * rels[palavra[0]]
                    else:
                        rels[palavra[0]] -= palavra[-1]
            compativel.limpeza = rels['limpeza']
            compativel.disciplina = rels['disciplina']
            compativel.utilizacao = rels['utilizacao']
            compativel.organizacao = rels['organizacao']
            compativel.saude = rels['saude']
            compativel.producao = rels['producao'] + 0.2 * (compativel.disciplina + compativel.saude + compativel.organizacao + compativel.limpeza + compativel.utilizacao)
            compativel.gastos = rels['gastos']
            compativel.ult_alt = request.data['pergunta'] + '-' + request.data['resposta']
            for i, j in rels.items():
                if j == 0:
                    compativel.perdeu = True
                    compativel.limpeza = 50
                    compativel.disciplina = 50
                    compativel.utilizacao = 50
                    compativel.organizacao = 50
                    compativel.saude = 50
                    zero = i
            compativel.save()
    

        if not pergunta_existe:
            pergunta = Pergunta.objects.get(pk=randint(19, 100))
        respostas = Resposta.objects.filter(pergunta__texto_pergunta=pergunta.texto_pergunta)
        textos_respostas = []
        for i in respostas.iterator():
            textos_respostas.append(i.texto_resposta)
        data = {
            'pergunta': pergunta.texto_pergunta,
            'resposta': textos_respostas,
            'disciplina': compativel.disciplina,
            'saude': compativel.saude,
            'organizacao': compativel.organizacao,
            'limpeza': compativel.limpeza,
            'utilizacao': compativel.utilizacao,
            'producao': compativel.producao,
            'gastos': compativel.gastos,
            'perdeu': compativel.perdeu,
            'zero': zero
        }
        return Response(data, headers={'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
