# Generated by Django 3.2.8 on 2022-09-29 16:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0012_rename_cat_id_product_cat'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='category',
        ),
    ]