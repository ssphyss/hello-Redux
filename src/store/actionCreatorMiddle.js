import axios from 'axios';
import {initListAction} from './actionCreator';

export const getTodoList = () => {
    return (dispatch) => {
        console.log('=====生命週期 (掛載後) componentDidMount=====')
		axios.get('https://easy-mock.com/mock/5bc846bd4ff7d608864c06b0/jianshuApi/todolistAntd')
		.then((res)=>{
			console.log('Ajax輸出：',res.data);
            const data = res.data;
            const action = initListAction(data);
            dispatch(action);
		})
		.catch(()=>{alert('err')})
    }
}

