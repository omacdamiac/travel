import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-new-clientes',
  templateUrl: './new-clientes.component.html',
  styleUrls: ['./new-clientes.component.scss']
})
export class NewClientesComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private clientesServices: ClientesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'direccion': new FormControl('', Validators.required),
      'telefono': new FormControl('', Validators.required),
      'celular': new FormControl('', Validators.required),
      'promotor': new FormControl('', Validators.required),
      'credito': new FormControl('', Validators.required),

      'documentos': new FormArray([])

    })
  }

  save() {
    console.log(this.form.value);
    this.clientesServices.newCliente(this.form.value).subscribe(
      _=> {
        this.router.navigateByUrl('clientes/lista');
      }
    )
  }

  getArrayControls() {
    return (<FormArray>this.form.get('documentos')).controls;
  }

  add(){
    (<FormArray>this.form.controls['documentos']).push(new FormGroup({
      comprobante: new FormControl('', Validators.required),
      moneda: new FormControl('', Validators.required),
      sucursal: new FormControl('', Validators.required),
      montoCobrar: new FormControl('', Validators.required),
      montoPendiente: new FormControl('', Validators.required),
      fechaVencimiento: new FormControl('', Validators.required),
      condicion: new FormControl('', Validators.required),
    }));
  }

  deleteDoc(index: number) {
    (<FormArray>this.form.controls['documentos']).removeAt(index);
  }

  mes(e: any){
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    const day = e?.getDate();
    const month = e?.getMonth();
    const year = e?.getFullYear();

    console.log(`${day} ${months[month]} ${year}` );
    const fecha = `${day} ${months[month]} ${year}`;

    this.form.addControl('fechaEmision', new FormControl(fecha, Validators.required));
  }

  moneda: string[] = [
    'USD', 'Soles'
  ];

  sucursal: string[] = [
    'Pardo', 'Navarrete', 'Otro'
  ];

  condicion: string[] = [
    '07D', 'OK', '08D'
  ];

}
