import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  getDishes(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
  }

  getDish(id: number): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((dish) => (dish.id === id))[0]);
  }

  getFeaturedDish(): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((dish) => dish.featured)[0]);
  }
}
