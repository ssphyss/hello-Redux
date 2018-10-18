import React, { Component } from 'react';
import store from './../../store';
import { Button, Input, List } from 'antd';
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

	handleInputChange(e){
		// console.log(e.target)
		// console.log(e.target.value)
		const action = {
			type: 'change_Input_Value',
			value: e.target.value
		}
		store.dispatch(action);
		// this.setState(() => {
		// 	this.state.inputValue = this.state.inputValue
		// })
	}

	handleStoreChange(){
		// console.log('store.change')
		this.setState(store.getState());
	}

	handleBtnClick(){
		const action = {
			type: 'add_todo_item',
		}
		store.dispatch(action);
	}

	handleItemDelete(index){
		// alert(index)
		const action = {
			type: 'delete_todo_item',
			index
		}
		store.dispatch(action);
	}
}

export default TodoListAntd;
