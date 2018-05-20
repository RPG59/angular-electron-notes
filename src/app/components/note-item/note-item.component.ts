import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ElectronApiService} from '../../core/electron-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteItemComponent {
  @Input() noteItem: string;

  constructor(private api: ElectronApiService,
              private router: Router) {
  }

  openNote(): void {
    this.router.navigateByUrl(`note/${this.noteItem}`);
  }

  removeNote(): void {
    this.api.removeNote(this.noteItem);
  }

}
