# Generated by Django 4.0.6 on 2024-01-15 09:24

from django.db import migrations
import django.db.models.deletion
import smart_selects.db_fields


class Migration(migrations.Migration):
    dependencies = [
        ("rh", "0018_alter_transfermechanismtype_code"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="activityplan",
            name="indicators",
        ),
        migrations.AddField(
            model_name="activityplan",
            name="indicator",
            field=smart_selects.db_fields.ChainedForeignKey(
                blank=True,
                chained_field="activity_type",
                chained_model_field="activity_types",
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="rh.indicator",
            ),
        ),
    ]