import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { OgrdonemdersComponent } from "../ogrdonemders/ogrdonemders.component";
import { OgrdevamdurumuComponent } from "../ogrdevamdurumu/ogrdevamdurumu.component";

@Component({
  selector: "app-selection-page",
  templateUrl: "./selection-page.component.html",
  styleUrls: ["./selection-page.component.css"]
})
export class SelectionPageComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openYoklamayaKatıl() {}

  openDevamsızlık() {}

  // openDonemDersleri() {
  //   this.dialog.open(OgrdonemdersComponent, {
  //     width: "2700px",
  //     height: "1500px"
  //   });
  // }
}
