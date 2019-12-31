import {Component} from '@angular/core';
import {Table} from './classes/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  searched: boolean = false;
  foundTable: Table;
  tables: Table[] = [
    new Table(1, ['John Doe', 'Jane Doe']),
    new Table(2, ['Juan Gomez', 'Maria Gomez']),
    new Table(3, ['Luis Suarez', 'Ryan Giggs']),
    new Table(4, ['Lionel Messi', 'Cristiano Ronaldo']),
  ];

  find(name) {
    this.foundTable = this.tables.find(table => table.findByName(name));
    this.searched = true;
  }
}
