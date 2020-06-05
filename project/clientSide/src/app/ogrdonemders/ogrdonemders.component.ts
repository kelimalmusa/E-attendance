import { Component, OnInit, ɵɵstylePropInterpolate1 } from "@angular/core";
import { SelectionModel } from "@angular/cdk/collections";

import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-ogrdonemders",
  templateUrl: "./ogrdonemders.component.html",
  styleUrls: ["./ogrdonemders.component.css"]
})
export class OgrdonemdersComponent {
  ahmet = [];
  lessonData: Dersler[] = [
    {
      position: 0,
      derscode: 4555,
      dersname: "AlgoritmaAnalizi",
      dershoca: "A.Erhan Akkaya"
    },
    {
      position: 1,
      derscode: 456789,
      dersname: "VeriTabanı",
      dershoca: "A.A .AYDIN"
    },
    {
      position: 2,
      derscode: 111,
      dersname: "AlgoritmaveProgramlama",
      dershoca: "A.Fatih Kocamaz"
    },
    {
      position: 3,
      derscode: 888222,
      dersname: "Ayrık Matematik",
      dershoca: "B.BAYKANT ALAGÖZ"
    }
  ];

  displayedColumns2: string[] = [
    "select",
    "position",
    "derscode",
    "dersname",
    "dershoca"
  ];
  displayedColumnsss: string[] = [
    "position",
    "derscode",
    "dersname",
    "dershoca",
    "islem"
  ];
  dataSource = new MatTableDataSource<Dersler>(this.lessonData);
  selection = new SelectionModel<Dersler>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  deleteDers(element) {
    this.selection.deselect(element);
    this.update();
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }
  update() {
    this.ahmet = this.selection.selected;
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Dersler): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${
      this.selection.isSelected(row) ? "deselect" : "select"
    } row ${row.position + 1}`;
  }
  /*  delete() {    güya delete için denemeymdi
    console.log("silindi");
  }*/
  sub() {
    console.log("aldığınız dersler :", this.ahmet);
  }
}
export interface Dersler {
  derscode: number;
  dersname: string;
  dershoca: string;
  position: number;
}
