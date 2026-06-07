from decouple import config

PROD_ENVIRONMENT = "production"


def get_environment():
    return config("ENVIRONMENT", default=PROD_ENVIRONMENT)
