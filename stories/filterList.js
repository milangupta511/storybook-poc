import React from 'react';

import { storiesOf } from '@storybook/react';
import FilterList from '../src/containers/filter_list';
import {somePending} from './constants';

storiesOf('Filter tasks', module)
    .add('No tasks', ()=> <FilterList toDoList={[]} visibilityFilter={0} />)
    .add('All tab selected ', ()=> <FilterList toDoList={somePending} visibilityFilter={0} />)
    .add('Pending tab selected ', ()=> <FilterList toDoList={somePending} visibilityFilter={1} />)
    .add('Completed tab selected ', ()=> <FilterList toDoList={somePending} visibilityFilter={2} />)
