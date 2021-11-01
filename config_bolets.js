const attributes = [
	{ name: 'Background', items: [
		{ name: 'Blue', freq: 7 },
		{ name: 'ClearBrown', freq: 7 },
		{ name: 'Desert Left', freq: 1 },
		{ name: 'Forest Left', freq: 1 },
		{ name: 'Forest Right', freq: 1 },
		{ name: 'Green', freq: 7 },
		{ name: 'Orange', freq: 7 },
		{ name: 'Pink', freq: 7 },
		{ name: 'Purple', freq: 7 },
		{ name: 'Red', freq: 7 },
		{ name: 'Poker', freq: 8 },
		{ name: 'Casino', freq: 8 },
		{ name: 'BlackJack', freq: 8 },
		{ name: 'Solana1', freq: 5 },
		{ name: 'Solana2', freq: 5 },
		{ name: 'Solana3', freq: 5 },
		{ name: 'Swamp Left', freq: 1 },
		{ name: 'Swamp Right', freq: 1 },
		{ name: 'Yellow', freq: 7  },
	]},

	{ name: 'Body', items: [
		{ name: 'Base Green', freq: 5 },
		{ name: 'Base Blue', freq: 5 },
		{ name: 'Base Pink', freq: 5 },
		{ name: 'Base', freq: 5 },
		{ name: 'Bubbles', freq: 2.5 },
		{ name: 'Galaxy Green', freq: 2.5 },
		{ name: 'Galaxy', freq: 5 },
		{ name: 'Green Lines', freq: 2.5 },
		{ name: 'Magma', freq: 4.5 },
		{ name: 'Copernicus Blue', freq: 2.5 },
		{ name: 'Copernicus', freq: 2.5 },
		{ name: 'Mud', freq: 2 },
		{ name: 'Paint Blue', freq: 2.5 },
		{ name: 'Paint', freq: 5 },
		{ name: 'Splat', freq: 1.5 },
		{ name: 'Splatside', freq: 1.5 },
		{ name: 'Spots Red', freq: 2 },
		{ name: 'Spots', freq: 2 },
		{ name: 'Swamp', freq: 2 },
		{ name: 'Tattoo Grey', freq: 2.5 },
		{ name: 'Tattoo', freq: 2.5 },
		{ name: 'Tiger Red', freq: 2.5 },
		{ name: 'Tiger', freq: 2.5 },
		{ name: 'Tricolor Blue', freq: 2.5 },
		{ name: 'Tricolor Fuchsia', freq: 2.5 },
		{ name: 'Tricolor Green', freq: 2.5 },
		{ name: 'Tricolor', freq: 2.5 },
		{ name: 'Warrior Full', freq: 2.5 },
		{ name: 'Warrior', freq: 2.5 },
		{ name: 'Yellow Sides', freq: 1.5 },
		{ name: 'Zebra Grey', freq: 1.5 },
		{ name: 'Zebra', freq: 3 },
		{ name: 'Zombie', freq: 2, fit: [2] },
		{ name: 'Zombie Clear', freq: 2, fit: [2] },
		{ name: 'Zombie Green', freq: 2, fit: [2] },
		{ name: 'Zombie Pink', freq: 2, fit: [2] },
		{ name: 'Weird Zebra', freq: 0.5 },
	]},

	{ name: 'Cup', items: [
		{ name: 'Base Blue', freq: 4, fit: [0] },
		{ name: 'Base Cleargreen', freq: 4, fit: [0] },
		{ name: 'Base Green', freq: 4, fit: [0] },
		{ name: 'Base Orange', freq: 4, fit: [0] },
		{ name: 'Base Pink', freq: 4, fit: [0] },
		{ name: 'Base Purple', freq: 4, fit: [0] },
		{ name: 'Base', freq: 4, fit: [0] },
		{ name: 'Circular Red', freq: 1, fit: [1] },
		{ name: 'Deer Green', freq: 2, fit: [1] },
		{ name: 'Deer Pink', freq: 2, fit: [1] },
		{ name: 'Deer Red', freq: 2, fit: [1] },
		{ name: 'Deer Yellow', freq: 2, fit: [1] },
		{ name: 'Deer', freq: 2, fit: [1] },
		{ name: 'Horns Blue', freq: 2, fit: [1] },
		{ name: 'Horns Orange', freq: 2, fit: [1] },
		{ name: 'Horns Purple', freq: 2, fit: [1] },
		{ name: 'Horns', freq: 2, fit: [1] },
		{ name: 'Spikes Orange', freq: 2.5, fit: [1] },
		{ name: 'Spikes Pink', freq: 2, fit: [1] },
		{ name: 'Spikes Yellow', freq: 2.5, fit: [1] },
		{ name: 'Spikes', freq: 2.5, fit: [1] },
		{ name: 'Tricolor', freq: 4, fit: [0] },
		{ name: 'Flat', freq: 0.5, fit: [1] },
		{ name: 'Lights Blue', freq: 1, fit: [1] },
		{ name: 'Lights Red', freq: 2, fit: [1] },
		{ name: 'Lights', freq: 1, fit: [1] },
		{ name: 'Multi Blue', freq: 2, fit: [1] },
		{ name: 'Multi Green', freq: 2, fit: [1] },
		{ name: 'Multi Orange', freq: 2, fit: [1] },
		{ name: 'Multi Pink', freq: 2, fit: [1] },
		{ name: 'Multi Purple', freq: 2, fit: [1] },
		{ name: 'Multi Red', freq: 2, fit: [1] },
		{ name: 'Woody Blue', freq: 1, fit: [1] },
		{ name: 'Woody Green', freq: 1, fit: [1] },
		{ name: 'Woody Purple', freq: 1, fit: [1] },
		{ name: 'Woody Orange', freq: 1, fit: [1] },
		{ name: 'Woody', freq: 2, fit: [1] },
		{ name: 'Dreadlocks DarkGreen', freq: 2, fit: [1] },
		{ name: 'Dreadlocks Green', freq: 2, fit: [1] },
		{ name: 'Dreadlocks Pink', freq: 2, fit: [1] },
		{ name: 'Dreadlocks', freq: 2, fit: [1] },
		{ name: 'Zombie', freq: 3, fit: [2] },
		{ name: 'Zombie Blue', freq: 2, fit: [2] },
		{ name: 'Zombie Green', freq: 2, fit: [2] },
		{ name: 'Zombie Purple', freq: 2, fit: [2] },
	]},

	{ name: 'Eyes', items: [
		{ name: 'Anime', freq: 1 },
		{ name: 'Happy', freq: 7 },
		{ name: 'Normal', freq: 32 },
		{ name: 'Sad', freq: 7 },
		{ name: 'Shiny', freq: 7 },
		{ name: 'Tiny', freq: 7 },
		{ name: 'Worm', freq: 3 },
		{ name: 'Tired', freq: 7 },
		{ name: 'Shiny Rounded', freq: 7 },
		{ name: 'Sceptical', freq: 7 },
		{ name: 'Lightning', freq: 5 },
		{ name: 'Bicolor', freq: 2 },
		{ name: 'Heart', freq: 1 },
		{ name: 'Angry', freq: 7 },
	]},

	{ name: 'Mouth', items: [
		{ name: 'Angry', freq: 2 },
		{ name: 'Happy', freq: 2 },
		{ name: 'Morty', freq: 12 },
		{ name: 'Sad', freq: 6 },
		{ name: 'Scary', freq: 6 },
		{ name: 'Scream', freq: 6 },
		{ name: 'Sharp', freq: 24 },
		{ name: 'Slurp', freq: 16 },
		{ name: 'Smirk', freq: 2 },
		{ name: 'Spit', freq: 2 },
		{ name: 'Sup', freq: 2 },
		{ name: 'Surprised Tongue', freq: 6 },
		{ name: 'Surprised', freq: 6 },
		{ name: 'Teeth', freq: 6 },
		{ name: 'Tongue', freq: 2 },
	]},

	{ name: 'Body Accessory', items: [
		{ name: 'Arrows Yellow', freq: 2 },
		{ name: 'Arrows', freq: 2 },
		{ name: 'Basketball', freq: 6 },
		{ name: 'Belt', freq: 2 },
		{ name: 'Boots Black', freq: 2 },
		{ name: 'Boots Blue', freq: 2 },
		{ name: 'Boots Red', freq: 2 },
		{ name: 'Boots Yellow', freq: 2 },
		{ name: 'Bracelet', freq: 2 },
		{ name: 'Cards Left', freq: 4 },
		{ name: 'Cards Right', freq: 4 },
		{ name: 'Chips Left', freq: 3 },
		{ name: 'Chips Right', freq: 4 },
		{ name: 'Crystal Body', freq: 2 },
		{ name: 'Gloves Blue', freq: 2 },
		{ name: 'Gloves Fuchsia', freq: 2 },
		{ name: 'Gloves Purple', freq: 2 },
		{ name: 'Gloves Red', freq: 2 },
		{ name: 'Gloves Snow Black', freq: 2 },
		{ name: 'Gloves Snow Blue', freq: 2 },
		{ name: 'Gloves Snow Orange', freq: 2 },
		{ name: 'Gloves Snow Purple', freq: 2 },
		{ name: 'Grenades', freq: 2 },
		{ name: 'Gun', freq: 2 },
		{ name: 'Kicks', freq: 8 },
		{ name: 'Kicks Blue', freq: 2 },
		{ name: 'Kicks Green', freq: 2 },
		{ name: 'Kicks Orange', freq: 2 },
		{ name: 'Kicks Pink', freq: 2 },
		{ name: 'Levis', freq: 2 },
		{ name: 'Rollers', freq: 3 },
		{ name: 'RoundedShield', freq: 2 },
		{ name: 'Sandals', freq: 8 },
		{ name: 'Shield Green', freq: 1 },
		{ name: 'Shield Orange', freq: 1 },
		{ name: 'Shield Pink', freq: 1 },
		{ name: 'Shorts', freq: 2 },
		{ name: 'Swords Blue', freq: 1 },
		{ name: 'Swords', freq: 1 },
		{ name: 'Trident Blue', freq: 1 },
		{ name: 'Trident Yellow', freq: 1 },
		{ name: 'Trident', freq: 1 },
	]},

	{ name: 'Head Accessory', items: [
		{ name: 'NONE', freq: 44 },	    
		{ name: '3DGlasses', freq: 2.5 },
		{ name: 'Aviator Glasses', freq: 2.5 },
        	{ name: 'Nerd Glasses', freq: 2.5 },
		{ name: 'Piercings', freq: 7.5 },
		{ name: 'SunGlasses', freq: 10 },
		{ name: 'Cowboy Hat', freq: 4, fit: [0, 2] },
		{ name: 'Cowboy Hat Blue', freq: 4, fit: [0, 2] },
		{ name: 'Cowboy Hat Brown', freq: 4, fit: [0, 2] },
		{ name: 'Cowboy Hat Green', freq: 4, fit: [0, 2] },
		{ name: 'Crystal Cup', freq: 8, fit: [0, 2] },
		{ name: 'Helmet Blue', freq: 2, fit: [0, 2] },
		{ name: 'Helmet Brown', freq: 2.5, fit: [0, 2] },
		{ name: 'Helmet', freq: 2.5, fit: [0, 2] }
	]},

];


// OUTPUT ATTRIBUTES EVEN WHEN NON-EXISTING
const all_layers = true;

// All equiprobable
const test = false;

const total = 1000;
  
const format = {
    width: 600,
    height: 600
};

const base_name = "PsyShrooms";

const metadata = {
    "name": "",
    "symbol": "PSYS",
    "description": "",
    "seller_fee_basis_points": 500,
    "external_url": "",
    "edition": "",
    "attributes": [],
    "properties": {
      "category": "image",
      "creators": [
        {
          "address": "",
          "share": 40
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
          "share": 15
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