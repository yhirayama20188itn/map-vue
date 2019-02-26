# global
import time
# selenium + chrome driver
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.common.by import By
# pandas
import pandas as pd
df = pd.read_csv('./data/map.csv', sep=',', encoding="utf-8")


listA = []
listB = []

listA = df['方面コード']
listB = df['国コード']

# ブラウザーを起動
options = Options()
# options.add_argument('--headless')
driver = webdriver.Chrome(chrome_options=options)

for a, b in zip(listA, listB):
    driver.get('https://tour.his-j.com/ct/sp/search/02A_10/' + a + '/' + b)

    wait = WebDriverWait(driver, 20).until(
        expected_conditions.element_to_be_clickable((By.CSS_SELECTOR, "tour-preview")))

    # スクリーンショットを撮る。
    driver.save_screenshot('./images/' + a + '-' + b + '.png')

driver.quit()  # ブラウザーを終了する。
