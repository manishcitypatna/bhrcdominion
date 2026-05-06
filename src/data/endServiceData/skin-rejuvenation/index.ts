import { co2CartessaCoolpeel } from "./co2-cartessa-coolpeel";
import { co2LaserDekaDeep } from "./co2-laser-deka-deep";
import { zoProduct } from "./zo-product";
import { microneedling } from "./microneedling";
import { microneedlingWithPrp } from "./microneedling-with-prp";
import { microneedlingWithSalmonDnaPdrn } from "./microneedling-with-salmon-dna-pdrn";
import { prpFacial } from "./prp-facial";
import { viPeel } from "./vi-peel";

export const servicesData: Record<string, any> = {
  "co2-cartessa-coolpeel": co2CartessaCoolpeel,
  "co2-laser-deka-deep": co2LaserDekaDeep,
  "zo-product": zoProduct,
  "microneedling": microneedling,
  "microneedling-with-prp": microneedlingWithPrp,
  "microneedling-with-salmon-dna-pdrn": microneedlingWithSalmonDnaPdrn,
  "prp-facial": prpFacial,
  "vi-peel": viPeel,
};
