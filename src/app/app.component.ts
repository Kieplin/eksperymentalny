import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'App';

  tasks: Task[] = [];

  handleTaskAdd(description: string) {
    if (description && description.length > 0) {
        this.tasks.push({ description });
    }
  }

  handleTaskRemove(taskIdx: number) {
      //z https://stackoverflow.com/questions/41684114/easy-way-to-make-a-confirmation-dialog-in-angular
      if(confirm("Czy na pewno usunąć "+this.tasks[taskIdx].description+"?")) {
      this.tasks.splice(taskIdx, 1);
    }
  }
  handleTaskPrzekresl(taskIdx: number) {
      this.tasks.splice(taskIdx, 1);
  }
}

