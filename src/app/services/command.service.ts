import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

import { Command } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  private abortCommand = {
    code: 0,
    key: 'ESC',
    text: 'exit',
    textAfterExecute: ""
  }

  private commands = [
    {
      key: 'SPC',
      text: '',
      children: [
        {
          key: '1',
          text: 'focus-window-1',
          textAfterExecute: "Window 1 is now focused",
          execute: function(obj) {
            obj.focusedWindow = 1;
            obj.focusSidenav = true;
            let e = document.querySelector("#sidenav a") as HTMLElement;
            e.focus();
          }
        },
        {
          key: '2',
          text: 'focus-window-2',
          textAfterExecute: "Window 2 is now focused",
          execute: function(obj) {
            obj.focusedWindow = 2;
            obj.focusSidenav = false;
            let e = document.querySelector("#main-content a") as HTMLElement;
            e.focus();
          }
        },
        {
          key: '?',
          text: 'go-to-help',
          textAfterExecute: "Go to 'Help' section",
          execute: function(obj) {
            obj.focusedWindow = 1;
            obj.focusSidenav = true;
            obj.router.navigate(['/'], {fragment: "Help"});
          }
        },
        {
          key: 'g',
          text: '+go-to',
          children: [
            {
              key: 'a',
              text: 'go-to-about',
              textAfterExecute: "Go to 'About' section",
              execute: function(obj) {
                obj.focusedWindow = 2;
                obj.focusSidenav = false;
                obj.router.navigate(['/'], {fragment: "About"});
              }
            },
            {
              key: 'e',
              text: 'go-to-experience',
              textAfterExecute: "Go to 'Experience' section",
              execute: function(obj) {
                obj.focusedWindow = 2;
                obj.focusSidenav = false;
                obj.router.navigate(['/'], {fragment: "Experience"});
              }
            },
            {
              key: 's',
              text: 'go-to-skills',
              textAfterExecute: "Go to 'Skills' section",
              execute: function(obj) {
                obj.focusedWindow = 2;
                obj.focusSidenav = false;
                obj.router.navigate(['/'], {fragment: "Skills"});
              }
            },
            {
              key: 'p',
              text: 'go-to-projects',
              textAfterExecute: "Go to 'Projects' section",
              execute: function(obj) {
                obj.focusedWindow = 2;
                obj.focusSidenav = false;
                obj.router.navigate(['/'], {fragment: "Projects"});
              }
            },
            {
              key: 'w',
              text: 'go-to-awards',
              textAfterExecute: "Go to 'Awards and Certifications' section",
              execute: function(obj) {
                obj.focusedWindow = 2;
                obj.focusSidenav = false;
                obj.router.navigate(['/'], {fragment: "Awards"});
              }
            },
            {
              key: 'd',
              text: 'go-to-education',
              textAfterExecute: "Go to 'Education' section",
              execute: function(obj) {
                obj.focusedWindow = 2;
                obj.focusSidenav = false;
                obj.router.navigate(['/'], {fragment: "Education"});
              }
            },
            {
              key: 'r',
              text: 'go-to-research',
              textAfterExecute: "Go to 'Research' section",
              execute: function(obj) {
                obj.focusedWindow = 2;
                obj.focusSidenav = false;
                obj.router.navigate(['/'], {fragment: "Research"});
              }
            },
            {
              key: 'c',
              text: 'go-to-contact',
              textAfterExecute: "Go to 'Contact' section",
              execute: function(obj) {
                obj.focusedWindow = 2;
                obj.focusSidenav = false;
                console.log(obj.router);
                obj.router.navigate(['/'], {fragment: "Contact"});
              }
            }
          ]
        },
        {
          key: 'T',
          text: '+themes',
          children: [
            {
              key: 'd',
              text: 'doom-one-theme',
              textAfterExecute: "Changed theme to 'doom-one'",
              execute: function(rep) {
                rep.theme = 'doom-one-theme';
              }
            },
            {
              key: 'n',
              text: 'next-theme',
              textAfterExecute: "Applied next available theme",
              execute: function(rep) {
                rep.i = rep.i +1;
                rep.theme = rep.themes[rep.i % rep.themes.length];
              }
            },
            {
              key: 's',
              text: 'solarized-theme',
              textAfterExecute: "Changed theme to 'solarized'",
              execute: function(rep) {
                rep.theme = 'solarized-theme';
              }
            },
            // {
            //   key: 't',
            //   text: 'material-teal-theme',
            //   textAfterExecute: "Changed theme to 'material-teal'",
            //   execute: function(rep) {
            //     rep.theme = 'material-teal-theme';
            //   }
            // },
            this.abortCommand
          ]
        },
        this.abortCommand
      ]
    }
  ]

  private keySequence:string[] = [];

  private broadcastCommand = new Subject<Command>();
  public broadcastCommand$ = this.broadcastCommand.asObservable();

  private availableCommands = new BehaviorSubject<Command[]>([]);
  public availableCommands$ = this.availableCommands.asObservable();

  private commandLineMessage = new Subject<string>();
  public commandLineMessage$ = this.commandLineMessage.asObservable();

  constructor() {

  }

  executeCommand(cmd:Command, clicked:boolean=false):void {
    if(clicked) { // command executed through a mouse click
      this.keySequence.push(cmd.key);
      // Inform the command line
      this.commandLineMessage.next(this.keySequence.join(' ') + ' -');
    }

    if(cmd.key == 'ESC') {// abort command called
      this.commandLineMessage.next('');
      this.availableCommands.next([]);
      return;
    }
    if(cmd.children == undefined || cmd.children.length == 0) {
      // this command is executable
      this.keySequence = [];
      this.availableCommands.next([]);
      this.commandLineMessage.next(cmd.textAfterExecute);
      this.broadcastCommand.next(cmd);
    } else {
      // this command has children
      this.availableCommands.next(cmd.children);
    }
  }

  keyPressed(event):void {
    let key = event.key;

    switch(key) {
      case ' ': key = 'SPC'; break;
      case 'Escape': key = 'ESC'; break;
    }

    this.keySequence.push(key);
    // Inform the command line
    this.commandLineMessage.next(this.keySequence.join(' ') + ' -');
    // Check the previous list of available commands
    let commandList:Command[] = (this.availableCommands.getValue().length == 0) ?
      this.commands : this.availableCommands.getValue();

    let command = commandList.find((el) => el.key == key);

    if(command == null) { // If key sequence matches no command
      this.commandLineMessage.next(this.keySequence.join(' ') + ' is undefined');
      this.keySequence = [];
      this.availableCommands.next([]);
    } else {
      if(event.preventDefault) event.preventDefault(); // prevent default only when key has a command.
      this.executeCommand(command);
    }
  }
}
