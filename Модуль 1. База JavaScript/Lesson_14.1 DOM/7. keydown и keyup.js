// keydown и keyup

document.addEventListener('keydown', (event) => {
    // console.log(event);
    const { key } = event;
    console.log('keydown', key);
    // const taskItemToDelete = document.querySelector(`[data-task-id='${key}']`);
    // if (taskItemToDelete) {
    //     const deleteConfirmed = confirm(`вы действительно хотите удалить`);
    //     if (deleteConfirmed) {
    //         taskItemToDelete.remove();
    //     }
    // }
});


// document.addEventListener('keyup', (event) => {
//     const { key } = event;
//     console.log('keyup', key);
//     const taskItemToDelete = document.querySelector(`[data-task-id='${key}']`);
//     if (taskItemToDelete) {
//         taskItemToDelete.remove();
//     }
// });