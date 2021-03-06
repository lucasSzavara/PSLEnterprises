# Generated by Django 2.1.1 on 2018-09-27 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tela_principal', '0004_auto_20180916_1629'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usuarios',
            name='rel_inv',
        ),
        migrations.RemoveField(
            model_name='usuarios',
            name='rel_pub',
        ),
        migrations.RemoveField(
            model_name='usuarios',
            name='rel_trab',
        ),
        migrations.AddField(
            model_name='usuarios',
            name='disciplina',
            field=models.IntegerField(default=75, verbose_name='Senso de disciplina'),
        ),
        migrations.AddField(
            model_name='usuarios',
            name='limpeza',
            field=models.IntegerField(default=75, verbose_name='Senso de limpeza'),
        ),
        migrations.AddField(
            model_name='usuarios',
            name='organizacao',
            field=models.IntegerField(default=75, verbose_name='Senso de organização'),
        ),
        migrations.AddField(
            model_name='usuarios',
            name='saude',
            field=models.IntegerField(default=75, verbose_name='Senso de saude'),
        ),
        migrations.AddField(
            model_name='usuarios',
            name='utilizacao',
            field=models.IntegerField(default=75, verbose_name='Senso de utilização'),
        ),
    ]
