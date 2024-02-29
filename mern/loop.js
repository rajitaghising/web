for (let count = 1; count <= 5; count++) {
    console.log({ count });

}
console.log("ënd of loop");


for (let count = 0; count <= 2; count++) {
    console.log({ count });
}

let userList = ["ram", "hari", "shyam"];
console.log(userList[0]);
console.log(userList[1]);
console.log(userList[2]);

for (let index = 0; index < 3; index++) {
    console.log(index);
    console.log(userList[index]);
}


let cours = [
    {
        title: "html",
        status: true
    },
    {
        title: "react",
        status: false
    },
    {
        title: "express",
        status: false
    },]
for (let list = 0; list <= 2; list++) {
    if (cours[list].status) {
        console.log(`${cours[list].title} is completed`);
    } else {
        console.log(`${cours[list].title} is pending`);
    }
}
let studant = [
    {
        name: "ram",
        hasPaid: true,
        hasSchorship: false,
    },
    {
        name: "hari",
        hasPaid: false,
        hasSchorship: false,
    },
    {
        name: "shyam",
        hasPaid: true,
        hasSchorship: false,
    },
]
for (let list = 0; list <= 2; list++) {
    if (studant[list].hasPaid || studant[list].hasSchorship) {
        console.log(`${studant[list].name} can give exam`);
    } else {
        console.log(`${studant[list].name} cannot give exam`);
    }
    
}
const number = parseInt(prompt('Enter an integer: '));
for(let i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}

/*function findMultiplication(){
    const number = parseInt(prompt('Enter an integer: '));
    for (let i = 1; i <= 10; i++) {
        const result = i * number;
        console.log(`${number} * ${i}=${result}`);
}}
*/

