import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent} from './menu/menu.component';
import {CursosComponent} from './cursos/cursos.component';
import {ArtigosComponent} from './artigos/artigos.component';
import {RodapeComponent} from './rodape/rodape.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CursosComponent,
   ArtigosComponent,
   RodapeComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
