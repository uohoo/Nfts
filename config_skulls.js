// Each attribute is a folder, each of the items inside is a .png inside the folder
// The order of the attributes defines the superposition order of the layers
// All of the items frequencies inside an attribute must amount to 100

const attributes = [
    { name: 'Background', items: [
        { name: 'To the moon', freq: 0 },
        { name: 'Hodl', freq: 0 },
        { name: 'GN', freq: 0 },
        { name: 'GM', freq: 0 },
        { name: 'Black', freq: 0 },
        { name: 'Lines 1', freq: 0 },
        { name: 'Lines 2', freq: 0 },
        { name: 'This is fine', freq: 0 },
        { name: 'Airdrop', freq: 0 },
        { name: 'LFG', freq: 0 },
        { name: 'Dark Forest', freq: 0 },
        { name: 'Beach', freq: 0 },
        { name: 'Farm', freq: 0 },
        { name: 'Bricks', freq: 0 },
        { name: 'Bull chart', freq: 0 },
        { name: 'Bear chart', freq: 0 },
        { name: 'Blue', freq: 0 },
        { name: 'Pink', freq: 0 },
        { name: 'Green', freq: 0 },
        { name: 'Yellow', freq: 0 }
    ]},
    { name: 'Head', items: [
        { name: 'Head_', freq: 0 }
    ]},
    { name: 'Hair and Hats', items: [
        { name: 'Witch', freq: 0 },
        { name: 'Orange', freq: 0 },
        { name: 'Blue', freq: 0 },
        { name: 'Farmer hat', freq: 0 },
        { name: 'Rich hat', freq: 0 },
        { name: 'Poor 1', freq: 0 },
        { name: 'Poor 2', freq: 0 },
        { name: 'Punk pink', freq: 0 },
        { name: 'Punk green', freq: 0 },
        { name: 'Brain', freq: 0 },
        { name: 'Bull', freq: 0 },
        { name: 'Ethereum cap', freq: 0 },
        { name: 'Avax cap', freq: 0 },
        { name: 'Link cap', freq: 0 },
        { name: 'Solana cap', freq: 0 },
        { name: 'Candle hat', freq: 0 },
        { name: 'Transparent', freq: 0 }
    ]},
    { name: 'Teeth', items: [
        { name: 'Vomit', freq: 0 },
        { name: 'Pipe', freq: 0 },
        { name: 'Joint', freq: 0 },
        { name: 'Straw', freq: 0 },
        { name: 'Burp', freq: 0 },
        { name: 'Dirty', freq: 0 },
        { name: 'Worm', freq: 0 },
        { name: 'Golden', freq: 0 },
        { name: 'Brackets', freq: 0 },
        { name: 'Canine', freq: 0 },
        { name: 'Silver Brackets', freq: 0 },
        { name: 'Pink tongue', freq: 0 },
        { name: 'Green tongue', freq: 0 },
        { name: 'LSD BTC', freq: 0 },
        { name: 'LSD ETH', freq: 0 },
        { name: 'LSD BNB', freq: 0 },
        { name: 'LSD TERRA', freq: 0 },
        { name: 'LSD AVAX', freq: 0 },
        { name: 'LSD DOGE', freq: 0 },
        { name: 'LSD SOLANA', freq: 0 },
        { name: 'LSD LINK', freq: 0 },
        { name: 'Gums', freq: 0 }
    ]},
    { name: 'Nose', items: [
        { name: 'Moustache', freq: 0 },
        { name: 'Big', freq: 0 },
        { name: 'Wood', freq: 0 },
        { name: 'Pig', freq: 0 },
        { name: 'Bugger', freq: 0 },
        { name: 'Piercing', freq: 0 },
        { name: 'Witch', freq: 0 },
        { name: 'Clown', freq: 0 },
        { name: 'Skull', freq: 0 },
        { name: 'Pimple', freq: 0 }
    ]},
    { name: 'Eyes', items: [
        { name: 'Snorkel', freq: 0 },
        { name: 'Chinese', freq: 0 },
        { name: 'Cry', freq: 0 },
        { name: 'Out', freq: 0 },
        { name: 'High', freq: 0 },
        { name: 'Glasses', freq: 0 },
        { name: 'Bitcoin', freq: 0 },
        { name: 'Fear', freq: 0 },
        { name: 'Woman', freq: 0 },
        { name: 'Cross', freq: 0 },
        { name: 'Spiral', freq: 0 }
    ]},
    { name: 'Clothes', items: [
        { name: 'MEME', freq: 0 },
        { name: 'Neoprene', freq: 0 },
        { name: 'Rich red', freq: 0 },
        { name: 'Witch', freq: 0 },
        { name: 'Poor green', freq: 0 },
        { name: 'Poor red', freq: 0 },
        { name: 'Orange', freq: 0 },
        { name: 'Farmer', freq: 0 },
        { name: 'Red and blue', freq: 0 },
        { name: 'Green', freq: 0 },
        { name: 'Punk 1', freq: 0 },
        { name: 'Punk 2', freq: 0 },
        { name: 'Turquoise pijama', freq: 0 },
        { name: 'Red pijama', freq: 0 },
        { name: 'Violet pijama', freq: 0 }
    ]}
];

// OUTPUT ATTRIBUTES EVEN WHEN NON-EXISTING
const all_layers = true;

// All equiprobable
const test = true;

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
    "symbol": "NBOYS",
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