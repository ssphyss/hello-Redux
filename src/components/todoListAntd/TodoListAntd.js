import React, { Component } from 'react';
import store from './../../store';
// import { Button, Input, List } from 'antd';
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './../../store/actionTypes';
import { /*initListAction,*/ getInputChangeAction, getAddItemAction, getDeleteItemAction } from './../../store/actionCreator';
import { getTodoList } from './../../store/actionCreator';
import TodoListAntdUI from './TodoListAntdUI';
// import 'antd/dist/antd.css';
// import axios from 'axios';

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
	componentDidMount(){
		const action = getTodoList();
		store.dispatch(action);
		console.log('action：', action);
		// =======以下因為引入中間件,把函數執行拿到action======
		// console.log('=====生命週期 (掛載後) componentDidMount=====')
		// axios.get('https://easy-mock.com/mock/5bc846bd4ff7d608864c06b0/jianshuApi/todolistAntd')
		// .then((res)=>{
		// 	console.log('Ajax輸出：',res.data);
		// 	// this.setState(() => ({
		// 	// 	list: [...res.data.data]
		// 	// }))
		// 	const data = res.data;
		// 	const action = initListAction(data);
		// 	// console.log('action：',action);
		// 	store.dispatch(action);
		// })
		// .catch(()=>{alert('err')})
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
