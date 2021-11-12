import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    TodoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [HomeComponent],
  //bootstrap: [HomeComponent]
})
export class HomeModule { }
