# Generated by Django 2.1 on 2018-10-27 14:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tela_principal', '0005_auto_20180927_1059'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usuarios',
            name='senha',
        ),
    ]