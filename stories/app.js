import React from 'react';

import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import configureStore from '../src/configureStore';

import App from '../src/components/app';
const store = configureStore();

storiesOf("App", module)
    .addDecorator((getStory) =>(<Provider store={store} >{getStory()}</Provider>))
    .add("Filter List", () => <App />)
