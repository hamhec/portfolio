import { Component, HostListener, OnInit, OnDestroy, ViewChild, ElementRef,
         AfterViewInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { CommandService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('window1', {read: ElementRef, static:false}) private window1: ElementRef;
  @ViewChild('window2', {read: ElementRef, static: false}) private window2: ElementRef;

  title = 'Raouf Hecham';
  subscriptions:Subscription[] = [];
  representation = {
    windows: [1,2],
    focusedWindow: 2,
    i : 0,
    themes : ['solarized-theme', 'doom-one-theme'],
    theme : 'solarized-theme',
    hideSidenav: false,
    focusSidenav: false,
    router: null
  }

  constructor(private commandService:CommandService,
              breakpointObserver:BreakpointObserver,
              private route:ActivatedRoute, router:Router) {

    this.representation.router = router;

    this.subscriptions.push(this.route.fragment.subscribe(fragment => {
      if(!fragment) {
        this.representation.focusedWindow= 2;
        this.representation.focusSidenav = false;
        return;
      }
      try {
        if(fragment == "Help") {
          this.representation.focusedWindow= 1;
          this.representation.focusSidenav = true;
        } else {
          this.representation.focusedWindow= 2;
          this.representation.focusSidenav = false;
        }
        document.querySelector('#' + fragment).scrollIntoView();
      } catch (e) {
        setTimeout(() => {
          let e = document.querySelector('#' + fragment);
          if(e) e.scrollIntoView();
        }, 500);

      }
    }));

    this.subscriptions.push(breakpointObserver.observe(
      ['(max-width: 775px)']).subscribe(result => {
        if(result.matches) {
          this.representation.hideSidenav = true;
        } else {
          this.representation.hideSidenav = false;
        }
      }))
  }


  @HostListener('document:keydown.escape', ['$event']) // since event.keyCode is
  // being deprecated, it is better to isolate the escape key event
  handleEscapeKey(event: KeyboardEvent) {
    this.commandService.keyPressed({key: 'Escape'});
  }

  @HostListener('document:keydown.arrowdown', ['$event']) // since event.keyCode is
  // being deprecated, it is better to isolate the arrows key event
  handleArrowDownKey(event: KeyboardEvent) {
    this.scrollWindow();
    event.preventDefault();
  }

  @HostListener('document:keydown.arrowup', ['$event']) // since event.keyCode is
  // being deprecated, it is better to isolate the arrows key event
  handleArrowUpKey(event: KeyboardEvent) {
    this.scrollWindow(true);
    event.preventDefault();
  }


  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.key == 'j') {
      this.scrollWindow();
    } else if (event.key == 'k') {
      this.scrollWindow(true);
    } else {
      this.commandService.keyPressed(event);
    }
  }


  ngOnInit() {
    this.subscriptions.push(this.commandService.broadcastCommand$.subscribe(cmd => {
      cmd.execute(this.representation);
    }));

  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  ngAfterViewInit() {
    let e = document.querySelector("#main-content") as HTMLElement;
    e.focus();
  }

  scrollWindow(up:boolean = false) {
    let scrollIncrement = (up)? -50 : 50;
    let element = (this.representation.focusedWindow == 1) ? this.window1.nativeElement:
      this.window2.nativeElement;
    let currentScroll = element.scrollTop + scrollIncrement;
    if(up) {
      element.scrollTop = (currentScroll > 0) ? currentScroll : 0;
    } else {
      element.scrollTop = (currentScroll < element.scrollHeight) ?
        currentScroll: element.scrollHeight;
    }
  }
}
