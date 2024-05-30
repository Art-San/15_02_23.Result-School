/* Enum */
enum Colors {
	RED,
	GREEN,
	BLUE,
}

enum Tokens {
	accessToken,
	refreshToken,
}

const primary: Colors = Colors.GREEN
const token: Tokens = Tokens.accessToken

/* Утверждения (Assertions) */
const someValue: any = 'ewr23ge2345rg'
const strLength: number = (someValue as string).length

/* Generic (Обобщения) */
function getCar<T>(name: T): T {
	// function getCar<T extends string>(name: T): T {
	return name
}

getCar('Bugatti')
