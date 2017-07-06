import React, { Component } from 'react';
import AddList from '../containers/add_list';
import FilterList from '../containers/filter_list';
import ViewList from '../containers/view_list';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {filterToDo, visibilityToDoFilter, addToDo, toggleCompleteToDo ,editToDo,editItemMode, deleteToDo} from '../actions/index';

export default class App extends Component {
  render() {
    return (
    	<div className="demo-card-wide mdl-card mdl-shadow--2dp">
			<ConnectedAddList />
			<ConnectedFilterList />
            <ConnectedViewList />
		</div>
    );
  }
}
const mapStateToProps = ({toDoList, visibilityFilter}) => {
    let filterToId = {
        SHOW_ALL:0,
        SHOW_PENDING:1,
        SHOW_COMPLETED:2
    } 
	return {toDoList, visibilityFilter:filterToId[visibilityFilter] }
}
const ConnectedAddList = connect(null, {addToDo})(AddList)

const ConnectedFilterList = connect(mapStateToProps, {visibilityToDoFilter})(FilterList)

const ConnectedViewList = connect(mapStateToProps, {toggleCompleteToDo ,editToDo,editItemMode, deleteToDo})(ViewList);

