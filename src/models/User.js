import {types} from 'mobx-state-tree';

export const UserModel = types.model('Todo', {
  id: types.number,
  name: types.string,
  email: types.string,
  address: types.model({
    street: types.string,
    suite: types.string,
    city: types.string,
    zipcode: types.string,
  }),
  phone: types.string,
});
