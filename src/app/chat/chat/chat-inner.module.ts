import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { TopComponent } from './top/top.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { ContentRightComponent } from './content-right/content-right.component';

@NgModule({
    declarations: [
        ChatComponent,
        TopComponent,
        MenuLeftComponent,
        ContentRightComponent
    ],
    imports: [CommonModule],
    exports: [],
    providers: [],
})
export class ChatInnerModule { }
