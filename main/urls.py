"""main URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
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
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static
from chat import views as chat_views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls')),
    path('chatbot', include('home.urls')),

    path('', chat_views.index, name='index'),
    path('<int:id>', chat_views.index, name='index'),
    path('login/', chat_views.login_view, name='login_view'),
    path('signup/', chat_views.signup_view, name='signup_view'),
    path('settings/', chat_views.settings_view, name='settings_view'),

    # APIs
    path('online-users/', chat_views.api_online_users, name='online-users'),
    path('online-users/<int:id>', chat_views.api_online_users, name='online-users'),
    path('chat-messages/<int:id>', chat_views.api_chat_messages, name='chat_messages'),
    path('unread/', chat_views.api_unread, name='api_unread'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

