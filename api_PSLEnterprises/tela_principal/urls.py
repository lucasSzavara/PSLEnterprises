# -*- coding: utf-8 -*-
"""
Created on Sun Sep  9 13:18:00 2018

author: Lucas dos Santos Rodrigues Szavara
"""
from django.conf.urls import url
from . import views

urlpatterns = [
        url(r'^usuarios/$', views.UsuariosList.as_view(), name='usuarios'),
        url(r'^usuario/(?P<pk>[0-9]+)/$', views.UsuariosUpdate.as_view(), name='usuario-put'),
]
