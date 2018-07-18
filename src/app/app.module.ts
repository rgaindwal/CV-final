import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterOutlet, RouterModule } from "@angular/router";
import { AngularDraggableModule } from "angular2-draggable";
import { MatCardModule } from "@angular/material/card";
import { AppComponent } from "./app.component";
import { CvIrmaComponent } from "./cv-irma/cv-irma.component";
import { NameComponent } from "./cv-irma/name/name.component";
import { AcademicComponent } from "./cv-irma/academic/academic.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { VfsComponent } from "./cv-irma/vfs/vfs.component";
import { AcademicProjectsComponent } from "./cv-irma/academic-projects/academic-projects.component";
import { ProfessionalExpComponent } from "./cv-irma/professional-exp/professional-exp.component";
import { PositonOfResponsibilityComponent } from "./cv-irma/positon-of-responsibility/positon-of-responsibility.component";
import { AchievementsComponent } from "./cv-irma/achievements/achievements.component";
import { HttpClientModule } from "@angular/common/http";
import { ServerService } from "./server.service";
import { CvFmsComponent } from "./cv-fms/cv-fms.component";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ShellComponent } from "./shell/shell.component";
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

const appRoutes: Routes = [
  { path: '',  component: LoginComponent  },
  {
    path: "",
    component: ShellComponent,
    children: [
      { path: "cv-irma", component: CvIrmaComponent },
      { path: "cv-fms", component: CvFmsComponent }
    ]
  },
  
   
];

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

    AchievementsComponent,

    CvFmsComponent,

    MainNavComponent,

    ShellComponent,

    LoginComponent,

    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularDraggableModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
