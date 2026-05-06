import { hydrafacial } from "./hydrafacial";
import { microneedling } from "../skin-rejuvenation/microneedling";
import { viPeel } from "../skin-rejuvenation/vi-peel";
import { chemicalPeels } from "./chemical-peels";

export const servicesData: Record<string, any> = {
  hydrafacial,
  microneedling,
  "vi-peel": viPeel,
  "chemical-peels": chemicalPeels,
};
