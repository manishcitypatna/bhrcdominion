import { morpheus8 } from "./morpheus8";
import { cartessaCo2CoolpeelLaser } from "./cartessa-co2-coolpeel-laser";
import { laserHairRemoval } from "./laser-hair-removal";
import { almaSopranoIce } from "./alma-soprano-ice";

export const servicesData: Record<string, any> = {
  morpheus8,
  "cartessa-co2-coolpeel-laser": cartessaCo2CoolpeelLaser,
  "laser-hair-removal": laserHairRemoval,
  "alma-soprano-ice": almaSopranoIce,
};
