/* Базовые типы */
let firstName: string = 'Max'
let age: number = 25
let isOwner: boolean = true

let profile: undefined = undefined
let city: null = null

let isHasGirlfriend: unknown = null
let dogName: any = true

/* Структура объектов */
const userProfile: {
	firstName: string
	age: number
	isOwner: boolean
} = {
	age: 25,
	firstName: 'Max',
	isOwner: true,
}
