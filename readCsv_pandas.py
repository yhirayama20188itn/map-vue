import pandas as pd
df = pd.read_csv('./data/map.csv', sep=',',
                 encoding="utf-8")

listA = []
listB = []

listA = df['方面コード']
listB = df['国コード']
leng = len(listA)

for n in range(leng):
    print(listA)
