export class ProfessionalExp{
public companyName: string;
public position: string;
public startDate: string;
public endDate: string;
public descriptions: string;

constructor(companyName: string, position: string,
  startDate: string, endDate: string, descriptions: string){
    this.companyName = companyName;
    this.position = position;
    this.startDate = startDate;
    this.endDate = endDate;
    this.descriptions = descriptions;
  }
}