import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styled from 'styled-components/native';
import Counter from 'stores/Counter';
import UserStore from 'stores/UserStore';
import {observer} from 'mobx-react';

@observer
export default class App extends Component {
  componentDidMount() {
    UserStore.getData();
  }

  render() {
    const {users} = UserStore;
    console.log('리스트', users);
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
            {users.slice(0, 20).map(user => (
              <TodoItem key={user.id}>
                <Text>{user.name}</Text>
                <Text>{user.email}</Text>
                <Text>{user.address.city}</Text>
              </TodoItem>
            ))}
          </TodoView>
        </Wrapper>
      </SafeAreaView>
    );
  }
}

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

  background-color: lightblue;
`;
