import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const API_URL = 'http://localhost:5000/api/codeeditor/';

@Component({
  selector: 'code-editor',
  templateUrl: './code-editor.component.html',
})
export class CodeEditorComponent implements OnInit {
  editorContent: string;

  codeMirrorOptions: any = {
    mode: 'text/x-csrc',
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true
  };

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  Validate() {
    return this.http.post<string>(API_URL + 'validate',
      this.editorContent, this.httpOptions);
  }
}
