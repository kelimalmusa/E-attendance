import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-detaillist-hoca-devam-durumu",
  templateUrl: "./detaillist-hoca-devam-durumu.component.html",
  styleUrls: ["./detaillist-hoca-devam-durumu.component.css"]
})
export class DetaillistHocaDevamDurumuComponent {
  lessonData: Bilgi[] = [
    {
      position: 1,

      dersname: "Sayısal Yöntemler",
      mevcudiyet: "Var"
    },
    {
      position: 2,

      dersname: "Sayısal Yöntemler",
      mevcudiyet: "Var"
    },
    {
      position: 4,

      dersname: "Sayısal Yöntemler",
      mevcudiyet: "Var"
    },
    {
      position: 5,

      dersname: "Sayısal Yöntemler",
      mevcudiyet: "Yok"
    },
    {
      position: 6,

      dersname: "Sayısal Yöntemler",
      mevcudiyet: "Var"
    },
    {
      position: 7,

      dersname: "Sayısal Yöntemler",
      mevcudiyet: "Var"
    },
    {
      position: 8,

      dersname: "Sayısal Yöntemler",
      mevcudiyet: "Var"
    },
    {
      position: 9,

      dersname: "Sayısal Yöntemler",
      mevcudiyet: "Yok"
    },
    {
      position: 10,

      dersname: "Sayısal Yöntemler",
      mevcudiyet: "Var"
    },
    {
      position: 11,

      dersname: "Sayısal Yöntemler",
      mevcudiyet: "Var"
    },
    {
      position: 12,

      dersname: "Sayısal Yöntemler",
      mevcudiyet: "Var"
    }
  ];
  displayedColumns: string[] = ["position", "dersname", "mevcudiyet"];
  dataSource = this.lessonData;
}
export interface Bilgi {
  dersname: string;
  position: number;
  mevcudiyet: string;
}
