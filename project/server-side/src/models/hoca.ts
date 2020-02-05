import { Ders } from "./models";
import { User } from "./user";

export class Hoca extends User {
  hoca_id!: number;
  hoca_name!: string;
  hoca_surname!: string;
  hoca_title!: string;
  hoca_ders!: Ders[];
}
