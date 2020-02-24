import { Component, OnInit } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material/dialog";
@Component({
  selector: "app-ahmet",
  templateUrl: "./ahmet.component.html",
  styleUrls: ["./ahmet.component.css"]
})
export class AhmetComponent implements OnInit {
  constructor(
    private dialog: MatDialogRef<AhmetComponent>,
    private dg: MatDialog
  ) {}

  ngOnInit() {}
  close() {
    this.dialog.close();
  }
  ac() {
    this.dg.open(AhmetComponent, {});
  }
}
