import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { BasicWatchScheduleComponent } from './basic-watch-schedule/basic-watch-schedule.component';
import { OptimizedScheduleComponent } from './optimized-schedule/optimized-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicWatchScheduleComponent,
    OptimizedScheduleComponent,
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
