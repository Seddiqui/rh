# Generated by Django 4.0.6 on 2024-06-04 06:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rh', '0015_project_organization'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='project',
            options={'permissions': [('archive_unarchive_project', 'Archive/UnArchive project'), ('view_org_projects', "View your organization's projects"), ('view_cluster_projects', 'View your clusters projects')]},
        ),
    ]