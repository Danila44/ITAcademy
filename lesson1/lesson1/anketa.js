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

while (!Number (age) || age > 100 || age < 18) {
    age = prompt(`Ваш возраст:`)
}

gender = confirm(`Ваш пол - мужской?`)

alert(`Ваше ФИО: ${lastname} ${firstname} ${patronymic} Ваш возраст в годах: ${age} Ваш возраст в днях: ${age * 365} Через 5 лет вам будет: ${Number(age) + 5} Ваш пол: ${gender ? `мужской` : `женский`} Вы на пенсии: ${gender && age >= 65 || !gender && age >= 60 ? "да" : "нет"}`)



/*let maney, skolko

while (!maney || maney <= 0) {
    maney = prompt(`Введите сумму зарплаты:`)
}
let premiya = Number(maney) + (maney * 0.15)
let ruki = alert(`Премия 15%: На руки:${premiya}`)
let nalog = Number(premiya) - (premiya * 0.1)
let posleNaloga = alert(`Налог 10%: На руки: ${nalog}`)
while (!skolko || skolko <= 0) {
    skolko = prompt(`Введите сколько вы потратили в магазине:`)
}


let magazin = Number(nalog) - skolko
let inMagazine = alert(`В магазине вы потратили ${skolko} рублей. Осталось: ${magazin}`)
let way = alert(`Жене отдал половину, осталось ${magazin / 2}`)



let total = 17
console.log(total);
console.log(`после кота Василия:+ ${--total}`); //16
console.log(total);
console.log(`после деда и внука Миши: + ${total -= 2}`); //14
console.log(total);
console.log(`после соседки Марины: ${total -= 3}`); //11
console.log(total);
console.log(`после Алины и Анны: ${total -= 2}`); //9
console.log(total);
console.log(`после доярки:${--total}`); //8
console.log(total);
console.log(`после друзей:${total -= 5}`); //3
console.log(total);
console.log(`после того, как вернули:${++total}`); 


console.log(Boolean (!undefined));*/





