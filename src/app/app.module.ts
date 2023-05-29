import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WordComponent } from './component/word/word.component';
// import { FilterPipe } from './Pipes/filter.pipe';
import {ReactiveFormsModule} from '@angular/forms'
import { HomeComponent } from './component/home/home.component';
import { WordService } from './services/word.service';
import { DetailsComponent } from './component/details/details.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FilterPipe,
    ReactiveFormsModule
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
