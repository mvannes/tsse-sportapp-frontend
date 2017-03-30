export class Exercise {

  public _id: number;
  public _name : string;
  public _description: string;
  public _category: string;
  public _mediaFiles : string[];


  constructor(id: number, name: string, description: string, category: string, mediaFiles: string[]) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._category = category;
    this._mediaFiles = mediaFiles;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }

  get mediaFiles(): string[] {
    return this._mediaFiles;
  }

  set mediaFiles(value: string[]) {
    this._mediaFiles = value;
  }
}
