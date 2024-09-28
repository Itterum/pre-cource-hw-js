let passportMarried = {
    name: 'Petr',
    surname: 'Petrov',
    address: {
        country: 'USA',
        city: 'Bobryisk',
    },
};


let passportMarried2 = {};
let newField = {married: true};

Object.entries(passportMarried).forEach(([key, value]) => {
    passportMarried2[key] = value;

    if (key === 'surname') {
        passportMarried2 = {...passportMarried2, ...newField};
    }
});

console.log(passportMarried);
console.log(passportMarried2);
