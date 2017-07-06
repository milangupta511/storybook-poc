import React from 'react';

import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import configureStore from '../src/configureStore';
import {pendingTasks,somePending,allCompleted} from './constants';
import App from '../src/components/app';

const appComp = initialState =>
  ((store) =>
    <Provider store={store}>
      <App />
    </Provider>
  )(configureStore(initialState));

storiesOf("App with custom store", module)
    .add("Pending tasks", () => appComp({toDoList:pendingTasks, visibilityFilter:"SHOW_ALL"}))
    .add("Some pending Tasks", () => appComp({toDoList:somePending, visibilityFilter:"SHOW_ALL"}))
    .add("All Completed", () => appComp({toDoList:allCompleted, visibilityFilter:"SHOW_ALL"}))
