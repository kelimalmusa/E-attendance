import { User } from "./user";
import { Ders } from "./ders";

export class Ogrenci extends User {
  ogr_id!: number;
  ogr_no!: number;
  ogr_name!: string;
  ogr_surname!: string;
  ogr_user_id!: string;
  ogr_ogrenim_turu!: string;
  ders!: Ders[]; // ileri zamanda bunu Ders[] e çevirmek gerekebilir
}
