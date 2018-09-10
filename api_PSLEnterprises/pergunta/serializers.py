# -*- coding: utf-8 -*-
"""
Created on Sat Sep  8 13:34:17 2018

author: Lucas dos Santos Rodrigues Szavara
"""
from rest_framework import serializers
from .models import Pergunta, Resposta


class PerguntaSerializer(serializers.ModelSerializer):

    class Meta:

        model = Pergunta
        fields = '__all__'


class RespostaSerializer(serializers.ModelSerializer):

    class Meta:

        model = Resposta
        fields = '__all__'
