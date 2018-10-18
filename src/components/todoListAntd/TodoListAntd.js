import React, { Component } from 'react';
import store from './../../store';
import { Button, Input, List } from 'antd';
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './../../store/actionTypes';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './../../store/actionCreator';

import 'antd/dist/antd.css';

// const data = [

// ];

class TodoListAntd extends Component {
	constructor(props){
		super(props);
		console.log(store.getState());
		this.state = store.getState();
		console.log(this.state);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		// this.handleItemDelete = this.handleItemDelete.bind(this);

		store.subscribe(this.handleStoreChange);
	}
	render() {
		return (
			<div style={{margin: '30px'}}>
				<div>
					<Input 
						value={this.state.inputValue} 
						placeholder='請輸入' 
						style={{width: '300px', marginRight: '10px'}}
						onChange={this.handleInputChange}
						/>
					<Button onClick={this.handleBtnClick} type='primary'>提交</Button>
				</div>
				<List
					style={{marginTop: '30px', width: '300px'}}
					bordered
					dataSource={this.state.list}
					renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)} >{item}</List.Item>)}
				/>
			</div>
		);
	}

	// handleInputChange(e){
	// 	const action = {
			// type: CHANGE_INPUT_VALUE,
	// 		value: e.target.value
	// 	}
	// 	store.dispatch(action);
	// }

	handleInputChange(e){
		const action = getInputChangeAction(e.target.value);
		store.dispatch(action);
	}

	handleStoreChange(){
		this.setState(store.getState());
	}

	// handleBtnClick(){
	// 	const action = {
	// 		type: ADD_TODO_ITEM,
	// 	}
	// 	store.dispatch(action);
	// }
	handleBtnClick(){
		const action = getAddItemAction();
		store.dispatch(action);
	}

	// handleItemDelete(index){
	// 	// alert(index)
	// 	const action = {
	// 		// type: 'delete_todo_item',
	// 		type: DELETE_TODO_ITEM,
	// 		index
	// 	}
	// 	store.dispatch(action);
	// }
	handleItemDelete(index){
		const action = getDeleteItemAction(index);
		store.dispatch(action);
	}
}

export default TodoListAntd;
