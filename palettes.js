import misc from "./palettes/misc";
import colourscafe from "./palettes/colourscafe";
import ranganath from "./palettes/ranganath";
import roygbivs from "./palettes/roygbivs";
import tundra from "./palettes/tundra";
import rohlfs from "./palettes/rohlfs";
import ducci from "./palettes/ducci";
import judson from "./palettes/judson";
import iivonen from "./palettes/iivonen";
import kovecses from "./palettes/kovecses";
import tsuchimochi from "./palettes/tsuchimochi";
import duotone from "./palettes/duotone";
import hilda from "./palettes/hilda";
import spatial from "./palettes/spatial";
import jung from "./palettes/jung";
import system from "./palettes/system";
import flourish from "./palettes/flourish";
import dale from "./palettes/dale";
import cako from "./palettes/cako";
import mayo from "./palettes/mayo";
import exposito from "./palettes/exposito";
import orbifold from "./palettes/orbifold";

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
  hilda,
  spatial,
  jung,
  system,
  flourish,
  dale,
  cako,
  mayo,
  exposito,
  orbifold
);

export default pals.map(p => {
  p.size = p.colors.length;
  return p;
});
