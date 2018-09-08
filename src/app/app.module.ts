import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { HelpComponent } from './help/help.component';
import { ChatComponentModule } from './chat/chat.component.module';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
