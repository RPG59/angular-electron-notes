import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  appState: Subject<null> = new Subject();

  constructor() { }
}
