let health = prompt('Введите число параметра "здоровье" для персонажа')
console.log("health", typeof health)
health = Number(health)

if (health <= 0 || !health) {
	alert('Параметр "здоровье" должен быть больше нуля!')
} else {
    console.log("health", health)
	alert(`Параметр "здоровье" равен ${health}`);
}