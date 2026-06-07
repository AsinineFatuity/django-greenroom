#!/usr/bin/env python
import os
import sys
from decouple import config

PROD_ENVIRONMENT = "production"
environment = config("ENVIRONMENT", default=PROD_ENVIRONMENT)


def main():
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", f"project.settings.{environment}")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == "__main__":
    main()
