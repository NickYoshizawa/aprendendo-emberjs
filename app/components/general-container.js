import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class GeneralContainer extends Component {
  @service('shopping-cart') cart;
  get itemCount() {
    return this.cart.itemList.reduce((total, item) => {
      return total += item.count;
    }, 0);
  }
}
