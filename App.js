import * as React from 'react';
import { View, Text } from 'react-native';
import {ContextProvider} from './src/context/Context';
import Navigation from './src/navigation/stackNavigation';

function App() {
  return (
    <ContextProvider>
      <Navigation />
    </ContextProvider>
  );
}

export default App;
