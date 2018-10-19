import React, { Component } from 'react';
import { Button, Input, List } from 'antd';
import 'antd/dist/antd.css';

class TodoListAntdUI extends Component {
	render() {
		console.log('this.props.inputValue',this.props.inputValue)
		return (
			<div style={{margin: '30px'}}>
				<div>
					<Input 
						value={this.props.inputValue} 
						placeholder='請輸入' 
						style={{width: '300px', marginRight: '10px'}}
						onChange={this.props.handleInputChange}
						/>
					<Button onClick={this.props.handleBtnClick} type='primary'>提交</Button>
				</div>
				<List
					style={{marginTop: '30px', width: '300px'}}
					bordered
					dataSource={this.props.list}
					renderItem={(item, index) => (<List.Item onClick={ (index) => {this.props.handleItemDelete(index)}} >{item}</List.Item>)}
				/>
			</div>
		);
	}	
}

export default TodoListAntdUI;
