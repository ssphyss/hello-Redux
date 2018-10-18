import React, { Component } from 'react';
import { Button, Input, List } from 'antd';
import 'antd/dist/antd.css';

const data = [
	'Racing car sprays burning fuel into crowd.',
	'Japanese princess to wed commoner.',
	'Australian walks 100km after outback crash.',
	'Man charged over missing wedding girl.',
	'Los Angeles battles huge wildfires.',
];

class TodoListAntd extends Component {
	render() {
		return (
			<div style={{margin: '30px'}}>
				<div>
					<Input placeholder='請輸入' style={{width: '300px', marginRight: '10px'}}/>
					<Button type='primary'>提交</Button>
				</div>
				<List
					style={{marginTop: '30px', width: '300px'}}
					bordered
					dataSource={data}
					renderItem={item => (<List.Item>{item}</List.Item>)}
				/>
			</div>
		);
	}
}

export default TodoListAntd;
