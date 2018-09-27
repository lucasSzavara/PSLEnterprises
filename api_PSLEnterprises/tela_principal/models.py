from django.db import models


class Usuarios(models.Model):
    nome = models.CharField(max_length=10)
    senha = models.CharField(max_length=20)

    utilizacao = models.IntegerField('Senso de utilização', default=75)
    organizacao = models.IntegerField('Senso de organização', default=75)
    disciplina = models.IntegerField('Senso de disciplina', default=75)
    saude = models.IntegerField('Senso de saude', default=75)
    limpeza = models.IntegerField('Senso de limpeza',
                                   default=75)
    producao = models.IntegerField(default=1000000)
    gastos = models.IntegerField(default=100000)
    ult_alt = models.CharField('Ultima alteração', max_length=500, default='none')

    def __str__(self):
        return self.nome
