
from django.contrib import admin
from django.urls import path, re_path

from django.http import HttpRequest
from django.views.generic import TemplateView

class HomeView(TemplateView):
    template_name = "home.html"
    context = {}

    def get(self, request: HttpRequest, *args, **kwargs):
        return self.render_to_response(self.context)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", HomeView.as_view(), name="home"),
    re_path(r"^app/.*$", HomeView.as_view(), name="app")
]
