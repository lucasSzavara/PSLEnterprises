# -*- coding: utf-8 -*-
"""
Created on Sun Sep  9 12:41:22 2018

author: Lucas dos Santos Rodrigues Szavara
"""

from rest_framework import serializers
from .models import Usuarios


class UsuariosSerializer(serializers.ModelSerializer):

    class Meta:
        model = Usuarios
        fields = '__all__'
