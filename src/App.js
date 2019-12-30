import React, {Component} from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import Counter from 'stores/Counter';
import {observer} from 'mobx-react';

@observer
export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>{Counter.num}</Text>
          <Button onPress={() => Counter.increase()} title="+" />
          <Button onPress={() => Counter.decrease()} title="-" />
        </View>
      </SafeAreaView>
    );
  }
}
