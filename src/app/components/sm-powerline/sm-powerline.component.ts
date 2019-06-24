import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sm-powerline',
  templateUrl: './sm-powerline.component.html',
  styleUrls: ['./sm-powerline.component.scss']
})
export class SmPowerlineComponent implements OnInit {

  @Input() title:string;
  @Input() active:number;
  @Input() number:number;
  @Input() scroll:string;

  constructor() { }

  ngOnInit() {
  }

}
