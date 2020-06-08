import { Component, OnInit } from "@angular/core";
import { ListOgrDevamDurumComponent } from "../list-ogr-devam-durum/list-ogr-devam-durum.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-ogrdevamdurumu",
  templateUrl: "./ogrdevamdurumu.component.html",
  styleUrls: ["./ogrdevamdurumu.component.css"]
})
export class OgrdevamdurumuComponent {
  lessonData: Dersler[] = [
    {
      position: 0,

      dersname: "AlgoritmaAnalizi"
    },
    {
      position: 1,

      dersname: "VeriTabanı"
    },
    {
      position: 2,

      dersname: "AlgoritmaveProgramlama"
    },
    {
      position: 3,

      dersname: "Ayrık Matematik"
    }
  ];

  displayedColumns: string[] = ["position", "dersname", "DevamsızlıkDurumu"];
  dataSource = this.lessonData;
  constructor(private dialog: MatDialog) {}
  openDurumDevam() {
    this.dialog.open(ListOgrDevamDurumComponent, {
      width: "2700px",
      height: "1500px"
    });
  }
}

export interface Dersler {
  dersname: string;
  position: number;
}
