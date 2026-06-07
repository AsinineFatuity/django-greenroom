"""Stores all the configuration variables for the project"""
from decouple import config
SECRET_KEY = config('SECRET_KEY')
