import { Component } from "@angular/core";
import { Deneme } from "./deneme/deneme";
import { HttpHeaders, HttpParams, HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "clientSide";
  deneme: Deneme;
  constructor(private http: HttpClient) {
    this.deneme = new Deneme();
  }
  save(name: string, numbere: number) {
    this.deneme.name = name;
    this.deneme.age = numbere;
    this.http
      .get("http://localhost:3001/tweet/" + this.deneme.name)
      .subscribe(asd => {
        console.log("sonuc,", asd);
      });
  }
}
