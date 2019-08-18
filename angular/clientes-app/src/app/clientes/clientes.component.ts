import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {
  private clienteServiceClass: ClienteService;
  clientes: Cliente [];

  constructor(private clienteService: ClienteService) {
    this.clienteServiceClass = clienteService;
  }

  ngOnInit() {
    this.clienteServiceClass.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

}
