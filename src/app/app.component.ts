import {Component} from '@angular/core';
import {Table} from './classes/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  tableId: number;
  tables: Table[] = [
    new Table(1, ['John Doe', 'Jane Doe']),
    new Table(2, ['Juan Gomez', 'Maria Gomez']),
    new Table(3, ['Julio Gomez', 'Aaron Messi']),
    new Table(4, ['Lionel Pena', 'Cristiano Giggs']),
  ];

  find(name) {
    for (const table of this.tables) {
      if (table.findByName(name)) {
        this.tableId = table.id;
        break;
      }
    }
  }
}
