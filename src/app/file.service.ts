import { Injectable } from '@angular/core';

@Injectable()
export class FileService {

  loggedIn = false;
  editText: string[] = [];

  constructor() { }

  save(path: string, value: string) {
    this.editText.push(`save: ${path}, ${value}`);
  }

}