"""UrduGrammarly URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from Grammar import views
from django.conf.urls import include
from rest_framework.authtoken.views import obtain_auth_token
from django.views.decorators.csrf import csrf_exempt
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('Grammar.urls')),
    path('auth/',obtain_auth_token),
    path('prediction',csrf_exempt(views.prediction),name="prediction"),
    path('correction',csrf_exempt(views.correction),name="correction"),
    path('grammar',csrf_exempt(views.grammar),name="grammar"),
]
