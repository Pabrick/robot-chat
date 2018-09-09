import { NgModule } from '@angular/core';
import { BotMessageComponent } from '../../components/bot-message/bot-message.component';
import { UserMessageComponent } from '../../components/user-message/user-message.component';

@NgModule({
  declarations: [
    BotMessageComponent,
    UserMessageComponent
  ],
  imports: [],
  exports: [
    BotMessageComponent,
    UserMessageComponent
  ],
  providers: [],
  bootstrap: []
})
export class ChatComponentModule { }
