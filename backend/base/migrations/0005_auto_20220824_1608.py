# Generated by Django 3.2.8 on 2022-08-24 13:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_product_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='category',
        ),
        migrations.RemoveField(
            model_name='product',
            name='quantity',
        ),
    ]
