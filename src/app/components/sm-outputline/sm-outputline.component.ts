import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommandService } from '../../services';

import { Subscription } from 'rxjs';

@Component({
  selector: 'sm-outputline',
  templateUrl: './sm-outputline.component.html',
  styleUrls: ['./sm-outputline.component.scss']
})
export class SmOutputlineComponent implements OnInit, OnDestroy {
  message:string = '';
  private subscriptions:Subscription[] = [];

  constructor(private commandService:CommandService) { }

  ngOnInit() {
    this.commandService.commandLineMessage$.subscribe(message => {
      this.message = message;
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  clicked():void {
    this.commandService.keyPressed({key: 'SPC'});
    console.log("clicked");
  }
}
