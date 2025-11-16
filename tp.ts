let counter = 0;

function add(a: number, b: number): number {
    return a + b;
}

function increment(): number {
    counter++
    return counter;
}
console.log(add(1, 2));

/* Exercice 2 Partie 2 */
type Student = {
    name: string;
    grade: number;
}
const student: Student = { name: "Léo", grade: 14 };

function updateGrade(student: Student, newGrade: number): Student {
    return { ...student, grade: newGrade }

}

const newStudent: Student = updateGrade(student, 16)
console.log(student, newStudent)

/* Exercice 3 */

function applyNTimes(f: (x: number) => number, n: number, x: number): number {
    if (n === 0) {
        return x;
    } else {
        return applyNTimes(f, n - 1, f(x));
    }
}
const double = (x: number) => x * 2;
console.log(applyNTimes(double, 3, 1));

/*Exercice 4*/
const numbers = [1, 2, 3, 4, 5, 6];

const result: number = numbers
    .filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((acc, n) => acc + n, 0);

console.log(result);

/*Fonction sum*/
function sum(numbers: number[]): number {
    return numbers.reduce((acc, n) => acc + n, 0);
}

/*Fonction average*/
function average(numbers: number[]): number {
    return numbers.length === 0 ? 0 : sum(numbers) / numbers.length;
}

/*Fonction product*/
function product(numbers: number[]): number {
    return numbers.reduce((acc, n) => acc * n, 1);
}

console.log('Sum:', sum(numbers));
console.log('Average:', average(numbers));
console.log('Product', product(numbers));

/*Exercice 5*/
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 15 },
    { name: "Charlie", age: 30 },
    { name: "Diana", age: 17 },
];

/*vérifier s'il y a un au moins un mineur avec find*/
const premierAdult = users.find(user => user.age >= 18);

console.log(premierAdult);

/*vérifier s'il y a un au moins un mineur avec some*/
const premierMajeur: boolean = users.some(user => user.age < 18);

/*vérifier si tous les utilisateurs ont plus de 10 ans avec every*/
const TousPlus10: boolean = users.every(users => users.age > 10);

console.log('Y a-t-il au moins un mineur?', premierMajeur);
console.log('Ils ont tous plus de 10 ans ?', TousPlus10);


/*5.3*/
const names: string[] = users.map(u => u.name);
const Aliceestla: boolean = names.includes("Alice");
const Eveestla: boolean = names.includes("Eve");

console.log('Liste des noms:', names);
console.log('Alice est présente dans la liste?', Aliceestla);
console.log('Eve est présente dans la liste?', Eveestla);

/*5.4*/
const usersWithHobbies = [
    { name: "Alice", hobbies: ["climbing", "yoga"] },
    { name: "Bob", hobbies: ["gaming"] },
    { name: "Charlie", hobbies: ["reading", "hiking"] },
];
const tousleshobbies: string[] = usersWithHobbies.flatMap(user => user.hobbies);

console.log('Liste unique de tous les hobbies:', tousleshobbies);

/*5.5*/
const trierParAge = [...users].sort((a, b) => a.age - b.age);

const deuxPlusJeunes = trierParAge.slice(0, 2);

console.log('Liste triée par âge:', trierParAge);
console.log('Les deux plus jeunes utilisateurs:', deuxPlusJeunes);

/*BONUS*/
type User = { name: string; age: number; country: string };

const data: User[] = [
    { name: "Alice", age: 25, country: "France" },
    { name: "Bob", age: 15, country: "France" },
    { name: "Charlie", age: 30, country: "Spain" },
    { name: "Diana", age: 22, country: "France" },
];

/*Objectif 1*/
const adultesFrancais = data.filter(user => user.age >= 18 && user.country === "France");
console.log('Adultes français:', adultesFrancais);

/*Objectif 2*/
const userNames = adultesFrancais.map(user => user.name);
console.log('Noms des adultes français:', userNames);

/*Objectif 3*/
const trierParAgeDe = [...adultesFrancais].sort((a, b) => b.age - a.age);
console.log('Adultes français triés par âge décroissant:', trierParAgeDe);


