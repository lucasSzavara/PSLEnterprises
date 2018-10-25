from rest_framework import generics
from .models import Usuarios
from pergunta.models import Pergunta, Resposta
from .serializers import UsuariosSerializer, CreateUser
from rest_framework.response import Response
from django.contrib.auth.models import User
from random import randint

    
class UsuariosCreate(generics.ListCreateAPIView):

    queryset = Usuarios.objects.all()
    serializer_class = CreateUser

    def create(self, request):
        user = User.objects.create_user(username=request.data['nome'],
                                        password=request.data['senha'])
        
        usuario = Usuarios.objects.create(nome=request.data['nome'], senha=request.data['senha'])

        return Response({'Criado': True}, headers={'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})



class UsuariosUpdate(generics.UpdateAPIView):

    serializer_class = UsuariosSerializer
    queryset = Usuarios.objects.all()

    def update(self, request, **params):
        compativel = Usuarios.objects.get(id=request.data['id'])
        pergunta_existe = False
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
                    if rels[palavra[0]] + palavra[-1] > 100:
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
                    else:
                        rels[palavra[0]] -= palavra[-1]

            compativel.limpeza = rels['limpeza']
            compativel.disciplina = rels['disciplina']
            compativel.utilizacao = rels['utilizacao']
            compativel.organizacao = rels['organizacao']
            compativel.saude = rels['saude']
            compativel.producao = rels['producao']
            compativel.gastos = rels['gastos']
            compativel.ult_alt = request.data['pergunta'] + '-' + request.data['resposta']
            compativel.save()
    
        else:
            pergunta = Pergunta.objects.get(pk=1)
            pergunta_existe = True

        # if request.data['pergunta'] == Pergunta.objects.get(pk=4).texto_pergunta and not pergunta_existe:
        #     if request.data['resposta'] == 'Dar folga de 1 semana para os funcionários':
        #         pergunta = Pergunta.objects.get(ordem='Segunda_F')
        #     if request.data['resposta'] == 'Demitir todos os funcionários e contratar novos.':
        #         pergunta = Pergunta.objects.get(ordem='Segunda_D')
        #     if request.data['resposta'] == 'Começar a produção imediatamente':
        #         pergunta = Pergunta.objects.get(ordem='Segunda_P')
        #     if request.data['resposta'] == 'Dar um bônus salarial a todos os funcionários':
        #         pergunta = Pergunta.objects.get(ordem='Segunda_A')

        # elif request.data['pergunta'] == Pergunta.objects.get(pk=5).texto_pergunta:
        #     if request.data['resposta'] == 'Iniciar a produção dos produtos mais antigos':
        #         pergunta = Pergunta.objects.get(ordem='TerceiraA')
        #     if request.data['resposta'] == 'Dar um aumento salarial para os funcionários':
        #         pergunta = Pergunta.objects.get(ordem='TerceiraB')
        #     if request.data['resposta'] == 'Demitir alguns funcionários devido à falta de demanda por serviços':
        #         pergunta = Pergunta.objects.get(ordem='TerceiraC')
        #     if request.data['resposta'] == 'Fazer uma reunião para decidir novos produtos para a produção':
        #         pergunta = Pergunta.objects.get(ordem='TerceiraD')

        # elif request.data['pergunta'] == Pergunta.objects.get(pk=6).texto_pergunta:
        #     if request.data['resposta'] == 'Abrir vagas com salários mais baixos.':
        #         pergunta = Pergunta.objects.get(ordem='TerceiraE')
        #     if request.data['resposta'] == 'Abrir vagas com salários mais altos e exigindo maior qualificação profissional':
        #         pergunta = Pergunta.objects.get(ordem='TerceiraF')
        #     if request.data['resposta'] == 'Investir em automação':
        #         pergunta = Pergunta.objects.get(ordem='TerceiraG')
        #     if request.data['resposta'] == 'Readmitir os funcionários':
        #         pergunta = Pergunta.objects.get(ordem='TerceiraH')

        # elif request.data['pergunta'] == Pergunta.objects.get(pk=7).texto_pergunta:
        #     if request.data['resposta'] == 'Manter tudo como está':
        #         pergunta = Pergunta.objects.get(ordem='TerceiraI')
        #     if request.data['resposta'] == 'Fazer uma reunião para decidir novos produtos para a produção':
        #         pergunta = Pergunta.objects.get(ordem='TerceiraJ')
        #     if request.data['resposta'] == 'Admitir mais funcionários':
        #         pergunta = Pergunta.objects.get(ordem='TerceiraK')
        #     if request.data['resposta'] == 'Aumentar a carga horária dos funcionários':
        #         pergunta = Pergunta.objects.get(ordem='TerceiraL')

        # elif request.data['pergunta'] == Pergunta.objects.get(pk=8).texto_pergunta:
        #     if request.data['resposta'] == 'Dar um aumento salarial':
        #         pergunta = Pergunta.objects.get(ordem='TerceiraM')
        #     if request.data['resposta'] == 'Fazer uma reunião para decidir novos produtos para a produção':
        #         pergunta = Pergunta.objects.get(ordem='TerceiraN')
        #     if request.data['resposta'] == 'Fazer um plano de metas remuneradas para os funcionários':
        #         pergunta = Pergunta.objects.get(ordem='TerceiraO')
        #     if request.data['resposta'] == 'Demitir alguns funcionários devido à falta de demanda por serviços':
        #         pergunta = Pergunta.objects.get(ordem='TerceiraP')

        pergunta = Pergunta.objects.get(pk=1)
        respostas = Resposta.objects.filter(pergunta__texto_pergunta=pergunta.texto_pergunta)
        textos_respostas = []
        aumenta = []
        diminui = []
        for i in respostas.iterator():
            textos_respostas.append(i.texto_resposta)
            aumenta.append(i.aumenta)
            diminui.append(i.diminui)
        data = {
            'pergunta': pergunta.texto_pergunta,
            'resposta': textos_respostas,
            'disciplina': compativel.disciplina,
            'saude': compativel.saude,
            'organizacao': compativel.organizacao,
            'limpeza': compativel.limpeza,
            'utilizacao': compativel.utilizacao
        }
        return Response(data, headers={'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
