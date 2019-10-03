import actionTypes from './actionTypes';

let nextTodoId = 0;


export const addEditTodo = (isEdit) => {
	return {
		type: actionTypes.addEditTodo,
		payload: {
			isEdit: false
		}
	};
};


export const addTodo = name => {
	return {
		type: actionTypes.addTodo,
		payload: {
			id: nextTodoId++,
			name
		}
	};
};

export const removeTodoById = id => {
	return {
		type: actionTypes.removeTodoById,
		payload: { id }
	};
};

export const removeBantchTodo = (id) => {
	return {
		type: actionTypes.removeBantchTodo,
		payload: {
			id: id + ','
		},
	};
};

// 開始抓取後端資料, 並設定isFetchingTodoList為true來呈現載入中狀態
export const beginFetchTodoList = () => {
	console.log('beginFetchTodoList.......')
	return {
		type: actionTypes.beginFetchTodoList,
		payload: { isFetchingTodoList: true }
	};
};

// 後端抓取資料結束, 並設定isFetchingTodoList: false來取消載入中狀態
// 若有任何錯誤, 帶上錯誤內容(參數錯誤, 網路錯誤, 錯誤代碼, 格式錯誤))
export const finishFetchTodoList = error => {
	console.log('error', error);
	return {
		type: actionTypes.finishFetchTodoList,
		payload: {
			isFetchingTodoList: false,
			error
		}
	};
};

// 成功接收資料
export const recvFetchTodoListResult = todos => {
	console.log('recvFetchTodoListResult....');
	console.log('success todos', todos);
	return {
		type: actionTypes.recvFetchTodoListResult,
		payload: {
			todos
		}
	};
};

// 1. 開始呼叫後端資料API
export const fetchTodosFromServer = () => {
	// 回傳函式，使redux-thunk middleware可以處理
	return (dispatch, getState) => {
		// 1-1 通知使用者應用程式正在擷取後端資料，呈現載入中狀態
		// 這邊直接呼叫寫好的同步action creator建立action
		// 非同步Action從這邊開始逐一拆解成同步Action
		dispatch(beginFetchTodoList());

		// 1-2 驗證參數
		// if (!page) page = 1;

		// 1-3 組裝呼叫後端資料API所需參數呼叫，fetch函式抓取後端資料
		const API_URL = 'http://localhost:8080/api/v1/users/';


		// 查詢全部
		const option = {
			method: 'get',
		}

		const data = {
			name: 'eric chen',
			money: '500',
			description: '2',
		}

		// 新增一筆
		const postOption = {
			// mode: 'cors',
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			},
		}

		const data2 = {
			id: '8',
			name: 'eric chen',
			money: '599',
			description: '199',
		}

		// 更新一筆
		const putOption = {
			method: 'PUT',
			body: JSON.stringify(data2),
			headers: {
				'Content-Type': 'application/json'
			},
		}

		// 刪除一筆
		const deleteOption = {
			method: 'DELETE',
		}
		//
		// console.log('API_URL',putOption);
		fetch(API_URL, option)
			.then(response => {
				console.log('response', response);
				if (response.ok !== true) {
					switch (response.status) {
						case 401:
							return dispatch(finishFetchTodoList(401));
						case 404:
							return dispatch(finishFetchTodoList(404));
						case 500:
							return dispatch(finishFetchTodoList(500));
						default:
							return alert(response.status);
					}
				} else {
					response.json().then(todos => {
						dispatch(recvFetchTodoListResult(todos));
						dispatch(finishFetchTodoList(200));
						console.log('todos', todos);
					});
				}
			})
			.catch(error => {
				console.log('error', error);
				// 2-1 網路問題無法呼叫，通知使用者，並取消載入狀態
				dispatch(finishFetchTodoList(error));
			});
	};
};


// 1. 單筆開始呼叫後端資料API
export const fetchTodosOneFromServer = (id) => {
	console.log('2.............', id)

	return (dispatch, getState) => {
		dispatch(beginFetchTodoList());

		if (!id) {
			id = '';
		}

		const API_URL = 'http://localhost:8080/api/v1/users/' + id;
		console.log('3..................', API_URL)

		// 查詢
		const option = {
			method: 'get',
		}

		fetch(API_URL, option)
			.then(response => {
				console.log('response', response);
				if (response.ok !== true) {
					switch (response.status) {
						case 401:
							return dispatch(finishFetchTodoList(401));
						case 404:
							return dispatch(finishFetchTodoList(404));
						case 500:
							return dispatch(finishFetchTodoList(500));
						default:
							return alert(response.status);
					}
				} else {
					response.json().then(todos => {
						dispatch(recvFetchTodoListResult(todos));
						dispatch(finishFetchTodoList(200));
						console.log('todos2........', todos);
					});
				}
			})
			.catch(error => {
				console.log('error', error);
				// 2-1 網路問題無法呼叫，通知使用者，並取消載入狀態
				dispatch(finishFetchTodoList(error));
			});
	};
};

// 1. Submit 多筆
export const fetchTodosSubmitServer = (todos) => {
	const NewTodos: any = [];

	todos.map((to) => {
		if (to.inAdd) {
			delete to.id;
			delete to.inAdd;
			delete to.inEdit;
			NewTodos.push(to);
		} else if (to.inEdit) {
			delete to.inEdit;
			delete to.inAdd;
			NewTodos.push(to);
		}
	})

	console.log('2 Submit NewTodosTodos.............', NewTodos)

	return (dispatch, getState) => {
		console.log('3 Submit.............')
		dispatch(beginFetchTodoList());
		const API_URL = 'http://localhost:8080/api/v1/users/';

		const data2 = {
			id: '8',
			name: 'eric chen',
			money: '599',
			description: '199',
		}
		// 新增
		const postOption = {
			// mode: 'cors',
			method: 'POST',
			body: JSON.stringify(todos),
			headers: {
				'Content-Type': 'application/json'
			},
		}

		console.log('4 Submit.............', postOption.body)
		fetch(API_URL, postOption)
			.then(response => {
				console.log('Submit response', response);
				if (response.ok !== true) {
					console.log('Submit Bad insert........', response.status);
					switch (response.status) {
						case 401:
							return dispatch(finishFetchTodoList(401));
						case 404:
							return dispatch(finishFetchTodoList(404));
						case 500:
							return dispatch(finishFetchTodoList(500));
						default:
							return alert(response.status);
					}
				} else {
					console.log('Submit success insert........', todos);
				}
			})
			.catch(error => {
				console.log('Submit error', error);
				// 2-1 網路問題無法呼叫，通知使用者，並取消載入狀態
				dispatch(finishFetchTodoList(error));
			});
	};
};

// 2.submit多筆 刪除
export const fetchTodosDeleteSubmitServer = (id) => {
	console.log('2 Delete id.............', id)
	return (dispatch, getState) => {
		dispatch(beginFetchTodoList());
		const API_URL = 'http://localhost:8080/api/v1/users/' + id;

		const data2 = {
			id: '8',
			name: 'eric chen',
			money: '599',
			description: '199',
		}
		// 新增
		const deleteOption = {
			method: 'DELETE',
		}

		fetch(API_URL, deleteOption)
			.then(response => {
				console.log('Submit response', response);
				if (response.ok !== true) {
					console.log('Submit Bad insert........', response.status);
					switch (response.status) {
						case 401:
							return dispatch(finishFetchTodoList(401));
						case 404:
							return dispatch(finishFetchTodoList(404));
						case 500:
							return dispatch(finishFetchTodoList(500));
						default:
							return alert(response.status);
					}
				} else {
					console.log('Submit success delete........', id);
				}
			})
			.catch(error => {
				console.log('Submit error', error);
				// 2-1 網路問題無法呼叫，通知使用者，並取消載入狀態
				dispatch(finishFetchTodoList(error));
			});
	};
};

// 3. Submit 多筆新增/編輯
export const fetchTodosAddEditSubmitServer = (todos) => {
	// const NewTodos: any = [];

	// todos.map((to) => {
	// 	if (to.inAdd) {
	// 		delete to.id;
	// 		delete to.inAdd;
	// 		delete to.inEdit;
	// 		NewTodos.push(to);
	// 	} else if (to.inEdit) {
	// 		delete to.inEdit;
	// 		delete to.inAdd;
	// 		NewTodos.push(to);
	// 	}
	// })

	console.log('2 Submit NewTodosTodos.............', todos)

	return (dispatch, getState) => {
		console.log('3 Submit.............')
		dispatch(beginFetchTodoList());
		const API_URL = 'http://localhost:8080/api/v1/users/';

		// const data2 = {
		// 	id: '8',
		// 	name: 'eric chen',
		// 	money: '599',
		// 	description: '199',
		// }

		// 新增
		const postOption = {
			// mode: 'cors',
			method: 'POST',
			body: JSON.stringify(todos),
			headers: {
				'Content-Type': 'application/json'
			},
		}

		console.log('4 Submit.............', postOption.body)
		fetch(API_URL, postOption)
			.then(response => {
				console.log('Submit response', response);
				if (response.ok !== true) {
					console.log('Submit Bad insert........', response.status);
					switch (response.status) {
						case 401:
							return dispatch(finishFetchTodoList(401));
						case 404:
							return dispatch(finishFetchTodoList(404));
						case 500:
							return dispatch(finishFetchTodoList(500));
						default:
							return alert(response.status);
					}
				} else {
					console.log('Submit success insert........', todos);
				}
			})
			.catch(error => {
				console.log('Submit error', error);
				// 2-1 網路問題無法呼叫，通知使用者，並取消載入狀態
				dispatch(finishFetchTodoList(error));
			});
	};
};

