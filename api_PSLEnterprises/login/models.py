from django.db import models


class Usuarios(models.Model):
    nome = models.CharField(max_length=10)
    senha = models.CharField(max_length=20)

    rel_gov = models.IntegerField('Relacionamento com o governo', default=0)
    rel_pub = models.IntegerField('Relacionamento com o publico', default=0)
    rel_trab = models.IntegerField('Relacionamento com os trabalhadores',
                                   default=0)
    ult_alt = models.CharField('Ultima alteração', max_length=500, default='none')

    def __str__(self):
        return self.nome
