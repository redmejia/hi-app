/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Main } from './src/Main/Main';
import { ThemeContextProvider } from './src/Context/ThemeContex';


function App(): JSX.Element {

  return (
    <ThemeContextProvider>
      <Main />
    </ThemeContextProvider>
  );
}

export default App;
