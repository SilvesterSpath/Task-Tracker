import { Component, OnInit, Input, Inject, Injectable } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Task } from 'src/app/Task';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
  
  
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  faTimes = faTimes;

  constructor(@Inject(Object ) task: Task) {
    this.task = {text: '', day: '', reminder: false};
   }

  ngOnInit(): void {
  }

}
