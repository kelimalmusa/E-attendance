import { Ogrenci } from "./models";
import { Ders } from "./models";

export class Tweet {
  id!: number;
  tweet!: JSON;
  ogr_id!: number;
  ders_id!: number;
  ogrenci!: Ogrenci;
  ders!: Ders;
}
