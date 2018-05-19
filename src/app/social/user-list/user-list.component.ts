import { Component, OnInit } from '@angular/core';
import { UserStore } from '../../core/stores';
import { User } from '../../shared/models/user/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userStore: UserStore) {}

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.userStore.getAll().subscribe(users => (this.users = users));
  }
}
