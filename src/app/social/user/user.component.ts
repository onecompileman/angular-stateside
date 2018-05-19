import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../shared/models/user/user.model';
import { UserStore } from '../../core/stores';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = new User();

  constructor(private route: ActivatedRoute, private userStore: UserStore) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = this.userStore.getByIdSnapshot(+params.id);
    });
  }
}
