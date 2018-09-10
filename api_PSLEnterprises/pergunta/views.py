from rest_framework import generics
from .models import Pergunta, Resposta
from .serializers import PerguntaSerializer, RespostaSerializer
from django_filters import rest_framework as filters


class PerguntaList(generics.ListCreateAPIView):

    queryset = Pergunta.objects.all()
    serializer_class = PerguntaSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = '__all__'


class RespostaList(generics.ListCreateAPIView):

    queryset = Resposta.objects.all()
    serializer_class = RespostaSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = '__all__'


class PerguntaDetail(generics.RetrieveUpdateDestroyAPIView):

    queryset = Pergunta.objects.all()
    serializer_class = PerguntaSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = '__all__'


class RespostaDetail(generics.RetrieveUpdateDestroyAPIView):

    queryset = Resposta.objects.all()
    serializer_class = RespostaSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = '__all__'
