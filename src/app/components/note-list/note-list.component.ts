import {Component, OnInit} from '@angular/core';
import {ElectronApiService} from '../../core/electron-api.service';
import {StateService} from '../../core/state.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  noteList: string[];

  constructor(private api: ElectronApiService,
              private state: StateService) {
  }

  ngOnInit() {
    this.setNoteList();
    this.state.appState.subscribe(() => {
      this.setNoteList();
    });
  }

  setNoteList(): void {
    this.api.getNoteList().then(list => {
      this.noteList = list;
    });
  }

}
