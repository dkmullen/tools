import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BmiComponent {
  bmiMetricForm;
  bmiImperialForm;
  bmi;
  units = 'imperial';
  unitsLabel = 'Metric';
  heightAndWeight: string;

  constructor(private formBuilder: FormBuilder) {
    this.bmiMetricForm = this.formBuilder.group({
      weight: null,
      height: null
    });
    this.bmiImperialForm = this.formBuilder.group({
      weight: null,
      feet: null,
      inches: null
    });
  }

  toggleUnits() {
    this.units = this.units === 'imperial' ? 'metric' : 'imperial';
    this.unitsLabel = this.unitsLabel === 'Imperial' ? 'Metric' : 'Imperial';
  }

  getBMIMetric(kg: number, cm: number) {
    const meters = cm/100;
    this.bmi =  (kg/(meters * meters)).toFixed(2);
    this.heightAndWeight = `Height: ${cm} cm, Weight: ${kg} kg`
  }

  getBMIImperial(lbs: number, ft: number, inches: number) {
    const totalInches = inches + (ft * 12);
    this.bmi = ((lbs / totalInches / totalInches) * 703).toFixed(2);
    this.heightAndWeight = `Height: ${ft} ft ${inches} in, Weight: ${lbs} lbs`
  }

  onSubmitMetric({ weight, height }) {
    this.getBMIMetric(weight, height);
    this.bmiMetricForm.reset();
  }

  onSubmitImperial( {weight, feet, inches}) {
    this.getBMIImperial(weight, feet, inches);
    this.bmiImperialForm.reset();
  }

}
