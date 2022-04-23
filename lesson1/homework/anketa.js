let firstname, lastname, patronymic, age, gender;

while (!firstname) {
    firstname = prompt(`Ваше имя:`)
}

while (!lastname) {
    lastname = prompt(`Ваша фамилия:`)
}

while (!patronymic) {
    patronymic = prompt(`Ваше отчество:`)
}

while (!age || age > 100 || age < 18) {
    age = prompt(`Ваш возраст:`)
}

gender = confirm(`Ваш пол - мужской?`)

alert(`Ваше ФИО: ${lastname} ${firstname} ${patronymic} Ваш возраст в годах: ${age} Ваш возраст в днях: ${age * 365} Через 5 лет вам будет: ${Number(age) + 5} Ваш пол: ${gender ? `мужской` : `женский`} Вы на пенсии: ${gender && age >= 65 || !gender && age >= 60 ? "да" : "нет"}`)




