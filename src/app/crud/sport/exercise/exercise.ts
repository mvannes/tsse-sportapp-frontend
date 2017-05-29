export class Exercise {

  public id: number;
  public category: string;
  public description: string;
  public mediaFiles : string[];
  public name : string;

  constructor(id: number, category: string, description: string, mediaFiles: string[], name: string) {
    this.id = id;
    this.category = category;
    this.description = description;
    this.mediaFiles = mediaFiles;
    this.name = name;
  }
}
