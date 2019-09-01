import misc from './palettes/misc';
import colourscafe from './palettes/colourscafe';
import ranganath from './palettes/ranganath';
import roygbivs from './palettes/roygbivs';
import tundra from './palettes/tundra';
import rohlfs from './palettes/rohlfs';
import ducci from './palettes/ducci';
import judson from './palettes/judson';
import iivonen from './palettes/iivonen';
import kovecses from './palettes/kovecses';
import tsuchimochi from './palettes/tsuchimochi';
import duotone from './palettes/duotone';
import hilda from './palettes/hilda';

const pals = misc.concat(
  ranganath,
  roygbivs,
  tundra,
  colourscafe,
  rohlfs,
  ducci,
  judson,
  iivonen,
  kovecses,
  tsuchimochi,
  duotone,
  hilda
);

export default pals.map(p => {
  p.size = p.colors.length;
  return p;
});
