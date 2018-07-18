export class Academic {
  public course: string;
  public year: string;
  public institute: string;
  public cgpa: string;


  constructor(course: string, year: string, institute: string, cgpa: string){
    this.course=course;
    this.cgpa = cgpa;
    this.year = year;
    this.institute = institute;
  }

}