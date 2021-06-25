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
  documento!: FormGroup;
  textoDeInput = 'C'
  constructor(
    private clientesServices: ClientesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      NombreCliente: new FormControl('', Validators.required),
      Direccion: new FormControl('', Validators.required),
      RequiereComisionista: new FormControl(false, Validators.required),
      CorreoElectronico: new FormControl('', Validators.required),
      AerolineasConConvenio: new FormControl(null),
      Telefonos: new FormArray([]),
      LimiteDeCredito: new FormControl('', Validators.required),
      ClasificacionNivel2: new FormControl('', Validators.required),
      EsEmpresaDelGrupo: new FormControl(false, Validators.required),
      PermiteEmisionConTarjeta: new FormControl(false, Validators.required),
      SoloEmitirFacturaAgencia: new FormControl(false, Validators.required),
      IdGrupo: new FormControl('', Validators.required),
      Promotor: new FormGroup({
        IdPromotor: new FormControl('', Validators.required),
        Nombre: new FormControl('', Validators.required),
        CorreoElectronico: new FormControl('', Validators.required),
      }),
      CondicionPago: new FormGroup({
        IdCondicionPago: new FormControl('', Validators.required),
        Descripcion: new FormControl(''),
        CantidadDeDias: new FormControl('', Validators.required),
      }),
      TipoCliente: new FormGroup({
        IdTipo: new FormControl('', Validators.required),
        Descripcion: new FormControl(''),
      }),
      Documento: new FormGroup({
        IdDocumento: new FormControl('', Validators.required),
        Descripcion: new FormControl(''),
        NumeroDocumento: new FormControl('', Validators.required),
      }),
      Morosidad: new FormGroup({
        MensajeMorosidad: new FormControl(''),
        DeudaTotal: new FormControl(''),
        BloquearEmision: new FormControl(''),
        DocumentosVencidos: new FormArray([])
      }),
      LineaCredito: new FormControl('', Validators.required),
      EsGoldenLine: new FormControl(false, Validators.required),
      AutorizaEmisionConFComisionPendiente: new FormControl(false, Validators.required),
      MontoMaximoMorosidad: new FormControl('', Validators.required),
      idSucursal: new FormControl('', Validators.required),
      idPtoVenta: new FormControl('', Validators.required),

    });

    this.documento = new FormGroup({
      DocumentosVencidos: new FormArray([])
    });


    this.addTelefono()
    this.addTelefono()
  }

  save() {
    let morosidad = this.form.value.Morosidad.DocumentosVencidos;
    let documentosVencidos = this.documento.value.DocumentosVencidos;

    morosidad.push(documentosVencidos[0]);
    this.clientesServices.newCliente(this.form.value).subscribe(
      _=> {
      this.router.navigateByUrl('/business-flow/clientes/lista');
        })
  }

  getArrayControls() {
    return (<FormArray>this.documento.get('DocumentosVencidos')).controls;
  }

  getArrayTelefonoControls() {
    return (<FormArray>this.form.get('Telefonos')).controls;
  }

  addTelefono() {
    (<FormArray>this.form.controls['Telefonos']).push(new FormGroup({
      'Clave': new FormControl(''),
      'Valor': new FormControl('', Validators.required),
    }));
  }

  addDocument(){
    (<FormArray>this.documento.controls['DocumentosVencidos']).push(new FormGroup({
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
    (<FormArray>this.documento.controls['DocumentosVencidos']).removeAt(index);
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
  ClasificacionNivel2: string[] = [
    'SMART', 'OTRO'
  ];
  IdGrupo: string[] = [
    'CAC', 'OTRO'
  ];
  tipoCliente:string[] = [
    'AGENCIA', 'OTRO'
  ];
  IdDocumento:string[] = [
    'RUC', 'DNI'
  ];
  idSucursal = [
    {text: 'PARDO', value: 1},
    {text: 'SAN ISIDRO', value: 0}
  ];
  idPtoVenta = [
    {text: 'AGENCIA', value: 120},
    {text: 'EMPRESA', value: 100}
  ];
}
