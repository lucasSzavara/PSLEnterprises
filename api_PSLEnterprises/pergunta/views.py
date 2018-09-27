from rest_framework import generics
from .models import Pergunta, Resposta
from .serializers import PerguntaSerializer, RespostaSerializer


class PerguntaList(generics.ListCreateAPIView):

    queryset = Pergunta.objects.all()
    serializer_class = PerguntaSerializer


class RespostaList(generics.ListCreateAPIView):

    queryset = Resposta.objects.all()
    serializer_class = RespostaSerializer


class PerguntaDetail(generics.RetrieveUpdateDestroyAPIView):

    queryset = Pergunta.objects.all()
    serializer_class = PerguntaSerializer


class RespostaDetail(generics.RetrieveUpdateDestroyAPIView):

    queryset = Resposta.objects.all()
    serializer_class = RespostaSerializer
