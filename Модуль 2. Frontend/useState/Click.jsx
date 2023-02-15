import React, { useState } from 'react'
import CardWrapper from '../../common/Card'
import Divider from '../../common/Divider'
import SmallTitle from '../../common/typografy/SmallTitle'

const Click = () => {
    const [count, setCount] = useState(20)

    const onClick = () => {
        setCount((prev) => prev - 1)
        setCount(prev => prev - 1)
    }
    const onClick1 = () => {
        setCount(count + 1)
    }
    return (
        <CardWrapper>
            <SmallTitle>При нажатие минус 2 или плюс 1</SmallTitle>
            <p>
               Вроде работае
            </p>
            <Divider/>
            <div>
                <h1>+</h1>
                <h1 onClick={onClick1}>{count}</h1>
            </div>
            <div>
                <h1>-</h1>
                <h1 onClick={onClick}>{count}</h1>
            </div>
        </CardWrapper>
    )
}

export default Click
