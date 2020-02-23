import { Component } from "@angular/core";
import { Deneme } from "./deneme/deneme";
import { HttpHeaders, HttpParams, HttpClient } from "@angular/common/http";
import { AhmetComponent } from "./ahmet/ahmet.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "clientSide";
  deneme: Deneme;
  token;
  constructor(private http: HttpClient, private dialog: MatDialog) {
    this.deneme = new Deneme();
  }
  ahmet() {
    this.dialog.open(AhmetComponent, {
      width: "500px",
      height: "500px",
      disableClose: true
    });
  }
  save(name: string, numbere: number) {
    this.deneme.name = name;
    this.deneme.age = numbere;

    this.http.get("http://localhost:3001/ogrenci").subscribe(asd => {
      console.log("sonuc,", asd);
    });
  }
  login(usernam: string, password: number) {
    const user = { username: usernam, password: password };
    this.http.post("http://localhost:3001/auth/login/", user).subscribe(asd => {
      console.log("sonuc,", asd);
      this.token = asd;
    });
  }
}
