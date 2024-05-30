/* Массивы и Кортежи */
const numbers: number[] = [1, 2, 3, 4, 5]
const numbers2: Array<number> = [1, 2, 3, 4, 5]

const numbers3: [number, number] = [1, 2]
const profile1: [string, number] = ['Max', 2]

/* Функции */
function getAge(name?: string): number {
	return 25
}

const getAge2 = (name?: string): number => 25

/* REST */
function getFullName(firstName: string, ...names: string[]) {
	return firstName + ' ' + names.join(' ')
}

/* Функциональная перегрузка */
function getInfo(name: string): string
function getInfo(age: number): number
function getInfo(single: boolean): boolean
function getInfo(value: any): any {
	return value
}

const result = getInfo('234')
const result1 = getInfo(234)
