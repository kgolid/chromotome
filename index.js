import palettes from './palettes.js';

function getRandom() {
  return palettes[Math.floor(Math.random() * palettes.length)];
}

function get(name) {
  return palettes.find(pal => pal.name == name);
}

function getNames() {
  return palettes.map(p => p.name);
}

export { getRandom, get, getNames };
