import { Component, OnInit } from "@angular/core";
import { HttpClient } from "../../../../node_modules/@angular/common/http";

@Component({
  selector: "app-name",
  templateUrl: "./name.component.html",
  styleUrls: ["./name.component.css"]
})
export class NameComponent implements OnInit {
  apiUrl = "https://campus.reculta.com/reculta/api/getresumedata/";

  name: string = "Name";
  gender: string = "Gender ";

  constructor( private http: HttpClient) {}

  ngOnInit() {
    this.onGet();
  }

  onGet() {
    this.http.get(this.apiUrl).subscribe((response: Response) => {
      const data: any = response;
      this.setData(data);
    });
  }

  setData(data: any) {
    this.name =  data.User.getPersonalData[0].student_first_name + " " + 
    data.User.getPersonalData[0].student_last_name;
    console.log(this.name);

    this.gender = data.User.getPersonalData[0].student_gender;
  }
}
