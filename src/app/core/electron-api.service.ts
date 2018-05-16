import {Injectable} from '@angular/core';
import {StateService} from './state.service';

@Injectable({
  providedIn: 'root'
})
export class ElectronApiService {
  notes = {
    test1: '<p>aisertnaeirsn</p>',
    test2: '<h1>iaserntaeisnrti</h1>'
  };

  constructor(private state: StateService) {
  }

  getNoteList(): Promise<string[]> {
    return new Promise(x => {
      x(Object.keys(this.notes));
    });
  }

  saveNote(noteName: string, noteBody: string): void {
    this.notes[noteName] = noteBody;
    this.state.appState.next();
  }

  getNoteBody(noteName: string): Promise<string> {
    return new Promise(x => {
      if (this.notes.hasOwnProperty(noteName)) {
        x(this.notes[noteName]);
      } else {
        return;
      }
    });
  }

  removeNote(noteName: string): void {
    if (this.notes.hasOwnProperty(noteName)) {
      delete this.notes[noteName];
      this.state.appState.next();
    }
  }


}
