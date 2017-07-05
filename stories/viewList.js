import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ViewList from '../src/containers/view_list';
import {pendingTasks,allCompleted,somePending, editMode} from './constants';

import { specs, describe, it } from 'storybook-addon-specifications'
import expect from 'expect';
import { mount, shallow } from 'enzyme'


const viewListComp = (taskList) => <ViewList toDoList={taskList} 
                                             visibilityFilter={0}
                                             toggleCompleteToDo={action("toggleCompleteToDo")}
                                             editToDo={action("editToDo")}
                                             editItemMode={action("editItemMode")}
                                             deleteToDo={action("deleteToDo")}/>
storiesOf('View List', module)
    .add('Some pending tasks', () => viewListComp(pendingTasks))
    .add('some pending and some completed tasks', () => viewListComp(somePending))
    .add('All Completed tasks', () => viewListComp(allCompleted))
    .add('In edit mode', () => viewListComp(editMode))


// storiesOf('View List', module)
//     .add('Some pending tasks', () => {
//         const story = viewListComp(pendingTasks)
//             specs(() => describe('Some pending tasks', () => {
//                 it('should display four items', () => {
//                     expect(mount(story).find('tbody tr').length).toBe(4);
//                 });
//                 it('should indicate that all are incomplete', () => {
//                     expect(mount(story).find('tbody tr .is-checked').length).toBe(0);
//                 });
//             }));
//        return  story
//     })
//     .add('some pending and some completed tasks', () => {
//         const story = viewListComp(pendingTasks)
//             specs(() => describe('Some pending tasks', () => {
//                 it('should display four items', () => {
//                     expect(mount(story).find('tbody tr').length).toBe(4);
//                 });
//                 it('should indicate one task is complete', () => {
//                     expect(mount(story).find('tbody tr .is-checked').length).toBe(1);
//                 });
//             }));
//        return  story
//     })
//     .add('All Completed tasks', () => viewListComp(allCompleted))
//     .add('In edit mode', () => viewListComp(editMode))
