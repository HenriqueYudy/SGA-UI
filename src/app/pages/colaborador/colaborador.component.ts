import { Component, OnInit } from '@angular/core';
import { Colaborador } from 'src/app/models/colaborador';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.scss']
})
export class ColaboradorComponent implements OnInit {

  colaboradores: Colaborador[];
  colaborador: Colaborador;

  colunas: string[] = ['nome' , 'email' , 'empresa', 'setor', 'cargo', 'ativo', 'editar'];
  dataSource = new MatTableDataSource<Colaborador>(this.colaboradores);

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.dataSource.connect();
  }

}
