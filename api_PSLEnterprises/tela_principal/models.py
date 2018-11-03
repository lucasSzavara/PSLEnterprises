from django.db import models


class Usuarios(models.Model):
    nome = models.CharField(max_length=10)
    senha = models.CharField(max_length=20, default='12345')

    utilizacao = models.IntegerField('Senso de utilização', default=50)
    organizacao = models.IntegerField('Senso de organização', default=50)
    disciplina = models.IntegerField('Senso de disciplina', default=50)
    saude = models.IntegerField('Senso de saude', default=50)
    limpeza = models.IntegerField('Senso de limpeza', default=50)
    producao = models.IntegerField(default=1000000)
    gastos = models.IntegerField(default=100000)
    ult_alt = models.CharField('Ultima alteração', max_length=500, default='none')
    perdeu = models.BooleanField(default=False)

    def __str__(self):
        return self.nome
