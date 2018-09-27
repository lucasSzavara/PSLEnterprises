from django.db import models


class Pergunta(models.Model):
    texto_pergunta = models.CharField(max_length=2000)
    utilizacao = models.IntegerField('Senso de utilização', default=75)
    organizacao = models.IntegerField('Senso de organização', default=75)
    saude = models.IntegerField('Senso de saúde', default=75)
    limpeza = models.IntegerField('Senso de limpeza', default=75)
    disciplina = models.IntegerField('Senso de disciplina', default=75)
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
