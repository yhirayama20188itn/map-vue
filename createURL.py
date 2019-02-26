import pandas as pd
df = pd.read_csv('./data/map.csv', sep=',',
                 encoding="utf-8")

listA = []
listB = []

listA = df['方面コード']
listB = df['国コード']

# 目標 https://tour.his-j.com/ct/sp/search/02A_10/ASI/KOR/SEL/

for a, b in zip(listA, listB):
    print('https://tour.his-j.com/ct/sp/search/02A_10/' + a + '/' + b)
