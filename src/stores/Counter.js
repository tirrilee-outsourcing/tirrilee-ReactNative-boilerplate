import {types} from 'mobx-state-tree';

const CounterStore = types
  .model('counter', {
    num: types.number,
  })

  .actions(self => ({
    increase: () => {
      self.num++;
    },
    decrease: () => {
      self.num--;
    },
  }))

  .create({
    num: 0, // 초기 값
  });

export default CounterStore;
