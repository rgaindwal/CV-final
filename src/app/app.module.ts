import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularDraggableModule } from "angular2-draggable";
import { MatCardModule } from "@angular/material/card";
import { AppComponent } from "./app.component";
import { CvIrmaComponent } from "./cv-irma/cv-irma.component";
import { NameComponent } from "./cv-irma/name/name.component";
import { AcademicComponent } from "./cv-irma/academic/academic.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { VfsComponent } from "./cv-irma/vfs/vfs.component";
import { AcademicProjectsComponent } from './cv-irma/academic-projects/academic-projects.component';
import { ProfessionalExpComponent } from './cv-irma/professional-exp/professional-exp.component';
import { PositonOfResponsibilityComponent } from './cv-irma/positon-of-responsibility/positon-of-responsibility.component';
import { AchievementsComponent } from './cv-irma/achievements/achievements.component';

@NgModule({
  declarations: [
    AppComponent,
    CvIrmaComponent,
    NameComponent,
    AcademicComponent,

    VfsComponent,

    AcademicProjectsComponent,

    ProfessionalExpComponent,

    PositonOfResponsibilityComponent,

    AchievementsComponent
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
