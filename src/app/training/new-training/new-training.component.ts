import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/training.service';
import { Exercise } from 'src/app/exercise.model';

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

  availableExercises: Exercise[];

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.availableExercises = this.trainingService.getExercises();
  }

  onStartNewTraining() {
    this.trainingService.startExercise();
  }
}
