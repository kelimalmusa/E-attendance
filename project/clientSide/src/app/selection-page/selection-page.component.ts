import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

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

  openDonemDersleri() {}
}
