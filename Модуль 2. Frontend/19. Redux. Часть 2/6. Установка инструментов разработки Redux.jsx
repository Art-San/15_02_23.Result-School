https://github.com/zalmoxisus/redux-devtools-extension

// 1.1 Basic store

For a basic Redux store simply add:

 const store = createStore(
   reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );