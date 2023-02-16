import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styles: [
    '.error-template {padding: 40px 15px;text-align: center;}',
    '.error-actions {margin-top:15px;margin-bottom:15px;}',
    '.error-actions .btn { margin-right:10px; }'
  ]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
