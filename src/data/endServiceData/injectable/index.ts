import { botox } from "./botox";
import { dysport } from "./dysport";
import { juvederm } from "./juvederm";
import { restylane } from "./restylane";
import { radiesse } from "./radiesse";
import { sculptra } from "./sculptra";
import { skinvive } from "./skinvive";
import { kybella } from "./kybella";
import { dermalFillers } from "./dermal-fillers";
import { ezGel } from "./ez-gel";
import { radiesseBbl } from "./radiesse-bbl";
import { prpPrf } from "./prp-prf";
import { hairRestoration } from "./hair-restoration";

export const servicesData: Record<string, any> = {
  botox,
  dysport,
  juvederm,
  restylane,
  radiesse,
  sculptra,
  skinvive,
  kybella,
  "dermal-fillers": dermalFillers,
  "ez-gel": ezGel,
  "radiesse-bbl": radiesseBbl,
  "prp-prf": prpPrf,
  "hair-restoration": hairRestoration,
};