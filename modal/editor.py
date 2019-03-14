import requests
import bs4

get_url_info = requests.get(
    'https://tour.his-j.com/ct/sp/search/02A_10/AFR/TUR/', timeout=10)
bs4Obj = bs4.BeautifulSoup(get_url_info.text, 'lxml')
resultValue = bs4Obj.select('.result-number')[0].get_text()

def remove_whitespace(str):
    return ''.join(str.split())

# if remove_whitespace(resultValue) == "検索条件":
#     print('true')

print(remove_whitespace(resultValue))
