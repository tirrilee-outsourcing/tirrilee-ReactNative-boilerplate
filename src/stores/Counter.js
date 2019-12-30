import {observable, action} from 'mobx';

class Counter {
  @observable num = 0;

  @action increase() {
    this.num += 1;
  }
  @action decrease() {
    this.num -= 1;
  }
}

export default new Counter();
