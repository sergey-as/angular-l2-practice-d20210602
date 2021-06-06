import {Geo} from "./Geo";

export interface Address{
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

// "address": {
//   "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//     "lat": "-37.3159",
//       "lng": "81.1496"
//   }
// }
