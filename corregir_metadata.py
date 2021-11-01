import os, json

num = 5555
path = 'C:/Users/Joan/source/repos/solana-nft-uploader-master/coleccio/'

for i in range(00,5555):
    with open(path + str(i) + '.json', 'r') as read_file: # Falta per crear el json del SC de la main
        md = json.load(read_file)
    if md['attributes'][1]['value'] == 'COSMIC': print(i)