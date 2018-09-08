import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'help',
    component: HelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
