export class Exercise {

  public id: number;
  public category: number;
  public description: string;
  public mediaFiles : string[];
  public name : string;

  constructor(id: number, category: number, description: string, mediaFiles: string[], name: string) {
    this.id = id;
    this.category = category;
    this.description = description;
    this.mediaFiles = mediaFiles;
    this.name = name;
  }
}
