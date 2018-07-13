import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularDraggableModule } from "angular2-draggable";
import { MatCardModule } from "@angular/material/card";
import { AppComponent } from "./app.component";
import { CvIrmaComponent } from "./cv-irma/cv-irma.component";
import { NameComponent } from "./cv-irma/name/name.component";
import { AcademicComponent } from "./cv-irma/academic/academic.component";
import { AcademicRowComponent } from "./cv-irma/academic/academic-row/academic-row.component";
import { AcademicRowTitlesComponent } from "./cv-irma/academic/academic-row-titles/academic-row-titles.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    CvIrmaComponent,
    NameComponent,
    AcademicComponent,
    AcademicRowComponent,
    AcademicRowTitlesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularDraggableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
