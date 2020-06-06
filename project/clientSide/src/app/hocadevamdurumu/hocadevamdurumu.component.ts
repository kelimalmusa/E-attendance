import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ListHocaDevamDurumComponent } from "../list-hoca-devam-durum/list-hoca-devam-durum.component";

@Component({
  selector: "app-hocadevamdurumu",
  templateUrl: "./hocadevamdurumu.component.html",
  styleUrls: ["./hocadevamdurumu.component.css"]
})
export class HocadevamdurumuComponent {
  lessonData: Derslerim[] = [
    {
      position: 1,

      dersname: "Bilgisayar Mühendisliğine Giriş"
    },
    {
      position: 2,

      dersname: "Sayısal Yöntemeler"
    },
    {
      position: 3,

      dersname: "Mobil Cihazlar"
    }
  ];

  displayedColumns: string[] = ["position", "dersname", "DevamsızlıkDurumu"];
  dataSource = this.lessonData;
  constructor(private dialog: MatDialog) {}
  openDurumDevam() {
    this.dialog.open(ListHocaDevamDurumComponent, {
      width: "2700px",
      height: "1500px"
    });
  }
}
export interface Derslerim {
  dersname: string;
  position: number;
}
