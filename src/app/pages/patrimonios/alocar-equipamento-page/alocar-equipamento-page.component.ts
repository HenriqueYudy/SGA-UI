import { FormGroup } from '@angular/forms';
import { Colaborador } from './../../../models/colaborador';
import { Empresa } from './../../../models/empresa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alocar-equipamento-page',
  templateUrl: './alocar-equipamento-page.component.html',
  styleUrls: ['./alocar-equipamento-page.component.scss']
})
export class AlocarEquipamentoPageComponent implements OnInit {

  empresas: Empresa[];
  colaboradores: Colaborador[];
  equipamentoForm: FormGroup;

  

  constructor() { }

  ngOnInit() {
  }

}
