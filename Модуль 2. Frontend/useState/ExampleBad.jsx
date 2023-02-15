import React, { useState, useEffect } from 'react'
import CardWrapper from '../../common/Card'
import Divider from '../../common/Divider'
import SmallTitle from '../../common/typografy/SmallTitle'
// https://jsonplaceholder.typicode.com/users

function ExampleBad() {
    const [users, setUsers] = useState()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((json) => setUsers(json))
    }, [])
    // if (!users) {
    //     return <h1>Loading...</h1>
    // }
    return (
        <CardWrapper>
            <SmallTitle>Пример того как не надо делать</SmallTitle>
            <h5>
                useState() не оставлять без начального значения <br/>
                useState(Array) или другой тип данных который ожидаем <br/>
                если не знаеш что ждать то сделай проверку <br/>
                {''}
                <code>
                    if (!users) {
                        <h6>Loading...</h6>
                    }
                </code>
                А если не хочешь указывать данные или писать проверку <br/>
                Можно поставить вопрос users?.map(() =стрелка фигурные скобки)
            </h5>
            <Divider />
            <ul>
                {
                    users?.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </CardWrapper>
    )
}

export default ExampleBad
