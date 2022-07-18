import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './learning/new/new.component';
import { HeaderComponent } from './learning/header/header.component';
import { FooterComponent } from './learning/footer/footer.component';
import { ListNotesComponent } from './learning/list-notes/list-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    HeaderComponent,
    FooterComponent,
    ListNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
