import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AhmetComponent } from "./ahmet/ahmet.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MaterialModule } from "./material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginComponent } from "./auth/login/login.component";
import { FormsModule, FormControl, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { OpenComponent } from "./open/open.component";
import { LoginnComponent } from "./loginn/loginn.component";
import { SignupComponent } from "./signup/signup.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { SelectionPageComponent } from "./selection-page/selection-page.component";
import { LoginhocaComponent } from "./loginhoca/loginhoca.component";
import { SignuphocaComponent } from "./signuphoca/signuphoca.component";
import { SelectionpagehocaComponent } from './selectionpagehoca/selectionpagehoca.component';

@NgModule({
  declarations: [
    AppComponent,
    AhmetComponent,
    LoginComponent,
    OpenComponent,
    LoginnComponent,
    SignupComponent,
    SelectionPageComponent,
    LoginhocaComponent,
    SignuphocaComponent,
    SelectionpagehocaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MaterialModule,
    FlexLayoutModule,
    MatGridListModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
