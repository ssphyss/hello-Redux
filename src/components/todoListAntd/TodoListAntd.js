import React, { Component } from 'react';
import store from './../../store';
// import { Button, Input, List } from 'antd';
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './../../store/actionTypes';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './../../store/actionCreator';
import TodoListAntdUI from './TodoListAntdUI';
import 'antd/dist/antd.css';

class TodoListAntd extends Component {
	constructor(props){
		super(props);
		// console.log(store.getState());
		this.state = store.getState();
		// console.log(this.state);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);

		store.subscribe(this.handleStoreChange);
	}
	render() {
		return (
			<TodoListAntdUI
				inputValue={this.state.inputValue} 
				list={this.state.list}
				handleInputChange={this.handleInputChange}
				handleBtnClick={this.handleBtnClick}
				handleItemDelete={this.handleItemDelete}			
			/>			
		);
	}	

	handleInputChange(e){
		const action = getInputChangeAction(e.target.value);
		store.dispatch(action);
	}

	handleStoreChange(){
		this.setState(store.getState());
	}	

	handleBtnClick(){
		const action = getAddItemAction();
		store.dispatch(action);
	}

	handleItemDelete(index){
		const action = getDeleteItemAction(index);
		store.dispatch(action);
	}
}

export default TodoListAntd;
