let passportMarried = {
    name: 'Petr',
    surname: 'Petrov',
    address: {
        country: 'USA',
        city: 'Bobryisk',
    },
};


let passportMarried2 = {
    ...passportMarried,
    married: true, // Добавляем поле married
    address: {
        ...passportMarried.address, // Копируем объект address
    },
};

console.log(passportMarried);
console.log(passportMarried2);
