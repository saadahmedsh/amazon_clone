from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from amazonBackend.models import User, Order
from .serializers import userSerializer
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from rest_framework.parsers import JSONParser


data=User.objects.all()

@csrf_exempt
def register(request):
    ajax_data=json.loads(request.body)
    backend_data=data.values()

    exists=False
    for user in backend_data:
        if user['email'] == ajax_data['email']:
                exists=True
                return HttpResponse(exists)

    

    _name=ajax_data['name']
    _email=ajax_data['email']
    _password=ajax_data['password']
        
    jeff=User(name=_name, email=_email, password=_password)
    jeff.save()



    return HttpResponse('User created')

                
               
                

   





@csrf_exempt
def checkUser(request):
    ajax_data=json.loads(request.body)
    backend_data=data.values()
    is_user=False
 

    for user in backend_data:
        if user['email'] == ajax_data['email']:
            if user['password'] == ajax_data['password']:
                is_user=True
                
                response_data = {
                    'name':user['name'],
                    'id': user['id'],
                    'is_user':is_user
                    
                }

                
                return JsonResponse(response_data, safe=False)
               
                

    return HttpResponse(is_user)
    
   
    

   


@csrf_exempt
def checkout(request):
    ajax_data=json.loads(request.body)
    backend_data=data.values()

 
    for user in backend_data:
        if int(user['id']) == int(ajax_data['id']): #user exists in the backend
            obj=Order(user_id=ajax_data['id'], orders_json=ajax_data['items_json'])
            obj.save()
            return HttpResponse('saved')
       
       


    return HttpResponse('Error in credentials')      

            




    


