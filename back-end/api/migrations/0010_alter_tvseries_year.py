# Generated by Django 5.0.4 on 2024-04-21 12:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_alter_tvseries_year'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tvseries',
            name='year',
            field=models.IntegerField(blank=True, default='Year', null=True),
        ),
    ]
