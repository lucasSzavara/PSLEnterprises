# -*- coding: utf-8 -*-
"""
Created on Sat Sep  8 13:49:00 2018

author: Lucas dos Santos Rodrigues Szavara
"""

from django.conf.urls import url
from . import views

urlpatterns = [
     url(r'^perguntas/$', views.PerguntaList.as_view(), name='perguntas-list'),
     url(r'^pergunta/(?P<pk>[0-9]+)/$', views.PerguntaDetail.as_view(),
         name='pergunta-detail'),
     url(r'^respostas/$', views.RespostaList.as_view(), name='respostas-list'),
     url(r'^resposta/(?P<pk>[0-9]+)/$', views.RespostaDetail.as_view(),
         name='resposta-detail'),
]
