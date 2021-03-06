import { Component, OnInit } from '@angular/core';
import { comments } from '../shared/comments';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes'

import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  
    dish: Dish;
    comments: comments[];
    constructor(private dishservice: DishService,
      private route: ActivatedRoute,
      private location: Location) { }
  
    ngOnInit() {
      let id = +this.route.snapshot.params['id'];
      this.dish = this.dishservice.getDish(id);
      this.comments = DISHES[0].comments;
    }
  
    goBack(): void {
      this.location.back();
    }
  
  }