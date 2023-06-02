// Redux
1. Создаем папку "store"
2. в "store" создаем фаил "rootReducer.js"
3. затем в "store" две папки 'TodosPage' и 'UsersPage'

4. в "rootReducer.js" создаем "rootReducer" через  "combineReducers" и
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// const { combineReducers, createStore, applyMiddleware } = require("redux");
// import { UsersReducer } from './UsersPage/reducer'
// const rootReducer = combineReducers({
  // usersPage: UsersReducer
// })
// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

5. Затем идем 'index.js' и оборачиваем наше приложение в 'Provider'
// <Provider store={store}>
// <BrowserRouter>
//   <App />
// </BrowserRouter>
// </Provider>

6. в папке UsersPage  создаем "reducer.js"  
const initialState = {
    userData: [],
    loading: false,
    error: null
  }
  
  export const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state
    }
  }
  // функция редусер меняет стейт, а action говорит что имено сделать еще и данные дает

  7. в папке UsersPage  создаем "users-service.js" 
//   import { $api } from '../../api/axios-instance'
//   export const UsersService = {
//     getUsers: () => $api.get('/users')
//   }


  8. в папке store/UsersPage  создаем "actions.js" 
  // export const FETCH_USERS = 'FETCH_USERS'
// export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
// export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE' // это для ошибки

// export const fetchUsers = () => ({ type: FETCH_USERS })
// export const fetchUsersSuccess = (payload) => ({ type: FETCH_USERS_SUCCESS, payload })
// export const fetchUsersFailure = (payload) => ({ type: FETCH_USERS_FAILURE, payload })

// export const featchUsersAsync = () => async (dispatch) => {
//     try {
//       dispatch(fetchUsers())
//       const { data } = await UsersService.getUsers()
//       dispatch(fetchUsersSuccess(data))
//     } catch (error) {
//       console.error(error)
//       dispatch(fetchUsersFailure('Ошибка!'))
//     }
//   }

8. в папке store/UsersPage создаем 'selectors.js'
// export const getUsersStateSelector = (state) => state.usersPage

9. идем entities/UsersPage/UsersPage.jsx 
// const { userData: usersList, loading: isLoading } = useSelector(
//   getUsersStateSelector
// )

// useEffect(() => {
//   dispatch(featchUsersAsync())
// }, [])


// =================Redux tolkit======================================================
1. идем в store/rootReducer.js

// import { configureStore } from '@reduxjs/toolkit'
// const { combineReducers } = require('redux')

// const rootReducer = combineReducers({
  usersPage: UsersSlice.reducer // появилось позже
// })

// export const store = configureStore({
//   reducer: rootReducer
// })

2. идем store/UsersPage/reducer.js 
// import { createSlice } from '@reduxjs/toolkit/dist/createSlice'

// // Init Redux-toolkit
// const initialState = {
//   userData: [],
//   loading: false,
//   error: null
// }

// export const UsersSlice = createSlice({
//   name: 'Users',
//   initialState,
//   reducers: {
//     fetchUsers(state) {
//       state.loading = true
//     },
//     fetchUsersSuccess(state, { payload }) {
//       state.loading = false
//       state.userData = payload
//     },
//     fetchUsersFailure(state, { payload }) {
//       state.loading = false
//       state.error = payload
//     }
//   }
// })

3. идем store/UsersPage/actions.js и занимаемся экшенами
// import { UsersSlice } from './reducer'
// import { UsersService } from './users-service'
// const { fetchUsers, fetchUsersSuccess, fetchUsersFailure } = UsersSlice.actions

// export const featchUsersAsync = () => async (dispatch) => {
//   try {
//     dispatch(fetchUsers())
//     const { data } = await UsersService.getUsers()
//     dispatch(fetchUsersSuccess(data))
//   } catch (error) {
//     console.error(error)
//     dispatch(fetchUsersFailure('Ошибка!'))
//   }
// }
