import React from 'react';
import { storiesOf } from '@storybook/react';
import AddList from '../src/containers/add_list';
import { action } from '@storybook/addon-actions';

import { specs, describe, it } from 'storybook-addon-specifications'
import expect from 'expect';
import { mount, shallow } from 'enzyme'

storiesOf('Add List',module)
    .add('Add todos', ()=> <AddList addToDo={action('addToDo')}/> )

    
// storiesOf('Add List', module)
//     .add('Add todos', ()=>{ 
//         const story = <AddList addToDo={action('addToDo')}/>
//          specs(() => describe('default view', () => {
//       it('pressing enter when edited text is blank should do nothing', () => {
//         const wrapper = mount(story);
//         const addToDo = expect.createSpy();
//         wrapper.setProps({addToDo});
//         const input = wrapper.find('.add-todo-form input');
//         input.node.value = '';
//         expect(addToDo).toNotHaveBeenCalled();
//         input.simulate('keydown', {which: 13});
//         expect(addToDo).toNotHaveBeenCalled();
//       });
//          }))
//         return story})