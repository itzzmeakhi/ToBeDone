import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-list/todo-item/todo-item.component';
import { NewItemComponent } from './components/todo-list/new-item/new-item.component';
import { TasksReducer } from './components/todo-list/store/tasks.reducer';
import { TasksEffects } from './components/todo-list/store/tasks.effects';

// import { MatCardModule } from '@angular/material/card';
// import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    TodoItemComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ tasksReducer : TasksReducer }),
    EffectsModule.forRoot([TasksEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
