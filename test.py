import time

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

# ブラウザーを起動
options = Options()
options.add_argument('--headless')
driver = webdriver.Chrome(chrome_options=options)

driver.get('https://tour.his-j.com/ct/search/02A_10/ASI/KOR/SEL/')
# htmlを取得・表示
# html = driver.page_source
# print(html)

# 検索語を入力して送信する。
# input_element = driver.find_element_by_name('q')
# input_element.send_keys('Python')
# input_element.send_keys(Keys.RETURN)

time.sleep(2)  # Chromeの場合はAjaxで遷移するので、とりあえず適当に2秒待つ。

# タイトルに'Python'が含まれていることを確認する。
# assert 'Python' in driver.title

# スクリーンショットを撮る。
driver.save_screenshot('./images/test.png')

# 検索結果を表示する。
# for a in driver.find_elements_by_css_selector('h3 > a'):
#     print(a.text)
#     print(a.get_attribute('href'))

driver.quit()  # ブラウザーを終了する。
