import palettes from './palettes.js';

function getRandom() {
  return palettes[Math.floor(Math.random() * palettes.length)];
}

function get(name) {
  return palettes.find(pal => pal.name == name);
}

export { getRandom, get };
