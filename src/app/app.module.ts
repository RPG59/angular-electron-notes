import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {NewNoteComponent} from './components/new-note/new-note.component';
import {QuillModule} from 'ngx-quill';
import {ReactiveFormsModule} from '@angular/forms';
import {NoteListComponent} from './components/note-list/note-list.component';
import {NoteItemComponent} from './components/note-item/note-item.component';
import {MatButtonModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NewNoteComponent,
    NoteListComponent,
    NoteItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    QuillModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
