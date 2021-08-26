import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { Instructor } from './instructor';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Category[] = [
    {
      id:1,
      name:"C#"
    },
    {
      id:2,
      name:"JavaScript"
    },
    {
      id:3,
      name:"Python"
    },
    {
      id:4,
      name:"Java"
    }

  ]

  instructors : Instructor[] = [
    {
      id:1,
      firstName:"Engin",
      lastName:"Demiroğ"
    },
    {
      id:2,
      firstName:"Etiya",
      lastName:"Demiroğ"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
