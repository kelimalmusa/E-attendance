import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private dialog: MatDialogRef<LoginComponent>) {}
  username: string;
  password: string;

  ngOnInit(): void {}

  close() {
    this.dialog.close();
  }
  login() {
    console.log("Girdiğiniz kullanıcı adı: ", this.username);
    console.log("girdiğiniz password", this.password);
  }

  unut() {
    console.log("lütfen yeni bir şifre alınız ");
  }
}
