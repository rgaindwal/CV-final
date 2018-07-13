export class Academic {
  public course: string;
  public year: number;
  public institute: string;
  public cgpa: number;


  constructor(course: string, year: number, institute: string, cgpa: number){
    this.course=course;
    this.cgpa = cgpa;
    this.year = year;
    this.institute = institute;
  }

}