import { Component, OnInit } from '@angular/core';
import { Server } from '../interfaces/server.interfaces';
import { ServersService } from '../services/servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {
  servers: Server[]= [];
  constructor(private serversService: ServersService) { }

  ngOnInit(): void {
    this.servers = this.serversService.servers;
  }


}
