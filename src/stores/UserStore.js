import {types, flow, applySnapshot, destroy} from 'mobx-state-tree';
import {UserModel} from 'models/User';

const UserStore = types
  .model('users', {
    users: types.array(UserModel),
  })

  .actions(self => ({
    // afterCreate 는 해당 모델 인스턴스가 생성되고 전체 객체가 셋팅될 때 마다 호출된다.
    afterCreate() {
      self.load();
    },
    load: flow(function*() {
      try {
        const response = yield fetch(
          'https://jsonplaceholder.typicode.com/users/',
        );
        const data = yield response.json();
        console.log('가져온 데이터', data);
        applySnapshot(self.users, data);
      } catch (e) {
        console.log('Error', e);
      }
    }),
    deleteUser(user) {
      destroy(user);
    },
  }))

  .create({
    users: [], // 초기 값(빈 배열)
  });

export default UserStore;
