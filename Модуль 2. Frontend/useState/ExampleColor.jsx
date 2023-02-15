import React from 'react'
import CardWrapper from '../../common/Card'
import Divider from '../../common/Divider'
import SmallTitle from '../../common/typografy/SmallTitle'

const colors = ['#18C417 Зеленый', '#18C417 Красный', '#0177CF Синий']

const ExampleColor = () => {
    // const [colors] = useState(['#18C417 Зеленый', '#18C417 Красный', '#0177CF Синий'])
    return (
        <CardWrapper>
            <SmallTitle>Если данные не меняются</SmallTitle>
            <p>
                или не рендарется, То не зачем их хранить useState, можешь хранить <br/>
                в перемкнной хоть за пределами компоннета
            </p>
            <ul>
                {colors.map((color) => (
                    <li key={color}>{color}</li>
                ))}
            </ul>
            <Divider/>
        </CardWrapper>
    )
}

export default ExampleColor
