import React from 'react';
import { Provider } from 'react-redux'

import Counter from './src/Counter'
import { Store } from './src/Store'

export default function App() {
  return (
    <Provider store={Store}>
      <Counter/>
    </Provider>
  )
}
