from project.settings.base import *  # noqa F403

ALLOWED_HOSTS = [".your-awesome-project.com"]

# configure https and ssl settings for production
HOST_SCHEME = "https://"
SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
# configure hsts settings (http strict transport security) avoids insecure connection to my webapp
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_SECONDS = 31536000
SECURE_HSTS_PRELOAD = True
# configure to prevent cross site scripting attacks
SECURE_BROWSER_XSS_FILTER = True
# X-Frame-Options
X_FRAME_OPTIONS = "DENY"
# X-Content-Type-Options
SECURE_CONTENT_TYPE_NOSNIFF = True
