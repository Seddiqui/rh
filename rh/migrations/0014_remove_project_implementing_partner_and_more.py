# Generated by Django 4.0.6 on 2023-04-04 06:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rh', '0013_activityplan_active_activityplan_state_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='implementing_partner',
        ),
        migrations.RemoveField(
            model_name='project',
            name='programme_partner',
        ),
        migrations.AddField(
            model_name='project',
            name='implementing_partners',
            field=models.ManyToManyField(related_name='implementing_partners', to='rh.organization'),
        ),
        migrations.AddField(
            model_name='project',
            name='programme_partners',
            field=models.ManyToManyField(related_name='programme_partners', to='rh.organization'),
        ),
    ]