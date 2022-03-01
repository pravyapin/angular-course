import { Component, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/model/course';
import { EventEmitter } from  '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input()
  course:Course;

  @Input()
  cardIndex:number;
  @Output()
 courseSelected=new EventEmitter<Course>();


  constructor() { }

  ngOnInit(): void {


  }
  onCourseViewed(){
    console.log("Course Button clicked and viewed");
    this.courseSelected.emit(this.course);
  }

}
