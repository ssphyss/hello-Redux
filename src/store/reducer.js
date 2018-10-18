const defaultState = {
    inputValue: '',
    list: []
};

// reducer 可以接受state,不能修改state
export default (state = defaultState, action) => {
    // 變動
    if (action.type === 'change_Input_Value') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState; 
    }
    // 增加
    if (action.type === 'add_todo_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        console.log(newState);  
        return newState;      
    }
    // 刪除
    if (action.type === 'delete_todo_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;      
    }

    console.log('Reducer打印出：' , state, action)
    return state;
}