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
import {
  FormsModule,
  FormControl,
  FormBuilder,
  ReactiveFormsModule,
} from "@angular/forms";
import { OpenComponent } from "./open/open.component";
import { LoginnComponent } from "./loginn/loginn.component";
import { SignupComponent } from "./signup/signup.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { SelectionPageComponent } from "./selection-page/selection-page.component";
import { LoginhocaComponent } from "./loginhoca/loginhoca.component";
import { SignuphocaComponent } from "./signuphoca/signuphoca.component";
import { SelectionpagehocaComponent } from "./selectionpagehoca/selectionpagehoca.component";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { OgrdonemdersComponent } from "./ogrdonemders/ogrdonemders.component";
import { HocadonemdersComponent } from "./hocadonemders/hocadonemders.component";
import { OgrdevamdurumuComponent } from "./ogrdevamdurumu/ogrdevamdurumu.component";
import { ListOgrDevamDurumComponent } from "./list-ogr-devam-durum/list-ogr-devam-durum.component";
import { HocadevamdurumuComponent } from "./hocadevamdurumu/hocadevamdurumu.component";
import { ListHocaDevamDurumComponent } from "./list-hoca-devam-durum/list-hoca-devam-durum.component";
import { DetaillistHocaDevamDurumuComponent } from "./detaillist-hoca-devam-durumu/detaillist-hoca-devam-durumu.component";
const routes: Routes = [
  { path: "student", component: LoginnComponent },
  { path: "", component: OpenComponent },
  { path: "home", component: SelectionPageComponent },
  { path: "donemlik-ders-islemleri", component: OgrdonemdersComponent },
  { path: "hoca", component: LoginhocaComponent },
  { path: "hoca-home", component: SelectionpagehocaComponent },
  { path: "hoca-donemlik-ders-islemi", component: HocadonemdersComponent },
  { path: "devamsizlik-bilgisi", component: OgrdevamdurumuComponent },
];
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
    SelectionpagehocaComponent,
    OgrdonemdersComponent,
    HocadonemdersComponent,
    OgrdevamdurumuComponent,
    ListOgrDevamDurumComponent,
    HocadevamdurumuComponent,
    ListHocaDevamDurumComponent,
    DetaillistHocaDevamDurumuComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MaterialModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    FlexLayoutModule,
    MatGridListModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
