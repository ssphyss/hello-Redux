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
	}
	render() {
		return (
			<div style={{margin: '30px'}}>
				<div>
					<Input value={this.state.inputValue} placeholder='請輸入' style={{width: '300px', marginRight: '10px'}}/>
					<Button type='primary'>提交</Button>
				</div>
				<List
					style={{marginTop: '30px', width: '300px'}}
					bordered
					dataSource={this.state.list}
					renderItem={item => (<List.Item>{item}</List.Item>)}
				/>
			</div>
		);
	}
}

export default TodoListAntd;
