from django.contrib import admin
from .models import User, Order

# Register your models here.


@admin.register(User)

class InfoUSer(admin.ModelAdmin):
    list_display = [ 'name', 'email', 'password']


@admin.register(Order)
class InfoOrder(admin.ModelAdmin):
    list_display = [ 'id', 'orders_json']