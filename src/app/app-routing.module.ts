import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat/chat.component';
import { ParitalModule } from './share/partial.module';
import { PartialComponent } from './share/partial/partial.component';

const routes: Routes = [
  { path: 'chat', component: PartialComponent, loadChildren: () => import('./chat/chat/chat-inner.module').then(m => m.ChatInnerModule) },
  { path: '**', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ParitalModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
