import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  exerciseChanged = new Subject<Exercise>();

  private runningExercise: Exercise;

  private availableExercises: Exercise[] = [
    {id: 'crunches', name: 'Crunches', duration: 30, calories: 8},
    {id: 'touch-toes', name: 'Touch-toes', duration: 180, calories: 10},
    {id: 'side-lunges', name: 'Side-lunges', duration: 120, calories: 5},
    {id: 'burpees', name: 'Burpees', duration: 60, calories: 8},
  ];

  constructor() { }

  getExercises(): Exercise[] {
    return this.availableExercises.slice();
  }

  startExercise(selectedId: string) {
    this.runningExercise =
      this.availableExercises.find( ex => ex.id === selectedId
    );
    this.exerciseChanged.next({...this.runningExercise});
  }

  getRunningExercise() {
    return({...this.runningExercise});
  }
}
