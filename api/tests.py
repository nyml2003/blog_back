from django.test import TestCase

# Create your tests here.
import requests

response = requests.get('http://127.0.0.1:8090/api/blog/rest/')

print(response)
