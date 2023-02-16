import { Injectable } from '@angular/core';
import { Server } from '../interfaces/server.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  private _servers: Server[] = [
    {
    id: 1,
    name: 'Productionserver',
    status: 'online'
    },
    {
    id: 2,
    name: 'Testserver',
    status: 'offline'
    },
    {
    id: 3,
    name: 'Devserver',
    status: 'offline'
    }
    ]
  constructor() { }

  get servers(): Server[]{
    return [...this._servers]
  }
  
  getServer(id: number): Server{
    const server: Server = this.servers.find(
      (s) => {
        return s.id == id;
      }
    )||{id:0,name:"unknown",status:"offline"};
    return server;
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
