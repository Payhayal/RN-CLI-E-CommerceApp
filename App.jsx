import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/router/stackNavigator';
import Provider from './src/context/provider';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

const App = () => {
  return (
    <Provider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
