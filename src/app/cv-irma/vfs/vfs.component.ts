import { Component, OnInit } from '@angular/core';
import { vfs } from './vfs.model';

@Component({
  selector: 'app-vfs',
  templateUrl: './vfs.component.html',
  styleUrls: ['./vfs.component.css']
})
export class VfsComponent implements OnInit {

vfses: vfs[] = [
  new vfs('Delhi', 'Machine Learning', 'Title',[
    'Somthing to do with Machine learning',
    'This one thing with machine learning too'
  ]),
  new vfs('Delhi', 'Angular', 'Title',[
    'Somthing to do with Angular.js',
    'This one thing with Angular 2'
  ]),
];

  constructor() { }

  ngOnInit() {
  }

}
