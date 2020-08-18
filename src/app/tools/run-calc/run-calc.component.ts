import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-run-calc',
  templateUrl: './run-calc.component.html',
  styleUrls: ['./run-calc.component.scss']
})
export class RunCalcComponent {
  runCalcForm: any;

  constructor(private formBuilder: FormBuilder) {
    this.runCalcForm = this.formBuilder.group({
        ehours: null,
        eminutes: null,
        eseconds: null,
        pminutes: null,
        pseconds: null,
        distance: null
    });
   }

   getPace(time: number, distance: number) {
     const secondsPerUnit = time/distance;
     const minutes = Math.floor(secondsPerUnit/60);
     const seconds = secondsPerUnit - (minutes * 60);
     return { minutes, seconds };
   }

   getDistance(time: number, pace: number) {
     return (time/pace).toFixed(2)
   }

   getTime(pace: number, distance: number) {
     const totalSeconds = pace * distance;
     const hours = Math.floor(totalSeconds/3600);
     const minutes = Math.floor((totalSeconds - (hours * 3600))/60);
     const seconds = (totalSeconds - (hours * 3600)) - (minutes * 60);
     return { hours, minutes, seconds };
   }

   onSubmit(form) {
     const { ehours, eminutes, eseconds, pminutes, pseconds, distance } = form;
     const etime = (ehours * 3600) + (eminutes * 60) + eseconds;
     const ptime = (pminutes * 60) + pseconds;
     console.log(this.getTime(ptime, distance))
   }



}
