import { AfterViewInit, Component, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-doc',
  templateUrl: './dialog-doc.component.html',
  styleUrls: ['./dialog-doc.component.scss']
})
export class DialogDocComponent implements AfterViewInit {
  displayedColumns: string[] = ['comprobante', 'moneda', 'sucursal', 'montoACobrar', 'monto pendiente', 'fecha emision', 'fecha vencimiento','condicion pago'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data?.DocumentosVencidos);
    console.log(this.data?.DocumentosVencidos);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

