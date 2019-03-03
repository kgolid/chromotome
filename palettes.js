import colourscafe from './palettes/colourscafe';
import ranganath from './palettes/ranganath';
import roygbivs from './palettes/roygbivs';
import tundra from './palettes/tundra';
import rohlfs from './palettes/rohlfs';

const palettes = [
  {
    name: 'frozen-rose',
    colors: ['#29368f', '#e9697b', '#1b164d', '#f7d996'],
    background: '#f2e8e4'
  },
  {
    name: 'winter-night',
    colors: ['#122438', '#dd672e', '#87c7ca', '#ebebeb'],
    background: '#ebebeb'
  },
  {
    name: 'saami',
    colors: ['#eab700', '#e64818', '#2c6393', '#eecfca'],
    background: '#e7e6e4'
  },
  {
    name: 'knotberry1',
    colors: ['#20342a', '#f74713', '#686d2c', '#e9b4a6'],
    background: '#e5ded8'
  },
  {
    name: 'knotberry2',
    colors: ['#1d3b1a', '#eb4b11', '#e5bc00', '#f29881'],
    background: '#eae2d0'
  },
  {
    name: 'tricolor',
    colors: ['#ec643b', '#56b7ab', '#f8cb57', '#1f1e43'],
    background: '#f7f2df'
  },
  {
    name: 'foxshelter',
    colors: ['#ff3931', '#007861', '#311f27', '#bab9a4'],
    background: '#dddddd'
  },
  {
    name: 'hermes',
    colors: ['#253852', '#51222f', '#b53435', '#ecbb51'],
    background: '#eeccc2'
  }
];

const pals = palettes.concat(ranganath, roygbivs, tundra, colourscafe, rohlfs);

export default pals.map(p => {
  p.size = p.colors.length;
  return p;
});
