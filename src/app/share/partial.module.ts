import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialComponent } from './partial/partial.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        PartialComponent
    ],
    imports: [CommonModule, RouterModule],
    exports: [PartialComponent],
    providers: [],
})
export class ParitalModule { }
