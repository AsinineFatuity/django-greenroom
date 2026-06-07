import os
from django.core.wsgi import get_wsgi_application
from project.utils import get_environment

os.environ.setdefault("DJANGO_SETTINGS_MODULE", f"project.settings.{get_environment()}")

application = get_wsgi_application()
