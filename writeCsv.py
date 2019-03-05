import datetime
import shutil
# Beautifulsoup
import requests
import bs4
# pandas
import pandas as pd
df = pd.read_csv('./data/map.csv', sep=',', encoding="utf-8")


# 予めbk作成
today = datetime.date.today().strftime('%Y-%m-%d')
shutil.copyfile("./modal/data/map.csv", "./bk/" + today + ".csv")

listA = []
listB = []

listA = df['方面コード']
listB = df['国コード']

def remove_whitespace(str):
    return ''.join(str.split())

for i, (a, b) in enumerate(zip(listA, listB)):
    get_url_info = requests.get('https://tour.his-j.com/ct/sp/search/02A_10/' + a + '/' + b)
    bs4Obj = bs4.BeautifulSoup(get_url_info.text, 'lxml')
    resultValue = bs4Obj.select('.condi-view')[0].get_text()
    if remove_whitespace(resultValue) == "検索条":
        print(i)
        df = df.drop(i, axis=0)
        print(df)
        df.to_csv('./data/map_new.csv')
