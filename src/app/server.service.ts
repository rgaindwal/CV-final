import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class ServerService {
  apiUrl = "https://campus.reculta.com/reculta/api/getresumedata/";

  constructor(private http: HttpClient) {}

  getDataFromServer() {
   return this.http.get(this.apiUrl).subscribe((response: Response) => {
      const data: any = response;
    });
  }
}
