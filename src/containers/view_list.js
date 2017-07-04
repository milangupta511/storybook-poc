import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DataTable,TableHeader,Checkbox} from 'react-mdl';
import EditItem from '../components/edit_item';
import DeleteItem from '../components/delete_item'
import EditItemForm from '../components/edit_item_form'
import {toggleCompleteToDo,editToDo,editItemMode, deleteToDo} from '../actions/index'
class ViewList extends Component{
	
	toggleComplete = (id) => {
		this.props.toggleCompleteToDo(id);
	}
	filterList = (list) => {
        return (activeTab) => {
            switch(activeTab){
                case 0:
                    return list
                case 1:
                    return list.filter((item) => !item.isCompleted)
                case 2:
                    return list.filter((item) => item.isCompleted)
            }
            return []
        }
    }
	renderRows = (filterArr) => {
		return filterArr.map((item)=>{
			let {isCompleted,id,term,isEditMode} = item;
			let {editToDo, editItemMode, deleteToDo} = this.props
			if(isEditMode){
				return {
					id:id,
					selectable:<Checkbox checked={isCompleted} onChange={() => this.toggleComplete(id)} ripple/>,
					task: <EditItemForm term={term} id={id} editToDo={editToDo}/>,
					edit:'',
					delete:''
				}	
			}
			return {
					id:id,
					selectable:<Checkbox type="checkbox" checked={isCompleted} onChange={() => this.toggleComplete(id)} ripple/>,
					task:<span className={isCompleted?"green":"red"}>{term}</span>,
					edit:<EditItem id={id} editItemMode={editItemMode}/>,
					delete: <DeleteItem id={id} deleteToDo = {deleteToDo} />
				}
		})
	}
	render(){
		let {toDoList, visibilityFilter} = this.props;
		let filterArr = this.filterList(toDoList)(visibilityFilter)

		return (
			<DataTable
			    shadow={0}
			    rowKeyColumn="id"
			    rows={this.renderRows(filterArr)}
			>
				<TableHeader name="selectable" tooltip="select this">Select</TableHeader>
				<TableHeader name="task" tooltip="The task name">Task</TableHeader>
	    		<TableHeader name="edit" tooltip="Edit the task">Edit Task</TableHeader>
	    		<TableHeader name="delete" tooltip="Delete the task">Delete Task</TableHeader>
			</DataTable>)
	}
}

export default ViewList
