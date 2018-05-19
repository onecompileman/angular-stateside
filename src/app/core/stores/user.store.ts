import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '../../shared/models/user/user.model';

@Injectable()
export class UserStore {
  private users$: BehaviorSubject<User[]> = new BehaviorSubject([]);

  constructor(private userService: UserService) {}

  init(): Observable<any> {
    return Observable.create(observer => {
      this.userService.getAll().subscribe(users => {
        this.users$.next(users);
        observer.next(users);
        observer.complete();
      });
    });
  }

  getAll(): Observable<User[]> {
    return this.users$.asObservable();
  }

  getAllSnapshot(): User[] {
    return this.users$.getValue();
  }
}
