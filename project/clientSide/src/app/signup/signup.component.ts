import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private dialog: MatDialog, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: this.fb.control("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ]),
      password: this.fb.control("", [
        Validators.required,
        Validators.minLength(5)
      ]),
      ogrno: this.fb.control("", [
        Validators.required,
        Validators.minLength(12)
      ]),
      ogrenimturu: this.fb.control("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ]),
      email: this.fb.control("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.email
      ]),
      name: this.fb.control("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30)
      ]),
      surname: this.fb.control("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30)
      ])
    });
  }

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
    this.loginForm.reset();
  }

}
