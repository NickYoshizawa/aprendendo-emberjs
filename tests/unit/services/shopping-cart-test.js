import { module, test } from 'qunit';
import { setupTest } from 'ember-js/tests/helpers';

module('Unit | Service | shopping-cart', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:shopping-cart');
    assert.ok(service);
  });

  test('addItem works', function(assert) {
    const service = this.owner.lookup('service:shopping-cart');
    assert.equal(service.itemList.length, 0, 'item list is empty');
    service.addItem({})
    assert.equal(service.itemList.length, 1, 'item list size increase by 1')
  })
});
