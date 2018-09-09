import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bot-message',
  templateUrl: './bot-message.component.html',
  styleUrls: ['./bot-message.component.sass']
})
export class BotMessageComponent implements OnInit {

  @Input() message;

  constructor() { }

  ngOnInit() {
  }

}
