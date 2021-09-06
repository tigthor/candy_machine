const layersOrder = [
    'Backgrounds',
    'Body Color',
    'EyeBrows',
    'Eye Color',
    'Bikinis',
    'Glasses',
    'Hair',
    'Hats'
];
  
const format = {
    width: 1000,
    height: 1000
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 10000;

module.exports = { layersOrder, format, rarity, defaultEdition };
