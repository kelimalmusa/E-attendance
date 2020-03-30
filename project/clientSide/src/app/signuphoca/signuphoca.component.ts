import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-signuphoca",
  templateUrl: "./signuphoca.component.html",
  styleUrls: ["./signuphoca.component.css"]
})
export class SignuphocaComponent implements OnInit {
  constructor() {}

  name: string;
  surname: string;
  title: string;
  email: string;
  username: string;
  password: string;

  ngOnInit(): void {}

  signUp() {
    console.log("girdiğiniz isim :", this.name);
    console.log("girdiğiniz surname :", this.surname);
    console.log("Girdiğiniz kullanıcı adı: ", this.username);
    console.log("girdiğiniz password", this.password);
    console.log("girdiğiniz email : ", this.email);
  }
}
