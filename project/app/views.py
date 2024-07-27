from django.shortcuts import render
from .models import *
from rest_framework import viewsets
from .serializers import model_serializers
# Create your views here.
 
class product_manage(viewsets.ModelViewSet):
    queryset=products.objects.all()
    serializer_class=model_serializers