import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SecurityService} from '../security/security.service';
import {Content} from '@angular/compiler/src/render3/r3_ast';
import {EditorContent} from './EditorContent';
import {ValidationResult} from './ValidationResult';

const API_URL = 'http://localhost:5000/api/codeeditor/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
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
  validationResult: ValidationResult;
  private result: string;



  constructor(private securityService: SecurityService) {
  }

  ngOnInit() {
  }

  Validate() {
    const editorContent: EditorContent = new EditorContent();
    editorContent.content = this.editorContent;
    editorContent.contentType = 'C';
    this.securityService.validateEditorContent(editorContent).subscribe( resp => {
      this.validationResult = resp;
      this.result = this.validationResult.result
      });
  }
}
