import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopafefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: [ './nopagefound.componet.css'
  ]
})
export class NopagefoundComponent implements OnInit {

  year = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
