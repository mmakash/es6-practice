// const polapain = [
//     { Name: "Abul", job: 'sorkari', salary: 17000 },
//     { Name: "Babul", job: 'besorkari', salary: 25000 },
//     { Name: "Kabul", job: 'sorkari', salary: 21000 },
//     { Name: "Habul", job: 'besorkari', salary: 47000 },
//     { Name: "Jabul", job: 'sorkari', salary: 23000 },
//     { Name: "Mabul", job: 'besorkari', salary: 55000 }
// ]

// //  find stable jamai .. sorkari + 20000   or    besorkari + 40000

// const selected = polapain.filter(pola => pola.job === 'sorkari' && pola.salary >= 20000 || pola.job === 'besorkari' && pola.salary >= 40000)

// // console.log(selected)

// selected.map(vaggoban => {
//     console.log(vaggoban.Name);
// })

// const candidate = [
//     {Name: "Habil", job:'sorkari', salary: 17000},
//     {Name: "kabil", job:'sorkari', salary: 19500},
//     {Name: "Nabil", job:'Beshorkari', salary: 30000},
//     {Name: "Shakil", job:'sorkari', salary: 25000},
//     {Name: "Babil", job:'Beshorkari', salary: 35000},
//     {Name: "Aabil", job:'sorkari', salary: 30000},
//     {Name: "sabil", job:'Beshorkari', salary: 17000}
// ]
// const selection = candidate.filter(boy => (boy.job === 'sorkari' && boy.salary >= 20000)|| (boy.job === 'Beshorkari' && boy.salary >= 25000));
// // console.log(selection);
// selection.map(lucky => {
//     console.log(lucky.Name);
// })

// const numbers = [2,4,8,9,10];

// function getDoubles(numbers){
//     output = [];
//     for (const number of numbers){
//         const double = number * 2;
//         output.push(double)
//     }
//     return output;
// }
// const result = getDoubles(numbers);
// console.log(result);

// const persons = [20,10,30,40]

// function myDouble(persons){
//     output = [];
//     for (const person of persons){
//         const double = person * 2;
//         output.push(double);
//     }
//     return output;
// }
// const result = myDouble(persons);
// console.log(result);

// const students = [2,3,4,5,6];
// const makeDouble = students.map(x => x * 3);
// console.log(makeDouble);

const doctors = [
    {id:2, Name:'akash',Salary:30000},
    {id:3, Name:'bkash',Salary:40000},
    {id:4, Name:'tkash',Salary:50000},
    {id:5, Name:'gkash',Salary:60000}
]
const doctorSalary = doctors.map(x => x.Salary);
console.log(doctorSalary);