import { prpFacial } from "../skin-rejuvenation/prp-facial";
import { prpPrf } from "../injectable/prp-prf";
import { microneedlingWithPrp } from "../skin-rejuvenation/microneedling-with-prp";
import { hairRestoration } from "../injectable/hair-restoration";
import { scalpMicroneedling } from "./scalp-microneedling";
import { hydrafacial } from "../facial-services/hydrafacial";
import { microneedling } from "../skin-rejuvenation/microneedling";
import { exosomes } from "./exosomes";

export const servicesData: Record<string, any> = {
  "prp-facial": prpFacial,
  "prp-prf": prpPrf,
  "microneedling-with-prp": microneedlingWithPrp,
  "hair-restoration": hairRestoration,
  "scalp-microneedling": scalpMicroneedling,
  "hydrafacial": hydrafacial,
  "microneedling": microneedling,
  "exosomes": exosomes,
};
