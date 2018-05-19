import { Subscription } from 'rxjs';

export class SubscriptionManager {

  private subscriptions: any = {};

  add(key: string, subscription: Subscription) {
    this.subscriptions = {
      ...this.subscriptions,
      key: subscription
    };
  }

  unsubscribe(key: string) {
    this.subscriptions[key].unsubscribe();
  }

  unsubscribeAll() {
    const keys = Object.keys(this.subscriptions);
    keys.forEach(key => this.subscriptions[key].unsubscribe());
  }

}