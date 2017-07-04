import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import configureStore from '../src/configureStore';

import { Button, Welcome } from '@storybook/react/demo';
import { Provider } from 'react-redux';
import 'react-mdl/extra/material.js';
import 'react-mdl/extra/material.css';
import '../src/index.css';

import ViewList from '../src/containers/view_list';
import FilterList from '../src/containers/filter_list';
import AddList from '../src/containers/add_list';
import App from '../src/components/app';
const store = configureStore();

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Todos List', module)
    .add('Some pending tasks', () => <ViewList toDoList={[{id:0, term:"First", isCompleted:false, isEditMode:false},
                                                          {id:1, term:"Second", isCompleted:false, isEditMode:false}]} 
                                               visibilityFilter={0}
                                               toggleCompleteToDo={action("toggleCompleteToDo")}
                                               editToDo={action("editToDo")}
                                               editItemMode={action("editItemMode")}
                                               deleteToDo={action("deleteToDo")}/>)
    .add('some pending and some completed tasks', () => <ViewList toDoList={[{id:1, term:"First", isCompleted:false, isEditMode:false}, {id:2, term:"Second", isCompleted:true, isEditMode:false},{id:3, term:"Second", isCompleted:false, isEditMode:false}]} visibilityFilter={0}/>)
    .add('All Completed tasks', () => <ViewList toDoList={[{id:1, term:"First", isCompleted:true, isEditMode:false}, {id:2, term:"Second", isCompleted:true, isEditMode:false},{id:3, term:"Second", isCompleted:true, isEditMode:false}]} visibilityFilter={0}/>)
    .add('In edit mode', () => <ViewList toDoList={[{id:1, term:"First", isCompleted:false, isEditMode:false}, {id:2, term:"Second", isCompleted:false, isEditMode:true},{id:3, term:"Second", isCompleted:false, isEditMode:false}]} visibilityFilter={0}/>)

storiesOf('Filter tasks', module)
    .add('Show all tasks ', ()=> <FilterList toDoList={[{id:1, term:"First", isCompleted:false, isEditMode:false}, {id:1, term:"Second", isCompleted:false, isEditMode:false}]} visibilityFilter={0} />)
storiesOf('Add new todos', module)
    .add('Add todos', ()=> <AddList addToDo={action('addToDo')}/>)

storiesOf("App", module)
    .addDecorator((getStory) =>(<Provider store={store} >{getStory()}</Provider>))
    .add("Filter List", () => <App />)
