import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { HocadonemdersComponent } from "../hocadonemders/hocadonemders.component";

@Component({
  selector: "app-selectionpagehoca",
  templateUrl: "./selectionpagehoca.component.html",
  styleUrls: ["./selectionpagehoca.component.css"]
})
export class SelectionpagehocaComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
}
