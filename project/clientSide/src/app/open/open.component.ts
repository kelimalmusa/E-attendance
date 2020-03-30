import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { LoginnComponent } from "../loginn/loginn.component";
import { LoginhocaComponent } from "../loginhoca/loginhoca.component";

@Component({
  selector: "app-open",
  templateUrl: "./open.component.html",
  styleUrls: ["./open.component.css"]
})
export class OpenComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openloginn() {
    this.dialog.open(LoginnComponent, {
      width: "2700px",
      height: "1500px"
    });
  }

  openloginHoca() {
    this.dialog.open(LoginhocaComponent, {
      width: "2700px",
      height: "1500px"
    });
  }
}
