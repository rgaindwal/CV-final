export class vfs {
  public location: string;
  public topic: string;
  public title: string;
  public descriptions: string[];

  constructor(location: string, topic: string, title: string, descriptions: string[]){
    this.location = location;
    this.topic = topic;
    this.title = title;
    this.descriptions = descriptions;
  }
}
