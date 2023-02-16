import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { RouterModule } from '@angular/router';
import { EditServerComponent } from './edit-server/edit-server.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ServersComponent,
    ServerComponent,
    EditServerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    ServersComponent
  ]
})
export class ServersModule { }
