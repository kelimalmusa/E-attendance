import { Component } from '@angular/core';
import { deneme } from './deneme/deneme';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clientSide';
  deneme: deneme;
  constructor(private http: HttpClient) {
    this.deneme = new deneme();
  }
  save() {
    this.deneme.name = "CAFER";
    this.deneme.age = 255;
    this.http.post("http://localhost:5555/api/deneme", this.deneme).subscribe((asd) => {
      console.log("sonuc,", new Date());
    });
  }
}
