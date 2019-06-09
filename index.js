import palettes from './palettes.js';

function getRandom() {
  return palettes[Math.floor(Math.random() * palettes.length)];
}

function get(name) {
  if (name === undefined) return getRandom();
  return palettes.find(pal => pal.name == name);
}

function getAll() {
  return palettes;
}

function getNames() {
  return palettes.map(p => p.name);
}

export { getRandom, get, getAll, getNames };
