import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  @Output() startTraining = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onStartNewTraining() {
    this.startTraining.emit();
  }
}
