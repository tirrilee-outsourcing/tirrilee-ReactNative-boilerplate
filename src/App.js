import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Text, View, SafeAreaView, Alert} from 'react-native';
import styled from 'styled-components/native';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

import Counter from 'stores/Counter';
import UserStore from 'stores/UserStore';

const GET_BOOKS = gql`
  {
    books {
      title
      author
    }
  }
`;

const Home = () => {
  const {loading, error, data} = useQuery(GET_BOOKS);

  let template = ``;
  if (loading) {
    template = (
      <SafeAreaView>
        <Text>`로딩중... ${loading}`</Text>
      </SafeAreaView>
    );
  }
  if (error) {
    template = (
      <SafeAreaView>
        <Text>`에러발생 : ${error}`</Text>
      </SafeAreaView>
    );
  }
  if (data && data.books) {
    template = data.books.map((item, index) => (
      <SafeAreaView key={index}>
        <Text>
          {item.title} / {item.author}
        </Text>
      </SafeAreaView>
    ));
  }
  return <View>{template}</View>;
};

@observer
export class Home2 extends Component {
  deleteUser = user => {
    Alert.alert('유저 삭제', `${user.name}해당 유저를 삭제하시겠습니까?`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => UserStore.deleteUser(user)},
    ]);
  };

  render() {
    const {users} = UserStore;

    return (
      <SafeAreaView>
        <Wrapper>
          <CustomView>
            <CountBox>
              <MyText>{Counter.num}</MyText>
            </CountBox>
            <FuncBox>
              <MyButton onPress={() => Counter.increase()} title="증가" />
              <MyButton onPress={() => Counter.decrease()} title="감소" />
            </FuncBox>
          </CustomView>
          <TodoView>
            {users.map(user => (
              <TodoItem key={user.id}>
                <Text onPress={() => this.deleteUser(user)}>
                  이름: {user.name}
                </Text>
              </TodoItem>
            ))}
          </TodoView>
        </Wrapper>
      </SafeAreaView>
    );
  }
}

const RenderHome = () => (
  <SafeAreaView>
    <Home />
    <Home2 />
  </SafeAreaView>
);

export default RenderHome;

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  background-color: lightgray;
`;

const TodoView = styled.View`
  width: 100%;
  height: 80%;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CustomView = styled.View`
  width: 100%;
  height: 10%;
  flex-direction: row;

  border-bottom-width: 1px;
  border-bottom-color: black;
`;

const MyText = styled.Text`
  font-size: 35px;
`;

const CountBox = styled.View`
  width: 50%;
  justify-content: center;
  align-items: center;
`;

const FuncBox = styled.View`
  width: 50%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const MyButton = styled.Button`
  font-size: 35px;
`;

const TodoItem = styled.View`
  width: 33%;
  height: 10%;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
`;
