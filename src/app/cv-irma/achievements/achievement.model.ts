export class Achievement{
  public type: string;
  public year: string;
  public description: string;

 constructor(type: string, year: string, description:string){
   this.description = description;
   this.type = type;
   this.year = year;
 } 
}