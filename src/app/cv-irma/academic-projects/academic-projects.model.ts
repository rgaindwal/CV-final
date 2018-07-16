export class AcademicProjects{
  public topic: string;
  public title: string;
  public descriptions: string[];

  constructor(topic: string, title: string, descriptions: string[]){
    this.topic = topic;
    this.title = title;
    this.descriptions = descriptions;
  }
}