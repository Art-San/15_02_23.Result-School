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


=================Redux tolkit======================================================

  // withour redux
  // const [usersList, setUsersList] = useState([])
  // const [isLoading, setIsLoading] = useState(false)
  // console.log(usersList)
  // const getUsers = async () => {
  //   try {
  //     setIsLoading(true)
  //     const { data } = await $api.get('/users')
  //     setUsersList(data)
  //     setIsLoading(false)
  //   } catch (error) {
  //     setIsLoading(false)
  //     console.error('Ошибка:', error.message)
  //   }
  // }
  // useEffect(() => {
  //   getUsers()
  // }, [])
  //+++++++++++++++++++++++++++++++++++++++++++
  // Vanilla Redux

  const dispatch = useDispatch()
  const { userData: usersList, loading: isLoading } = useSelector(
    getUsersStateSelector
  )

  useEffect(() => {
    dispatch(featchUsersAsync())
  }, [dispatch])