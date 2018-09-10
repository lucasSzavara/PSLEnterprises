from rest_framework import generics
from .models import Usuarios
from pergunta.models import Pergunta, Resposta
from .serializers import UsuariosSerializer
from django_filters import rest_framework as filters
from rest_framework.response import Response

    
class UsuariosList(generics.ListCreateAPIView):

    queryset = Usuarios.objects.all()
    serializer_class = UsuariosSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = '__all__'


class UsuariosUpdate(generics.UpdateAPIView):

    serializer_class = UsuariosSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = '__all__'
    queryset = Usuarios.objects.all()

    def update(self, request, **params):
        compativel = Usuarios.objects.get(id=request.data['id'])
        if 'ult_data' in request.data and request.data['ult_data'] != 'none':
            rels = {
                'rel_gov': compativel.rel_gov,
                'rel_pub': compativel.rel_pub,
                'rel_trab': compativel.rel_trab
            }
            alters = request.data['ult_alt'].split()
            for i in alters:
                palavra = i.split('(')
                palavra[-1] = int(palavra[-1][:-1])
                rels[palavra[0]] = rels[palavra[0]] + palavra[-1]

            compativel.rel_gov = rels['rel_gov']
            compativel.rel_pub = rels['rel_pub']
            compativel.rel_trab = rels['rel_trab']
            compativel.save()
    

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
            'texto_pergunta': pergunta.texto_pergunta,
            'texto_resposta': textos_respostas,
            'aumenta': aumenta,
            'diminui': diminui
        }
        return Response(data, headers={'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})