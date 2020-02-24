import { Component } from "@angular/core";
// import { HttpHeaders, HttpParams, HttpClient } from "@angular/common/http";
import { AhmetComponent } from "./ahmet/ahmet.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
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
  login(usernam: string, passwor: number) {
    const user = { username: usernam, password: passwor };
    // this.http.post("http://localhost:3001/auth/login/", user).subscribe(asd => {
    //   console.log("sonuc,", asd);
    //   this.token = asd;
    // });
  }
}
