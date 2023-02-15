// Обрати внимание!

// В task.js также необходимо изменить содежимое reducer remove. 
// На данный момент, выражение целиком переназначает store, 
// так как у нас return. Нам же нужно обновить только entities. 
// Поэтому нужно изменить его на следующий код:

// remove(state, action) {
//     state.entities = state.entities.filter(
//         (el) => el.id !== action.payload.id
//     );
// }