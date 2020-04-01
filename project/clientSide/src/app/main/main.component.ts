import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { AhmetComponent } from "../ahmet/ahmet.component";
import { LoginComponent } from "../auth/login/login.component";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}
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
    // this.dialog.open(LoginnComponent, {
    //   width: "2700px",
    //   height: "1500px"
    // });
  }
  openOpen() {
    this.router.navigate(["dashboard"]);
    // this.dialog.open(OpenComponent, { width: "1900px", height: "2900px" });
  }
  login(usernam: string, passwor: number) {
    const user = { username: usernam, password: passwor };
    // this.http.post("http://localhost:3001/auth/login/", user).subscribe(asd => {
    //   console.log("sonuc,", asd);
    //   this.token = asd;
    // });
  }
}
