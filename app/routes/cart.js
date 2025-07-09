import Route from '@ember/routing/route';
import {service} from '@ember/service';

export default class CartRoute extends Route {
  @service('shopping-cart') cart;
  model() {
    return this.cart.itemList;
  }

  setupController(controller, model) {
    super.setupController(controller, model);
  }
}
