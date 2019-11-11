import { ToastrManager } from "ng6-toastr-notifications";
import { EmpresaService } from "./../../../services/empresa.service";
import { Empresa } from "./../../../models/empresa";
import { Colaborador } from "./../../../models/colaborador";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { CelularColaborador } from "src/app/models/celularColaborador";
import { ColaboradorService } from "src/app/services/colaborador.service";
import * as $ from "jquery";
import { ColaboradorCelular } from "src/app/models/ColaboradorCelular";

@Component({
  selector: "app-gerenciador-alocao-mobile",
  templateUrl: "./gerenciador-alocao-mobile.component.html",
  styleUrls: ["./gerenciador-alocao-mobile.component.scss"]
})
export class GerenciadorAlocaoMobileComponent implements OnInit {
  empresas: Empresa[];
  colaboradores: Colaborador[];
  colabCelular: ColaboradorCelular = new ColaboradorCelular();
  colabCelularForm: FormGroup;

  selectedRow: Number;
  setClickedRow: Function;

  constructor(
    private empresaService: EmpresaService,
    private colaboradorService: ColaboradorService,
    private toast: ToastrManager,
    private formBuilder: FormBuilder
  ) {
    this.colabCelularForm = formBuilder.group({
      id: [""],
      celular_id: [''],
      colaborador_id: [''],
      data_comodato: [''],
      data_devolucao: [''],
      chip_id: [''],
      email_id: [''],
      termo_assinado: [''],
      acessorios: ['']
    });

    this.setClickedRow = function(index) {
      this.selectedRow = index;
    }
  }

  ngOnInit() {
    this.chargeDatas();
  }

  chargeDatas() {
    this.empresaService.index().subscribe(resp => (this.empresas = resp));

    this.colaboradorService
      .index()
      .subscribe(resp => (this.colaboradores = resp));
  }

  filterByCity(empresa: Empresa) {}

  getColaborador(colaborador: Colaborador) {

 
  
     this.colabCelularForm.patchValue({
      colaborador_id: colaborador.id
     });
  }

  filterTable(filterValue: string) {
    let filter = filterValue.toLowerCase();

    $("#colaboradoresTable #contentTr").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(filter) > -1
      );
    });
  }
}
