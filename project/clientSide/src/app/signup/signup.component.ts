import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor() {}

  ogrno: string;
  name: string;
  surname: string;
  ogrenimturu: string;
  username: string;
  password: string;
  email: string;

  ngOnInit(): void {}

  signUp() {
    console.log("girdiğiniz no :", this.ogrno);
    console.log("girdiğiniz isim :", this.name);
    console.log("girdiğiniz surname :", this.surname);
    console.log("girdiğiniz ogrenimturu :", this.ogrenimturu);
    console.log("Girdiğiniz kullanıcı adı: ", this.username);
    console.log("girdiğiniz password", this.password);
    console.log("girdiğiniz email : ", this.email);
  }
}
