import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: []
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
	}
 	render() {
		return (
			<div>
				<div>
					<label htmlFor='insertArea'>輸入內容</label>
					<input 
						id='insertArea'
						placeholder='請輸入'
						value={this.state.inputValue}
						onChange={this.handleInputChange}
					/>
					<button onClick={this.handleBtnClick}>提交</button>
				</div>
				<ul>
					{ this.getTodoItem() }
				</ul>
			</div>
		);
	}
  	getTodoItem(){
		return this.state.list.map((item, index) => {
			return (
				// 父組件傳遞屬性跟方法給子組件	
				<TodoItem
					key={index}
					content={item}
					index={index}
					deleteItem={this.handleItemDelete}
				/>							
			)							
		})
	}
	// 輸入框
	handleInputChange(e){
		// console.log(e.target)       // 獲取DOM節點
		// console.log(e.target.value)
		const value = e.target.value;
		this.setState(() => ({			
			inputValue: value
		}))
	}
	// 提交
	handleBtnClick(){
		this.setState((prevState) => ({
			list : [...prevState.list, prevState.inputValue],
			inputValue: ''
		}))
	}
}

export default TodoList;
