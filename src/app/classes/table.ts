export class Table {
  id: any;
  names: string[];

  constructor(id: number, names: string[]) {
    this.id = id;
    this.names = names;
  }

  findByName(b: string): boolean {
    return !!this.names.find(a => a.toUpperCase() === b.toUpperCase());
  }
}
