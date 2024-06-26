# Generated by Django 4.0.6 on 2024-05-22 11:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project_reports', '0006_alter_targetlocationreport_facility_lat_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='activityplanreport',
            name='beneficiary_status',
            field=models.CharField(blank=True, choices=[('new_beneficiary', 'New Beneficiary'), ('old_beneficiary', 'Old Beneficiary')], max_length=15, null=True),
        ),
        migrations.AddField(
            model_name='activityplanreport',
            name='modality_retargeting',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='activityplanreport',
            name='seasonal_retargeting',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]
