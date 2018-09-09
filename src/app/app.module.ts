import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './views/chat/chat.component';
import { HelpComponent } from './views/help/help.component';
import { ChatComponentModule } from './views/chat/chat.component.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HelpComponent,
    HeaderComponent,
    FooterComponent
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
