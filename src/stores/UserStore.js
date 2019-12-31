import {types, flow} from 'mobx-state-tree';
import {UserModel} from 'models/User';

const UserStore = types
  .model('users', {
    users: types.array(UserModel),
  })

  .actions(self => ({
    getData: flow(function*() {
      try {
        const response = yield fetch(
          'https://jsonplaceholder.typicode.com/users/',
        );
        const data = yield response.json();
        console.log('가져온 데이터', data);
        self.users = data;
      } catch (e) {
        console.log('Error', e);
      }
    }),
  }))

  .create({
    users: [], // 초기 값(빈 배열)
  });

export default UserStore;
