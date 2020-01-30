import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {

  index: number;

  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {

    if (topic.value)
    this.topics.push(new FormControl(topic.value));

    topic.value = '';
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }

  removeTopic(topic: FormControl){

    this.index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(this.index);
  }
  
}
