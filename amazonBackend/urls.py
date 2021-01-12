from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    
      path('', views.register, name='resgister'),
      path('register', views.checkUser),
      path('checkout', views.checkout),

]
