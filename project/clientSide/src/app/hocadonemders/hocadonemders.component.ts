import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-hocadonemders",
  templateUrl: "./hocadonemders.component.html",
  styleUrls: ["./hocadonemders.component.css"]
})
export class HocadonemdersComponent {
  displayedColumns: string[] = ["no", "dersName", "dersCode", "dersHoca"];
  dataSource = new MatTableDataSource<Ders>(ELEMENT_DATA);
  form = new FormGroup({
    no: new FormControl((Math.random() * 10).toFixed()),
    dersName: new FormControl("", Validators.required),
    dersCode: new FormControl("", Validators.required),
    dersHoca: new FormControl("")
  });
  addDers(ders?: Ders) {
    console.log(this.form.value);
    ELEMENT_DATA.push(this.form.value);
    this.dataSource.data = ELEMENT_DATA;
    console.log(this.dataSource.data);
  }
}
export interface Ders {
  no: string;
  dersName: string;
  dersCode: string;
  dersHoca: string;
}
const ELEMENT_DATA: Ders[] = [];
