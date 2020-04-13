import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/training.service';
import { Exercise } from 'src/app/exercise.model';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit {

  dataSource: Exercise[];

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.dataSource = this.trainingService.getExercises();
  }

}
