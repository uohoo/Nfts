// OUTPUT ATTRIBUTES EVEN WHEN NON-EXISTING
const all_layers = true;

// All equiprobable
const test = true;

// Total nft
const total = 5000;

// Nft size
const format = {
    width: 600,
    height: 600
};

// Name for the nft title (base_name #136)
const base_name = "#US";

// Template for the metadata, 0.png must be left alone
const metadata = {
    "name": "",
    "symbol": "#US",
    "description": "#US has arrived to have fun on TERRA. Start playing with them!",
    "seller_fee_basis_points": 500,
    "external_url": "",
    "edition": "Original 2021",
    "attributes": [],
    "properties": {
      "category": "image",
      "creators": [

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

module.exports = { format, total, metadata, base_name, all_layers, test };