import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-ogr-devam-durum",
  templateUrl: "./list-ogr-devam-durum.component.html",
  styleUrls: ["./list-ogr-devam-durum.component.css"]
})
export class ListOgrDevamDurumComponent {
  lessonData: Bilgi[] = [
    {
      position: 1,

      dersname: "AlgoritmaAnalizi",
      mevcudiyet: "Var"
    },
    {
      position: 2,

      dersname: "AlgoritmaAnalizi",
      mevcudiyet: "Var"
    },
    {
      position: 4,

      dersname: "AlgoritmaAnalizi",
      mevcudiyet: "Var"
    },
    {
      position: 5,

      dersname: "AlgoritmaAnalizi",
      mevcudiyet: "Yok"
    },
    {
      position: 6,

      dersname: "AlgoritmaAnalizi",
      mevcudiyet: "Var"
    },
    {
      position: 7,

      dersname: "AlgoritmaAnalizi",
      mevcudiyet: "Var"
    },
    {
      position: 8,

      dersname: "AlgoritmaAnalizi",
      mevcudiyet: "Var"
    },
    {
      position: 9,

      dersname: "AlgoritmaAnalizi",
      mevcudiyet: "Yok"
    },
    {
      position: 10,

      dersname: "AlgoritmaAnalizi",
      mevcudiyet: "Var"
    },
    {
      position: 11,

      dersname: "AlgoritmaAnalizi",
      mevcudiyet: "Var"
    },
    {
      position: 12,

      dersname: "AlgoritmaAnalizi",
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
