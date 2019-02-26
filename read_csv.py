import csv

with open('./data/TEST_STOCK.csv', 'r') as f:
    reader = csv.reader(f)
    # header = next(reader)  # ヘッダーを読み飛ばしたい時

    for row in reader:
        print (row)
