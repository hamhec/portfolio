import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CommandService } from '../../services';
import { Command } from '../../models';

@Component({
  selector: 'sm-command-list',
  templateUrl: './sm-command-list.component.html',
  styleUrls: ['./sm-command-list.component.scss']
})
export class SmCommandListComponent implements OnInit, OnDestroy {
  private subscriptions:Subscription[] = [];
  commands:Command[];

  constructor(private commandService:CommandService) { }

  ngOnInit() {
    this.subscriptions.push(this.commandService
                            .availableCommands$
                            .subscribe(commands => {
                              this.commands = commands;
                            }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe() );
  }
}
