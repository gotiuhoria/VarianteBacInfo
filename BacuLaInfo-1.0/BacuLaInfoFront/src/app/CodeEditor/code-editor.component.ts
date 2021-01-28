import { Component, OnInit } from '@angular/core';


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

  constructor() {
    const el = document.getElementById('codemirror');
    const x = 1;
  }

  ngOnInit() {

  }

  Validate() {

  }
}
