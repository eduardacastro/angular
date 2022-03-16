import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarefa } from '../shared/tarefa.model';
import { TarefaService } from '../shared/tarefa.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private TarefaService: TarefaService,
    private router: Router) { }

  ngOnInit() {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void {
    if (this.formTarefa.form.valid){
      this.TarefaService.cadastrar(this.tarefa);
      this.router.navigate(["/tarefas"])
    }
  }
}
