from typing import Any
from django.db import models

# Create your models here.
class products(models.Model):
    p_name=models.TextField()
    price=models.IntegerField()
    description=models.TextField()
    image=models.FileField(upload_to='../media')

    def __str__(self):
        return self.p_name