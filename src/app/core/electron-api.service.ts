import {Injectable} from '@angular/core';
import {StateService} from './state.service';
import {ElectronService} from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class ElectronApiService {
  fs: any;
  path: any;

  constructor(private state: StateService,
              private electron: ElectronService) {
    this.fs = electron.remote.require('fs');
    this.path = electron.remote.require('path');
  }

  getNoteList(): Promise<string[]> {
    return new Promise(resolve => {
      this.fs.readdir('./notes', (err, data) => {
        if (err) {
          console.log(err);
        }

        if (data && data.length) {
          resolve(data.map(x => x.replace('.html', '')));
        }

        return;
      });
    });
  }

  saveNote(noteName: string, noteBody: string): void {
    if (!noteName) {
      return;
    }
    this.fs.writeFile(`./notes/${noteName}.html`, noteBody, (err) => {
      if (err) {
        console.log(err);
      }
      this.state.updateNotes$.next();
    });
  }

  getNoteBody(noteName: string): Promise<string> {
    if (!noteName) {
      return;
    }

    return new Promise(resolve => {
      this.fs.readFile(`./notes/${noteName}.html`, (err, data) => {
        resolve(data.toString());
      });
    });
  }

  removeNote(noteName: string): void {
    this.fs.unlink(`./notes/${noteName}.html`, err => {
      if (err) {
        console.log(err);
      }
      this.state.updateNotes$.next();
    });
  }
}
