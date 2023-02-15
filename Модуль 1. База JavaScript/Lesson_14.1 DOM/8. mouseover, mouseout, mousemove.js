


// -----------mouseover

// Событие mouseover запускается, Element когда указывающее устройство 
// (например, мышь или трекпад) используется для перемещения курсора на 
// элемент или один из его дочерних элементов.

const createTooltip = (text) => {
    const tooltip = document.createElement('span');
    tooltip.textContent = text;
    tooltip.className = 'tooltip';

    return tooltip;
}


//         mouseover
//-------------------- includes()
// Метод includes() определяет, содержит ли массив определённый элемент,
//  возвращая в зависимости от этого true или false.

//  ----------------   closest()
// Метод Element.closest() возвращает ближайший родительский элемент (или сам элемент), 
// который соответствует заданному CSS-селектору или null, если таковых элементов вообще нет.

// ================    append()
// Метод Element.append() вставляет узлы или строки с текстом в конец Element. 
// Строки с текстом вставляются как текстовое содержимое.

document.addEventListener('mouseover', (event) => {
    const { target } = event;
    // console.log(target)
    const isOverDeleteButton = target.className.includes('task-item__delete-button');
    if (isOverDeleteButton) {
        console.log('success');
        const taskItemHTML = target.closest('.task-item');
        const taskId = taskItemHTML?.dataset.taskId;
        if (taskId) {
            const tooltipHTML = createTooltip(`Удалить задачу под номером ${taskId}`);
            target.append(tooltipHTML);
        }
        
    }
});

// mouseout

// -------------  remove()
// Метод Element.remove() 
// удаляет элемент из DOM-дерева, в котором он находится.

document.addEventListener('mouseout', (event) => {
    const { target } = event;
    const isOutFromDeleteButton = target.className.includes('task-item__delete-button');
    if (isOutFromDeleteButton) {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }
});

// mousemove

document.addEventListener('mousemove', (event) => {
    console.log(event);
});