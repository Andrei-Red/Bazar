import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncememtComponent } from './announcememt/announcememt.component';
import { CardComponent } from './card/card.component';
import { CatalogComponent } from './catalog/catalog.component';



@NgModule({
    declarations: [
        AnnouncememtComponent,
        CardComponent,
        CatalogComponent
    ],
    imports: [
        CommonModule
    ]
})
export class MainPageModule { }
