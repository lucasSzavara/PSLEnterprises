from django.db import models


class Pergunta(models.Model):
    texto_pergunta = models.CharField(max_length=2000)
    ordem = models.CharField('Ordem da pergunta', default='random', max_length=9)

    def __str__(self):
        return self.texto_pergunta


class Resposta(models.Model):
    pergunta = models.ForeignKey(Pergunta, on_delete=models.CASCADE)

    texto_resposta = models.CharField(max_length=2000)
    aumenta = models.CharField(max_length=100)
    diminui = models.CharField(max_length=100)

    def __str__(self):
        return self.texto_resposta
