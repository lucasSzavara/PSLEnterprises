from django.db import models


class Pergunta(models.Model):
    texto_pergunta = models.CharField(max_length=2000)
    rel_inv = models.IntegerField('Relacionamento com os investidores', default=75)
    rel_pub = models.IntegerField('Relacionamento com o publico', default=75)
    rel_trab = models.IntegerField('Relacionamento com os funcionarios',
                                   default=75)
    repete = models.BooleanField(default=True)
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
