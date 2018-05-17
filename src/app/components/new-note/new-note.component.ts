import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ElectronApiService} from '../../core/electron-api.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {filter, map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  noteName: FormControl = new FormControl('', Validators.compose([
    Validators.minLength(2),
    Validators.required
  ]));
  editor: FormControl = new FormControl('');


  constructor(private api: ElectronApiService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      filter((params: ParamMap) => params.has('note-name')),
      map((params: ParamMap) => params.get('note-name'))
    ).subscribe(noteName => {
      this.noteName.setValue(noteName);
      this.setNoteBody(noteName);
    });
    this.editor.valueChanges.subscribe(x => {
    });
  }

  setNoteBody(noteName: string): void {
    this.api.getNoteBody(noteName).then(noteBody => {
      this.editor.setValue(noteBody);
    });
  }

  saveNote(): void {
    if (this.noteName.invalid) {
      return;
    }

    this.api.saveNote(this.noteName.value, this.editor.value);
  }

}
