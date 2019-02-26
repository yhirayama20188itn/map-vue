import time
import datetime
import shutil
# pandas
import pandas as pd
df = pd.read_csv('./data/map.csv', sep=',', encoding="utf-8")
# selenium + chrome driver
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.common.by import By
# Beautifulsoup
import requests
from bs4 import BeautifulSoup

# 予めbk作成
# today = datetime.date.today().strftime('%Y-%m-%d')
# shutil.copyfile("./data/map.csv", "./bk/" + today + ".csv")

listA = []
listB = []
listC = []

listA = df['方面コード']
listB = df['国コード']
listC = df['都市コード']

# def remove_whitespace(str):
#     return ''.join(str.split())

# ブラウザーを起動
options = Options()
# options.add_argument('--headless')
driver = webdriver.Chrome(chrome_options=options)

# ブラウザーを起動
options = Options()
options.add_argument('--headless')
driver = webdriver.Chrome(chrome_options=options)

for i, (a, b, c) in enumerate(zip(listA, listB, listC)):
    # driver.get('https://tour.his-j.com/ct/sp/search/02A_10/' + a + '/' + b)
    driver.get('https://tour.his-j.com/ct/search/02A_10/' + a + '/' + b + '/' + c)

    time.sleep(5)

    html = driver.page_source.encode('utf-8')
    bs4Obj = BeautifulSoup(html, "lxml")

    result_num = bs4Obj.select_one(".result-number").string
    result_num = int(result_num.replace(',', ''))
    print(result_num)

    if result_num == 5159:
        print(i)
        print('true')
        df = df.drop(i, axis=0)
        print(df)
        df.to_csv('./dist/map.csv')


driver.quit()
