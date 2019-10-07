export class Table {
  id: any;
  names: string[];

  constructor(id: number, names: string[]) {
    this.id = id;
    this.names = names;
  }

  includesName(name): boolean {
    return this.names.includes(name);
  }
}
