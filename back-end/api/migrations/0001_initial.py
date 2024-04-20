# Generated by Django 5.0.4 on 2024-04-18 23:06

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Actor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('second_name', models.CharField(max_length=100)),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], default='M', max_length=1)),
            ],
        ),
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='TVChannel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('year', models.IntegerField(blank=True, null=True)),
                ('country', models.TextField()),
                ('poster', models.URLField()),
                ('rating', models.FloatField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('year', models.IntegerField(blank=True, null=True)),
                ('country', models.TextField()),
                ('poster', models.URLField()),
                ('rating', models.FloatField(max_length=10)),
                ('actors', models.ManyToManyField(to='api.actor')),
                ('genres', models.ManyToManyField(to='api.genre')),
            ],
        ),
        migrations.CreateModel(
            name='TVSeries',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('season', models.IntegerField()),
                ('episodes', models.IntegerField()),
                ('year', models.IntegerField(blank=True, null=True)),
                ('country', models.TextField()),
                ('poster', models.URLField()),
                ('rating', models.FloatField(max_length=10)),
                ('actors', models.ManyToManyField(to='api.actor')),
                ('genres', models.ManyToManyField(to='api.genre')),
            ],
        ),
        migrations.CreateModel(
            name='Like',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_liked', models.BooleanField(default=False, verbose_name='Like')),
                ('movie', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.movie', verbose_name='Movie Post')),
                ('liked_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.user', verbose_name='Liked')),
            ],
        ),
    ]