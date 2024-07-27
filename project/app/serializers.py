from rest_framework import serializers
from .models import *

class model_serializers(serializers.ModelSerializer):
    class Meta:
        model=products
        fields="__all__"
