// В течении жизненного цикла приложения иногда возникает
//  необходимость производить тяжелые вычисления. 
//  Если такие вычисления происходят внутри React-компонента, 
//  то они будут происходить при каждом рендере:

// Чтобы избежать повторных вычислений 
// при ререндере компонента, можно воспользоваться мемоизаций. 


// Мемоизация (англ. memoization от англ. memory и optimization) 
// — в программировании сохранение результатов вычисления 
// для предотвращения повторных вычислений. 
// Это один из способов оптимизации, 
// применяемых для увеличения скорости 
// выполнения компьютерных программ. 
// Перед вызовом функции проверяется, 
// вызывалась ли функция ранее:

// 1. Если нет, то функция вызывается, 
  // и результат ее выполнения сохраняется

// 2. Если вызывалась, то используется сохраненный результат


// Хук useMemo() позволяет производить мемоизацию внутри React-компонента. 
// Данный хук возвращает мемоизированное значение. 
// Когда мы им пользуемся, то передаём функцию, 
// которая будет вычислять нужное значение и массив зависимостей, 
// при изменении которых функция будет вызвана заново:


// Вызывается на каждый ререндер
const myParam = useMemo(() => {
    return calcAnyByCount(count); // Вызывается при изменении count
  }, [count]); // count – зависимость, может быть несколько


//   Нужно понимать, что useMemo() вызывается каждый раз при рендере, 
//   так же как и любая другая функция. Отличие лишь в том, 
//   что перед тем как вычислять значение, она проверит, 
//   изменились ли зависимости. Если изменений не было, 
//   она просто вернёт значение, которое было вычислено ранее:


// На данной схеме мы видим пример использования хука useMemo(). 
// Ему передана функция, результат которой зависит от переменной count. 
// При первом рендере будет вызвана функция calcAnyByCount(count), 
// и  хук запомнит результат выполнения этой функции. При повторном рендеринге:

// 1. Если count не изменится, то будет возвращено мемоизированное 
// значение (то, которое мы вычислили ранее)

// 2. Если count измениться, то calcAnyByCount(count) будет вызвана заново, 
// и хук запомнит это новое значение


// Переменная count является зависимостью и передаётся 
// аргументом в функцию calcAnyByCount(). 
// В этом есть суть зависимостей – они должны участвовать в вычислении. 
// Если вам нечего передать в хук как зависимость, 
// то рассмотрите другие возможности оптимизации 
// (например вынесите вычисление за пределы компонента). 
// В некоторых случаях можно сделать вычисление в useState(). 


// Пример оптимизации с useState

// Давайте на примере посмотрим, как работает useMemo(). 
// Для имитации тяжёлых вычислений мы будем использовать функцию:

// Идёт цикл пока i не станет равным n, после вернёт значение i
function myLoop(n) {
    let i = 0;
    do {
        i++;
    } while (i !== n);
    return i;
}

// Чтобы видеть сколько времени она выполняется, 
// добавим вывод времени выполнения в консоли 
// с помощью метода console.time() и метода console.timeEnd(). 


function myLoop(n) {
    console.time("Выполнялось: ");
    let i = 0;
    do {
        i++;
    } while (i !== n);
    console.timeEnd("Выполнялось: ");
    return i;
}

// Методом “научного тыка” можно увидеть, что со значением 
// n равным 1000000000 время на выполнение функции равно ~500 ms, 
// что уже заметно глазу (точное время зависит от вашего ПК и среды исполнения). 

// Воспользуемся данной функцией в компоненте (ссылка на готовый пример):


import React, { useMemo, useState } from "react";

function myLoop(n) {
    console.time("Выполнялось: ");
    let i = 0;
    do {
        i++;
    } while (i !== n);
    console.timeEnd("Выполнялось: ");
    return i;
}

export const ExampleUseMemoFeb = () => {
    // В JS большие числа для удобства можно разделять с помощью "_" 
    const [value, setValue] = useState(1_000_000_000);

    const computedResult = useMemo(() => {
        return myLoop(value);
    }, [value]);

    return (
        <div>
            <div>
                Вычисленный результат: <b>{computedResult}</b>
                <p>
                    value: <b>{value}</b>
                </p>
            </div>
            <div>
                <button onClick={() => setValue((v) => v + 1000)}>
                    Increment
                </button>
                <button onClick={() => setValue((v) => v - 1000)}>
                    dDecrement
                </button>
            </div>
            <hr />
        </div>
    );
};

// При первом рендере компонента будет вызван 
// хук useMemo() и внутри него функция myLoop() 
// с аргументом value равным 1_000_000_000. 
// Значение будет вычислено и запишется в память. 
// Когда мы будем нажимать на кнопки “Increment” или “Decrement”, 
// то значение value будет меняться, функция myLoop() 
// будет вызываться заново с новым аргументом. 
// Мы будем видеть значительную задержку в отрисовке интерфейса.

// Однако изменение других состояний не будет влиять на вычисление useMemo(). 
// Для того чтобы это проверить, добавим ещё одно состояние:

import React, { useMemo, useState } from "react";

function myLoop(n) {
    console.time("Выполнялось: ");
    let i = 0;
    do {
        i++;
    } while (i !== n);
    console.timeEnd("Выполнялось: ");
    return i;
}

export const ExampleUseMemoFeb = () => {
    const [value, setValue] = useState(1_000_000_000);
    const [anotherState, setAnotherState] = useState(1);

    const result = useMemo(() => {
        return myLoop(value);
    }, [value]);

    return (
        <div>
            <div>
                Результат: <b>{result}</b>
                <p>
                    value: <b>{value}</b>
                </p>
            </div>
            <div>
                <button onClick={() => setValue((v) => v + 1000)}>
                    Increment
                </button>
                <button onClick={() => setValue((v) => v - 1000)}>
                    Decrement
                </button>
            </div>
            <div>
                {anotherState}
                <p>
                    <button onClick={() => setAnotherState((p) => p + 1)}>
                        Обновить
                    </button>
                </p>
            </div>
            <hr />
        </div>
    );
};

// Нажимая на кнопку “Обновить”, мы вызываем изменение состояния anotherState, 
// но у нас нет никакой задержки отрисовки интерфейса. Это происходит из-за того, 
// что тяжелое вычисление не происходит еще раз в хуке useMemo(), 
// так как его зависимости не изменились (в нашем случае value). 
// При новом рендере хук возвращает мемоизированное значение. 


// На этом примере мы увидели, как можно оптимизировать 
// компонент с помощью useMemo(), однако мы использовали 
// его только для сохранения примитивных типов данных. 

// Данный хук можно также использовать для сохранения ссылок на объекты. 
// Как мы помним, чтобы вызвать выполнение useEffect() в случае, 
// если у нас в зависимостях объект или ререндер компонента, 
// в случае, если в состоянии объект, достаточно изменить на него ссылку. 


// Разберём пример с useEffect(). Представим, что у нас есть компонент, 
// который принимает props, содержащие некоторые параметры, 
// которые нам нужны для запроса на сервер. 
// У нас есть функция для запроса к API. 
// При вызове компонента мы хотим сделать запрос к API и получить данные. 
// Если у нас изменятся какие-то параметры запроса, то нужно обновить данные (ссылка на пример):


import React, { useEffect, useState } from "react";

// Имитация API
const myFakeApi = ({ id, param }) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                param,
                items: [1, 2, 3, 4, 5]
            });
        }, 1000);
    });
};

// Параметры, которые будем менять
const mockParam1 = { id: 1, param: 2 };
const mockParam2 = { id: 2, param: 3 };

// Родительский компонент, который будет передавать props в дочерний
export const ExampleUseMemoUseEffectDeps = () => {
    const [childProps, setChildProps] = useState(mockParam1);
    const handleSwitchChildProps = () => {
        if (childProps === mockParam1) {
            setChildProps(mockParam2);
        } else {
            setChildProps(mockParam1);
        }
    };

    return (
        <div>
            <button onClick={handleSwitchChildProps}>Обновить</button>
            <hr />
            <Child {...childProps} />
        </div>
    );
};


// Дочений компонент
const Child = ({ id, param }) => {
    const [values, setValues] = useState(null);

    // Создаём параметры запроса
    const requestParams = {
        id,
        param
    };

    // Вызывам, когда обновятся параметры
    useEffect(() => {
        console.log("Request");
        myFakeApi(requestParams).then((r) => setValues(r));
    }, [requestParams]);

    return (
        <div>
            {values ? (
                <pre>{JSON.stringify(values, null, 2)}</pre>
            ) : (
                <div>Загрузка...</div>
            )}
        </div>
    );
};


// У нас есть родительский компонент, который передаёт props в дочерний, 
// и там создаются параметры запроса requestParams. При клике на “Обновить” 
// происходит обновление параметров запроса, и мы обращаемся к API. 
// Полученные данные из API устанавливаются в состояние, и тут начинается проблема. 


// После установки нового состояния компонент ререндерится заново 
// и… создаёт новый объект с requestParams и useEffect() выполняется заново. 
// У нас получается бесконечный цикл. 


// Чтобы избежать такого поведения, нам нужно мемоизировать requestParams

const Child = ({ id, param }) => {
    const [values, setValues] = useState(null);

    // Мемоизируем параметры запроса
    const requestParams = useMemo(() => {
        return {
            id,
            param
        };
    }, [id, param]);


    useEffect(() => {
        console.log("Request");
        myFakeApi(requestParams).then((r) => setValues(r));
    }, [requestParams]);

    return (
        <div>
            {values ? (
                <pre>{JSON.stringify(values, null, 2)}</pre>
            ) : (
                <div>Загрузка...</div>
            )}
        </div>
    );
};


// Теперь, пока у нас не изменяться переданные из родительского компонента, 
// параметры повторного запроса к API не будет.

// Конечно, это учебный пример, и он может спровоцировать 
// вопрос: почему не передать зависимости сразу в useEffect()?


useEffect(() => {
    console.log("Request");
    myFakeApi({ id, param }).then((r) => setValues(r));
}, [id, param]);

// В реальном проекте для запроса потребуется подготовить данные, например, 
// привести параметры к требуемому формату. 
// Во избежании написания большого количества кода внутри useEffect(), 
// можно воспользоваться useMemo(). В твоем проекте могут быть 
// и другие соображения на счет использования useMemo().


// Подытожим: useMemo() позволяет нам оптимизировать React-компонент. 
// Он производит мемоизацию и тем самым предотвращает 
// повторные вычисления при каждом рендере, если его зависимости не изменились. 
// Так же useMemo() позволяет сохранить ссылку на объект, 
// который мы хотим передавать как зависимость в useEffect(). 

// В этой части мы рассмотрели некоторые кейсы использования useMemo(), 
// мы вернёмся к нему ещё раз, когда будем знакомится с React.memo(). 