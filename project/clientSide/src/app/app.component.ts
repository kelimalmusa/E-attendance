import { Component } from "@angular/core";
// import { HttpHeaders, HttpParams, HttpClient } from "@angular/common/http";
import { AhmetComponent } from "./ahmet/ahmet.component";
import { MatDialog } from "@angular/material/dialog";
import { LoginComponent } from "./auth/login/login.component";
import { LoginnComponent } from "./loginn/loginn.component";
import { OpenComponent } from "./open/open.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "clientSide";
  token;
  constructor(private dialog: MatDialog) {}
  ahmet() {
    this.dialog.open(AhmetComponent, {
      width: "500px",
      height: "500px",
      disableClose: true
    });
  }
  openLogin() {
    this.dialog.open(LoginComponent, {
      width: "500px",
      height: "500px",
      disableClose: true
    });
  }
  openloginn() {
    this.dialog.open(LoginnComponent, {
      width: "2700px",
      height: "1500px"
    });
  }
  openOpen() {
    this.dialog.open(OpenComponent, { width: "1900px", height: "2900px" });
  }
  login(usernam: string, passwor: number) {
    const user = { username: usernam, password: passwor };
    // this.http.post("http://localhost:3001/auth/login/", user).subscribe(asd => {
    //   console.log("sonuc,", asd);
    //   this.token = asd;
    // });
  }
}
