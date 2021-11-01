// Each attribute is a folder, each of the items inside is a .png inside the folder
// The order of the attributes defines the superposition order of the layers
// All of the items frequencies inside an attribute must amount to 100

const attributes = [
    { name: 'Background', items: [
        { name: 'To the moon', freq: 5 },
        { name: 'Hodl', freq: 5 },
        { name: 'GN', freq: 5 },
        { name: 'GM', freq: 5 },
        { name: 'Black', freq: 5 },
        { name: 'Lines 1', freq: 5 },
        { name: 'Lines 2', freq: 5 },
        { name: 'This is fine', freq: 5 },
        { name: 'Airdrop', freq: 5 },
        { name: 'LFG', freq: 5 },
        { name: 'Dark Forest', freq: 5 },
        { name: 'Beach', freq: 5 },
        { name: 'Farm', freq: 5 },
        { name: 'Bricks', freq: 5 },
        { name: 'Bull chart', freq: 5 },
        { name: 'Bear chart', freq: 5 },
        { name: 'Blue', freq: 5 },
        { name: 'Pink', freq: 5 },
        { name: 'Green', freq: 5 },
        { name: 'Yellow', freq: 5 }
    ]},
    { name: 'Head', items: [
        { name: 'Head_', freq: 100 }
    ]},
    { name: 'Hair and Hats', items: [
        { name: 'Witch', freq: 7 },
        { name: 'Orange', freq: 7 },
        { name: 'Blue', freq: 7 },
        { name: 'Farmer hat', freq: 7 },
        { name: 'Rich hat', freq: 5 },
        { name: 'Poor 1', freq: 7 },
        { name: 'Poor 2', freq: 7 },
        { name: 'Punk pink', freq: 6 },
        { name: 'Punk green', freq: 6 },
        { name: 'Brain', freq: 4 },
        { name: 'Bull', freq: 6 },
        { name: 'Ethereum cap', freq: 5 },
        { name: 'Avax cap', freq: 5 },
        { name: 'Link cap', freq: 5 },
        { name: 'Solana cap', freq: 5 },
        { name: 'Candle hat', freq: 4 },
        { name: 'Transparent', freq: 7 }
    ]},
    { name: 'Teeth', items: [
        { name: 'Vomit', freq: 7 },
        { name: 'Pipe', freq: 7 },
        { name: 'Joint', freq: 7 },
        { name: 'Straw', freq: 7 },
        { name: 'Burp', freq: 7 },
        { name: 'Dirty', freq: 7 },
        { name: 'Worm', freq: 7 },
        { name: 'Diamond', freq: 3 },
        { name: 'Golden brackets', freq: 5 },
        { name: 'Canine', freq: 7 },
        { name: 'Silver Brackets', freq: 7 },
        { name: 'Pink tongue', freq: 5 },
        { name: 'Green tongue', freq: 5 },
        { name: 'LSD BTC', freq: 1.5 },
        { name: 'LSD ETH', freq: 1.5 },
        { name: 'LSD BNB', freq: 1.5 },
        { name: 'LSD TERRA', freq: 1.5 },
        { name: 'LSD AVAX', freq: 1.5 },
        { name: 'LSD DOGE', freq: 1.5 },
        { name: 'LSD SOLANA', freq: 1.5 },
        { name: 'LSD LINK', freq: 1.5 },
        { name: 'Gums', freq: 7 }
    ]},
    { name: 'Nose', items: [
        { name: 'Moustache', freq: 10 },
        { name: 'Big', freq: 10 },
        { name: 'Wood', freq: 10 },
        { name: 'Pig', freq: 10 },
        { name: 'Bugger', freq: 10 },
        { name: 'Piercing', freq: 10 },
        { name: 'Witch', freq: 10 },
        { name: 'Clown', freq: 10 },
        { name: 'Skull', freq: 10 },
        { name: 'Pimple', freq: 10 }
    ]},
    { name: 'Eyes', items: [
        { name: 'Snorkel', freq: 9.2 },
        { name: 'Chinese', freq: 9.2 },
        { name: 'Cry', freq: 9.2 },
        { name: 'Out', freq: 9.2 },
        { name: 'High', freq: 9.2 },
        { name: 'Glasses', freq: 9.2 },
        { name: 'Bitcoin', freq: 8 },
        { name: 'Fear', freq: 9.2 },
        { name: 'Woman', freq: 9.2 },
        { name: 'Cross', freq: 9.2 },
        { name: 'Spiral', freq: 9.2 }
    ]},
    { name: 'Clothes', items: [
        { name: 'MEME', freq: 7 },
        { name: 'Neoprene', freq: 7 },
        { name: 'Rich red', freq: 5 },
        { name: 'Witch', freq: 7 },
        { name: 'Poor green', freq: 7 },
        { name: 'Poor red', freq: 7 },
        { name: 'Orange', freq: 7 },
        { name: 'Farmer', freq: 7 },
        { name: 'Red and blue', freq: 7 },
        { name: 'Green', freq: 7 },
        { name: 'Punk 1', freq: 7 },
        { name: 'Punk 2', freq: 7 },
        { name: 'Turquoise pijama', freq: 7 },
        { name: 'Red pijama', freq: 7 },
        { name: 'Violet pijama', freq: 7 }
    ]}
];

// OUTPUT ATTRIBUTES EVEN WHEN NON-EXISTING
const all_layers = true;

// All equiprobable
const test = false;

// Total nft
const total = 400;

// Nft size
const format = {
    width: 750,
    height: 750
};

// Name for the nft title (base_name #136)
const base_name = "US";

// Template for the metadata, 0.png must be left alone
const metadata = {
    "name": "",
    "symbol": "#US",
    "description": "The nastiest people from Earth have arrived to the Wasteland. Help them save the universe!",
    "seller_fee_basis_points": 500,
    "external_url": "https://nastyboysclub.com",
    "edition": "Original 2021",
    "attributes": [],
    "properties": {
      "category": "image",
      "creators": [
        {
          "address": "",
          "share": 50
        },
        {
          "address": "",
          "share": 30
        },
        {
          "address": "",
          "share": 15
        },
        {
          "address": "",
          "share": 5
        }
      ],
      "files": [
        {
          "uri": "0.png",
          "type": "image/png"
        }
      ]
    },
    "image": "0.png"
  }

module.exports = { format, attributes, total, metadata, base_name, all_layers, test };