import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/training.service';
import { Exercise } from 'src/app/exercise.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit {
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Exercise>();

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.dataSource.data = this.trainingService.getCompletedOrCancelledExercises();
  }

}
