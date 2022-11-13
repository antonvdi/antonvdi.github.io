import requests
from datetime import datetime
import json

baselink = r"http://127.0.0.1:8080/"

# payload = {
#     "title": 'Atomkraft er ikke en mirakelløsning på klimaspørgsmålet',
#     "author": 'Anton Irvold',
#     "time": datetime.strftime(datetime(2022, 4, 29), r"%Y-%m-%d")
# }

#requests.post(baselink + "add_article", payload)

resp = requests.get(baselink + "get_articles")
d = json.load(resp.content)
print(d)