import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./chat/chat-inner.module').then(m => m.ChatInnerModule) }
];

@NgModule({
    declarations: [
    ],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [],
    providers: [],
})
export class ChatModule { }
