import { Component, OnInit } from '@angular/core';
import {UserStore} from "./core/stores/user.store";
import {SubscriptionManager} from "./core/utils/subscription-manager";
import {User} from "./shared/models/user/user.model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  users: User[] = [];

  private subscriptions: SubscriptionManager = new SubscriptionManager();

  constructor(private userStore: UserStore) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    const usersSubscription = this.userStore.getAll()
      .subscribe(users => this.users = users);
    this.subscriptions.add('users', usersSubscription);
  }

}
