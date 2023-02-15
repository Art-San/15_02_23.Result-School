import React, { useState } from 'react'
import CardWrapper from '../../common/Card'
import Divider from '../../common/Divider'
import SmallTitle from '../../common/typografy/SmallTitle'

const Example4 = () => {
    const [tasks, setTasks] = useState([{ text: 'Тестовая задача #1' }, { text: 'Тестовая задача #2' }])

    const onClickAdd = () => {
        const text = prompt('Текст задачи')
        // tasks.push(text)
        setTasks([...tasks, { text }])
    }

    const onClickEdit = (index) => {
        const textTask = prompt('Новый Текст задачи')
        // ХОРОШИЙ вариант похож на первый плохой
        setTasks(
            tasks.map((obj, i) => {
                if (index === i) {
                    return {
                        ...obj,
                        text: textTask

                    }
                }
                return obj
            }))

        // плохой вариант 2
        // const task = tasks[index]
        // task.text = textTask
        // setTasks([...tasks])

        // не очень хороший вариант 1 лучше 3
        // setTasks(
        //     tasks.map((obj, i) => {
        //         if (index === i) {
        //             obj.text = textTask
        //         }
        //         return obj
        //     }))
    }

    const onClickRemove = (index) => {
        // tasks.splice(index, 1)
        setTasks(tasks.filter((_, i) => i !== index))
    }
    return (
        <CardWrapper>
            <SmallTitle>Добавлять</SmallTitle>
            <p>
                1. Плохой вариант // tasks.push(text) с помощюю push <br/>
                в реакте не желательно мутировать стейт (не возвращыешь новый) <br/>
                с помощью push и других методов (НАДО уточнять) <br/>
                2. Правильно будет [...task, text] к новому масиву старых задачь <br/>
                добавить новую задачу
            </p>
            <Divider/>
            <SmallTitle>Удалить</SmallTitle>
            <p>
                1. Плохой вариант // tasks.splice(index, 1) так же как <br/>
                и выше чтото мутирует но реакт об этом не знает <br/>
                2. Нормальный вариант setTasks(tasks.filter((_, i) =стрелка i !== index))..<br/>
                3. Фильтер возвращает новый массив
            </p>
            <Divider/>
            <SmallTitle>Редактировать</SmallTitle>
            <p>
               1. Два плохих варианта внутри <br/>
            </p>
            <h4><strong>2. Один приемлемый</strong></h4>
            <div>
                <ul>
                    {tasks.map((task, i) => (
                        <li key={i}>
                            {task.text}
                            <button onClick={() => onClickEdit(i)}>Edit</button>
                            <button onClick={() => onClickRemove(i)}>x</button>
                        </li>
                    ))}
                </ul>
                <button onClick={onClickAdd}>Добавить</button>
            </div>
        </CardWrapper>
    )
}

export default Example4
