# Generated by Django 5.0.7 on 2024-08-04 20:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('StickyNotes', '0002_alter_stickynote_unid'),
    ]

    operations = [
        migrations.RenameField(
            model_name='stickynote',
            old_name='user',
            new_name='author',
        ),
        migrations.RenameField(
            model_name='stickynote',
            old_name='create_at',
            new_name='created_at',
        ),
        migrations.AddField(
            model_name='stickynote',
            name='position',
            field=models.JSONField(default={}, verbose_name='Position'),
        ),
    ]
