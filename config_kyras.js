// Each attribute is a folder inside /layers
// Each of the items inside an attribute is a .png inside the said folder
// The order of the attributes in this list defines the superposition order of the layers
// All of the items frequencies inside an attribute must amount to 100


const attributes = [
  { name: 'BACKGROUND', items: [
    { name: 'TRIPPY WASTELAND', freq: 2 },
    { name: 'SUNSET NASTY VALLEY', freq: 10 },
    { name: 'SUNSET NASTY CAVE', freq: 10 },
    { name: 'RED WASTELAND', freq: 16 },
    { name: 'NIGHT NASTY VALLEY', freq: 10 },
    { name: 'NASTY VALLEY', freq: 10 },
    { name: 'NASTY CAVE', freq: 10 },
    { name: 'GREEN WASTELAND', freq: 16 },
    { name: 'BLUE WASTELAND', freq: 16 }
  ]},
  { name: 'SKIN', items: [
    { name: 'YELLOW ALIEN', freq: 5 },
    { name: 'TANNED', freq: 25 },
    { name: 'SOLAR RED', freq: 5 },
    { name: 'REPTILIAN', freq: 5 },
    { name: 'PINK FELINE', freq: 5 },
    { name: 'HUMAN', freq: 39 },
    { name: 'GRAPHITE', freq: 5 },
    { name: 'BLUE REPTILE', freq: 5 },
    { name: 'AQUA', freq: 5 },
    { name: 'COSMIC', freq: 1, val: [6,7] }
  ]},
  { name: 'TATTOO', items: [
    { name: 'GANG', freq: 20 },
    { name: 'SOLAR', freq: 10 },
    { name: 'CYBERPUNK', freq: 20 },
    { name: 'NONE', freq: 50 }
  ]},
  { name: 'EYES', items: [
    { name: 'REPTILE', freq: 5 },
    { name: 'PINK INFECTED', freq: 5 },
    { name: 'GREEN INFECTED', freq: 5 },
    { name: 'GREEN', freq: 25 },
    { name: 'CYBORG', freq: 15 },
    { name: 'BLUE', freq: 25 },
    { name: 'ANGRY', freq: 20 }
  ]},
  { name: 'MOUTH', items: [
    { name: 'PURPLE TONGUE', freq: 5 },
    { name: 'GREEN TONGUE', freq: 5 },
    { name: 'ANGRY', freq: 10 },
    { name: 'BLACK LIPS', freq: 10 },
    { name: 'BLACK TONGUE', freq: 10 },
    { name: 'RED LIPS', freq: 25 },
    { name: 'SMILE', freq: 20 },
    { name: 'TONGUE OUT', freq: 15 }
  ]},
  { name: 'HAIR AND HELMET', items: [
    { name: 'SILVER MOHAWK', freq: 6 },
    { name: 'SILVER', freq: 6 },
    { name: 'RED RIBBON', freq: 6 },
    { name: 'RED HAIR', freq: 6 },
    { name: 'PINK MOHAWK', freq: 6 },
    { name: 'BLUE MOHAWK', freq: 6 },
    { name: 'GREEN MOHAWK', freq: 6 },
    { name: 'BLONDE', freq: 6 },
    { name: 'BLACK RIBBON', freq: 2 },
    { name: 'YELLOW GLASSES', freq: 5 },
    { name: 'SQUID GAME', freq: 2.5 },
    { name: 'RED GLASSES', freq: 5 },
    { name: 'QUEEN', freq: 4 },
    { name: 'NASTY', freq: 5 },
    { name: 'HODL', freq: 5 },
    { name: 'DOUBLE PONYTAIL', freq: 5 },
    { name: 'GRAY CYBERPUNK', freq: 5 },
    { name: 'YELLOW CYBERPUNK', freq: 5 },
    { name: 'BLUE HEADPHONES', freq: 2.5 },
    { name: 'GREEN HEADPHONES', freq: 2.5 },
    { name: 'ANGRY', freq: 3.5 }
  ]},
  { name: 'CLOTHING', items: [
    { name: 'YELLOW NEOPRENE', freq: 5 },
    { name: 'YELLOW CYBERPUNK JACKET', freq: 5 },
    { name: 'YELLOW COAT', freq: 5 },
    { name: 'SURVIVOR', freq: 5 },
    { name: 'ARMY', freq: 7.5 },
    { name: 'SILVER ARMOR', freq: 5 },
    { name: 'RED CYBERPUNK JACKET', freq: 5 },
    { name: 'RAINBOW CYBORG', freq: 5 },
    { name: 'QUEEN', freq: 5 },
    { name: 'PINK WARRIOR', freq: 5 },
    { name: 'NEOPRENE', freq: 5 },
    { name: 'CYBORG', freq: 5 },
    { name: 'CYBERPUNK JACKET', freq: 5 },
    { name: 'BLUE ARMY', freq: 7.5 },
    { name: 'BLACK WARRIOR', freq: 5 },
    { name: 'BLACK SURVIVOR', freq: 5 },
    { name: 'BLACK JACKET NEOPRENE', freq: 5 },
    { name: 'BLACK HELMET', freq: 5 },
    { name: 'BLACK BRA', freq: 5 }
  ]},
  { name: 'MASK', items: [
    { name: 'VISOR', freq: 4 },
    { name: 'GOLD VISOR', freq: 4 },
    { name: 'YELLOW CYBERPUNK', freq: 4 },
    { name: 'RED CYBERPUNK', freq: 4 },
    { name: 'BLACK VISOR', freq: 4 },
    { name: 'NONE', freq: 80 }
  ]}
];

// OUTPUT ATTRIBUTES EVEN WHEN NON-EXISTING
const all_layers = true;

// All equiprobable
const test = false;

// Total nft
const total = 5555;

// Nft size
const format = {
    width: 600,
    height: 600
};

// Name for the nft title (base_name #136)
const base_name = "Kyra";

// Template for the metadata, 0.png must be left alone
const metadata = {
    "name": "",
    "symbol": "KYRAS",
    "description": "KYRA joined The Nasty Boys to help Moonlander save the Universe!",
    "seller_fee_basis_points": 3000,
    "external_url": "https://nastyboys.info",
    "edition": "Kyras 2021",
    "attributes": [],
    "properties": {
      "category": "image",
      "creators": [
        {
          "address": "86kaoxZx2CMjkm25TzVxNingJPFF1bZ2ySBRbhizHa3A",
          "share": 50
        },
        {
          "address": "7eCBsvvzgZiXwYr92WNPakByMb6za7DCNMXqAuF24Lzc",
          "share": 30
        },
        {
          "address": "3miRSg2bsnyh62ycJv8B5GaGR9tLvtayRvR4HeXxay56",
          "share": 15
        },
        {
          "address": "6hSnwEt9ja64nsX7HpYvejBjVob2ZGy1yeSqB7SGJPkh",
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