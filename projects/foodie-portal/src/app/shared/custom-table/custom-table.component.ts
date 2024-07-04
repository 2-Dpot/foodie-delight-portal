import { Component, Input, input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Column } from '../../interfaces/table-column.interface';

@Component({
  selector: 'app-custom-table',
  standalone: true,
  imports: [TableModule],
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.scss'
})
export class CustomTableComponent {
  data = input.required<unknown[]>();
  cols = input.required<Column[]>();
}
