from rest_framework import generics
from .models import Pergunta, Resposta
from .serializers import PerguntaSerializer, RespostaSerializer
from rest_framework.permissions import AllowAny


class PerguntaList(generics.ListCreateAPIView):

    queryset = Pergunta.objects.all()
    serializer_class = PerguntaSerializer
    permission_classes = (AllowAny, )


class RespostaList(generics.ListCreateAPIView):

    queryset = Resposta.objects.all()
    serializer_class = RespostaSerializer
    permission_classes = (AllowAny, )


class PerguntaDetail(generics.RetrieveUpdateDestroyAPIView):

    queryset = Pergunta.objects.all()
    serializer_class = PerguntaSerializer
    permission_classes = (AllowAny, )


class RespostaDetail(generics.RetrieveUpdateDestroyAPIView):

    queryset = Resposta.objects.all()
    serializer_class = RespostaSerializer
    permission_classes = (AllowAny, )
