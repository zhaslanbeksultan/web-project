# Generated by Django 5.0.4 on 2024-04-21 12:46

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_movie_year'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tvseries',
            name='year',
            field=models.IntegerField(blank=True, default=api.models.Year, null=True),
        ),
    ]