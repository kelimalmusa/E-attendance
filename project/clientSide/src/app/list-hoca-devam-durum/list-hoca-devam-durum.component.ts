import { Component, OnInit } from "@angular/core";
import { DetaillistHocaDevamDurumuComponent } from "../detaillist-hoca-devam-durumu/detaillist-hoca-devam-durumu.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-list-hoca-devam-durum",
  templateUrl: "./list-hoca-devam-durum.component.html",
  styleUrls: ["./list-hoca-devam-durum.component.css"]
})
export class ListHocaDevamDurumComponent {
  lessonData: OgrenciList[] = [
    {
      position: 1,

      name: "Ali",
      surname: "Bahçeli"
    },
    {
      position: 2,

      name: "Zehra",
      surname: "Gör"
    },
    {
      position: 4,

      name: "Zilan",
      surname: "Zorba"
    },
    {
      position: 5,

      name: "Mehmet",
      surname: "Zorba"
    },
    {
      position: 6,

      name: "Ali",
      surname: "Bahçeli"
    },
    {
      position: 7,

      name: "Feridun",
      surname: "Yağma"
    },
    {
      position: 8,

      name: "Selim",
      surname: "Kuzu"
    },
    {
      position: 9,

      name: "Sümbül",
      surname: "Çatlı"
    },
    {
      position: 10,

      name: "Elif",
      surname: "Ballı"
    },
    {
      position: 11,

      name: "Azra",
      surname: "Gelin"
    },
    {
      position: 12,

      name: "Veli",
      surname: "al"
    }
  ];

  displayedColumns: string[] = ["position", "name", "surname", "DevamsızlıkDurumu"];
  dataSource = this.lessonData;
  constructor(private dialog: MatDialog) {}
  openDurumDevam() {
    this.dialog.open(DetaillistHocaDevamDurumuComponent, {
      width: "2700px",
      height: "1500px"
    });
  }
}
export interface OgrenciList {
  name: string;
  surname: string;
  position: number;
}
