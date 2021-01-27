import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ptc-code-editor',
  templateUrl: './code-editor.component.html'
})
export class CodeEditorComponent implements OnInit {
  name = 'Angular 6';
  codeMirrorOptions: any = {
    mode: 'text/x-c++src',
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true
  };

  myCodeMirror: any;
  obj;

  constructor() {
    const el = document.getElementById('codemirror');
    const x = 1;
  }

  ngOnInit() {

  }
}
