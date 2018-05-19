import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewNoteComponent} from './components/new-note/new-note.component';

const routes: Routes = [
  {path: 'new-note', component: NewNoteComponent},
  {path: 'note/:note-name', component: NewNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
