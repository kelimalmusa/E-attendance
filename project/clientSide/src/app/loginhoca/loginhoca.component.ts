import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SelectionPageComponent } from "../selection-page/selection-page.component";
import { SignuphocaComponent } from "../signuphoca/signuphoca.component";

@Component({
  selector: "app-loginhoca",
  templateUrl: "./loginhoca.component.html",
  styleUrls: ["./loginhoca.component.css"]
})
export class LoginhocaComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  username: string;
  password: string;

  ngOnInit(): void {}
  login() {

    console.log("Girdiğiniz kullanıcı adı: ", this.username);
    console.log("girdiğiniz password", this.password);
  }

  openSignUp() {
    this.dialog.open(SignuphocaComponent, {
      width: "2700px",
      height: "1500px"
    });
  }
}
