import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.sass']
})
export class UserMessageComponent implements OnInit {

  @Input() message;

  constructor() { }

  ngOnInit() {
  }

}
