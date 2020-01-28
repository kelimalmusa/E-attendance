import { Component } from "@angular/core";
import { deneme } from "./deneme/deneme";
import { HttpHeaders, HttpParams, HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "clientSide";
  deneme: deneme;
  constructor(private http: HttpClient) {
    this.deneme = new deneme();
  }
  save(name: string, numbere: number) {
    this.deneme.name = name;
    this.deneme.age = numbere;
    this.http
      .post("http://localhost:3001/api/deneme", this.deneme)
      .subscribe(asd => {
        console.log("sonuc,", new Date());
      });
  }
}
