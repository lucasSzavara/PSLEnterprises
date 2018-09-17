from django.db import models


class Usuarios(models.Model):
    nome = models.CharField(max_length=10)
    senha = models.CharField(max_length=20)

    rel_inv = models.IntegerField('Relacionamento com os investidores', default=75)
    rel_pub = models.IntegerField('Relacionamento com o publico', default=75)
    rel_trab = models.IntegerField('Relacionamento com os trabalhadores',
                                   default=75)
    producao = models.IntegerField(default=1000000)
    gastos = models.IntegerField(default=100000)
    ult_alt = models.CharField('Ultima alteração', max_length=500, default='none')

    def __str__(self):
        return self.nome
