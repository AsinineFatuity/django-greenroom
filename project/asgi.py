import os
from django.core.asgi import get_asgi_application
from project.utils import get_environment


os.environ.setdefault("DJANGO_SETTINGS_MODULE", f"project.settings.{get_environment()}")

application = get_asgi_application()
