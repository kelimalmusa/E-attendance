import { Component, OnInit } from "@angular/core";
import { SignupComponent } from "../signup/signup.component";
import { MatDialog } from "@angular/material/dialog";
import { SelectionPageComponent } from "../selection-page/selection-page.component";
// import "https:// stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
/* bu import doğru mu bana istediğimi sağlar mı */

@Component({
  selector: "app-loginn",
  templateUrl: "./loginn.component.html",
  styleUrls: ["./loginn.component.css"]
})
export class LoginnComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  username: string;
  password: string;

  ngOnInit(): void {}

  login() {
    console.log("Girdiğiniz kullanıcı adı: ", this.username);
    console.log("girdiğiniz password", this.password);
  }

  openSignUp() {
    this.dialog.open(SignupComponent, {
      width: "2700px",
      height: "1500px"
    });
  }

  openSelection() {
    this.dialog.open(SelectionPageComponent, {
      width: "2700px",
      height: "1500px"
    });
  }
}
