import React from 'react';
import {SafeAreaView, Platform} from 'react-native';

// containers
import HomeContainer from 'containers/Home';

const IosRender = () => (
  <SafeAreaView>
    <HomeContainer />
  </SafeAreaView>
);

const AndroidRender = () => <HomeContainer />;

class Home extends React.Component {
  render() {
    const {navigation} = this.props;

    return Platform.OS === 'ios' ? IosRender() : AndroidRender();
  }
}

export default Home;
