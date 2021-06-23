import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteData } from 'src/app/commons/models/clientes';
import { MatDialog } from '@angular/material/dialog';
import { DialogDocComponent } from 'src/app/commons/components/dialog-doc/dialog-doc.component';
import {MatPaginatorIntl, PageEvent} from "@angular/material/paginator";
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.scss']
})
export class ListClientesComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nombre', 'direccion', 'telefonos', 'celular', 'promotor', 'linea credito','credito utilizado', 'credito disponible', 'deuda vencida', 'documentos vencidos', 'opciones'];
  dataSource: MatTableDataSource<ClienteData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private clientesServices: ClientesService,
    public dialog: MatDialog,
    private paginato: MatPaginatorIntl,
  ) {
        this.dataSource = new MatTableDataSource();
        this.paginato.itemsPerPageLabel = "Registros por página";
        this.paginato.lastPageLabel = "Última página";
        this.paginato.nextPageLabel = "Siguiente página";
        this.paginato.previousPageLabel = "Página Anterior";
        this.paginato.firstPageLabel = "Primera página";
        
  }

  ngOnInit(): void {
    this.getListClientes()
  }

  edit(e: any): void{
    console.log(e.Morosidad[0].DocumentosVencidos);
  }

  view(){
    console.log('Ver');
  }

  openDialog(e: any) {
    const docs = e.Morosidad[0];
    const dialogRef = this.dialog.open( DialogDocComponent, {
      data: docs
    });    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getListClientes() {
    this.clientesServices.getClientes().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data?.clientes)
    });
  }

  ngAfterViewInit() {    console.log(this.paginato);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}