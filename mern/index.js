

greeting = "Namaste"
count = 100
isVerified = true
color = "red"


console.log(greeting);
console.log(count);
console.log(isVerified);

console.log(greeting, " connected");
console.log(greeting, "ram");
console.log(greeting, "sita");
console.log(greeting, "rita");
console.log(color);


let fruits = ["app", "kiwi", "oranges"]
console.log("0th index - prev", fruits[0]);

fruits[0] = "apple"
console.log("0th index - after", fruits[0]);


let projector = {
    'color': "white",
    'brands': "samsung",
    'price': "600000",
    'size': "mid",
    'quality': "avg"


}
console.log("prev - brand", projector.brand);
projector.brand = "acer"
console.log("after- brand", projector.brand);


let brands = [
    {
        'id': 1,
        'name': "samsung",
        'website': "https/apple.com"
    },
    {
        'id': 2,
        'name': "apple",
        'website': "https/apple.com"
    }

];
const modifiedBrands = brands.map(obj => {
    if (obj.id == 2) {
        return {
            ...obj, website: "https/samsung.com"
        };
    }
    return obj;
});

console.log(modifiedBrands);
brands[1]['website'] = "https/samsung.com";

console.log(brands);


console.log("website - prev", projector.website);
projector.website = "https...."
console.log("website - afte", projector.website);



let courses = ["mern", "marketing", "python"];
console.log("before", courses);
courses[1] = "digital marketing";
console.log("after", courses);

let detailedCourses = [
    {
        name: "mern",
        duration: "3",
    },
    {
        name: "marketing",
        duration: "2",
    },
    {
        name: "python",
        duration: "2.5",
    },
];
console.log("before", detailedCourses[1].name);
detailedCourses[1].name = "digital marketing";
console.log("after", detailedCourses);


let colors = [
    {
        name: "red",
        hexvalue: "#FF0000",
        rgb: "(600, 0, 0)",
    },
    {
        name: "green",
        hexvalue: "#00FF00",
        rgb: "(255, 0, 0)",
    },
    {
        name: "blue",
        hexvalue: "#0000FFbbbbb567854654",
        rgb: "(255, 0, 0)",
    },

];
console.log(colors);

console.log("before", colors[2].hexvalue);
colors[2].hexvalue = "#00FF00";
console.log("after", colors);

let user = {
    name: 'ram',
    age: 20,
    address: {
        permanent: {
            district: "ktm",
            ward: -10,
            pronc: 1
        },
        temp: {
            district: "jhapa",
            ward: 11,
            pronc: 2
        },
    }

}


console.log("before", user.address.ward);
user.address.ward = "10";
console.log("after", user.address.ward);

let users = [
    {
        name: 'hari',
        age: 20,
        phoneNumber: {
            ncell: {
                number: 321546987
            },
            ntc: {
                number: 123659874

            },


        },
    },
    {
        name: 'syam',
        age: 24,
        phoneNumber: {
            ncell: {
                number: "0000"
            },
            ntc: {
                number: 859641327

            },

        },
    },
    {
        name: 'yam',
        age: 25,
        phoneNumber: {
            ncell: {
                number: 5621588
            },
            ntc: {
                number: 859641927

            },

        },
    }
]
console.log(users);
console.log("before", users[1].phoneNumber.ncell.number);
users[1].phoneNumber.ncell.number = "98000000";
console.log("after", users[1].phoneNumber.ncell.number);

let coursesNew = [
    {
        courseName: 'mern',
        students: [
            {
                name: "siri",
                address: "ktm"
            },
            {
                name: "alexa",
                address: "pokh"
            }
        ]
    },
    {
        courseName: 'python',
        students: [
            {
                name: "riri",
                address: "ktm"
            },
            {
                name: "alex",
                address: "pokh"
            }
        ]
    },


]
/*console.log(coursesNew);
console.log(coursesNew.courseName.students,);*/


let topics = [
    {
        title: "html",
        status: "pending",

    },
    {
        title: "css",
        status: "completed",

    },
    {
        title: "array",
        status: "completed",

    },
    {
        title: "object",
        status: "pending",


    },
    {
        title: "function",
        status: "pending",

    },
];


/*console.log(topics[0].title, 'is', topics[0].status);
console.log(topics[1].title, 'is', topics[1].status);
console.log(topics[2].title, 'is', topics[2].status);
console.log(topics[3].title, 'is', topics[3].status);
console.log(topics[4].title, 'is', topics[4].status);*/

function printTopicStatus(topics) {
    console.log(`${topics.title} is ${topics.status}.`);
}

printTopicStatus(topics[0]);
printTopicStatus(topics[1]);
printTopicStatus(topics[2]);
printTopicStatus(topics[3]);
printTopicStatus(topics[4]);


let input1 = 1
let input2 = 2
let result1 = input1 + input2
console.log(input1 + " + ", input2 + " = ", +result1);
console.log(`${input1} + ${input2} =${input1 + input2}`);

function calculateDouble(input) {
    console.log(`double of ${input} is ${input * 2}`);
}
calculateDouble(3);


function calculateSum(userInput1, userInput2) {
    console.log(`${userInput1}+${userInput2} = ${userInput1 + userInput2}`)
}

calculateSum(1, 2);
calculateSum(7, 2);
calculateSum(1, 90);


function double(input) {
    return input * 2;
}
console.log("double of 2", double(2));



function sum(input1, input2) {
    let result = input1 + input2;
    return result
}


let blogs = [
    {
        title: "Basic Computer  Training in Nepal",
        created_at: "2024-03-22T15:14:31.944539+05:45",
    },
    {
        title: "Exploring Video Editing Opportunities",
        created_at: "2024-01-22T14:51:41.401510+05:45",
    },
    {
        title: "Mastering Adobe Illustrator at Mindrisers",
        created_at: "2024-02-22T14:49:45.524809+05:45",
    },
];

blogs[0].created_at = blogs[0].created_at.substring(0, 10);
blogs[1].created_at = "2023-05-24";
blogs[2].created_at = "2023-05-24";


console.log(blogs);
//console.log(blogs[0].created_at.substring(0,10));

let willRain = false
let hasProbability = false
let isVerySunny = false
if (willRain) {
    console.log("take umbrella");
} else if (hasProbability) {
    console.log("you may need to take an umbrella");
} else if (isVerySunny) {
    console.log("you may need to take an umbrella");
} else {
    console.log("no need to take an umbrella");
}

let todos = [
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
    },
]

/*if(todos[0].status){
    console.log("html is completed");
}else{
console.log("html is  pending");
}

if(todos[1].status){
    console.log("react is completed");
}else{
    console.log("react is pending");
}

if(todos[2].status){
    console.log("express is completed");
}else{
    console.log("express is pending");
}*/

function printTopicStatus(todo) {
    if (todo.status) {
        console.log(`${todo.title} is completed`);
    } else {
        console.log(`${todo.title} is pending`);
    }
}

printTopicStatus(todos[0]);
printTopicStatus(todos[1]);
printTopicStatus(todos[2]);


let students = [
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

students.forEach(check => {
    const name = check.name
    const hasPaid = check.hasPaid;
    const hasSchorship = check.hasSchorship;
    hasPaid ? console.log(`${name} is allow to enter exam hall`) : hasSchorship ? console.log(`${name} is allow to enter exam hall`) : console.log(`${name}is not allow to enter the exam hall`);
})

function printStatus(student) {
    if (student.hasPaid) {
        console.log(`${student.name} can give exam`);
    } else if (student.hasSchorship) {
        console.log(`${student.name} can give exam`);
    } else {
        console.log(`${student.name} cannot give exam`);
    }
}

printStatus(students[0]);
printStatus(students[1]);
printStatus(students[2]);


let dbUser = {
    username: "ram",
    password: "12345678",
    isActivited: false,
}
let inputPassword = "12345678"
let inputUsername = "ram"

if (dbUser.username == inputUsername && dbUser.password == inputPassword && dbUser.isActivited) {
    console.log(`${dbUser.username} can log in`);
} else {
    console.log(`${dbUser.username} cannot log in`);
}

let student =
{
    name: "ram",
    hasPaid: true,
    hasSchorship: false,
    fullAttendence: false
}

if ((student.hasPaid || student.hasSchorship) && student.fullAttendence) {
    console.log(`${student.name} can give exam`);
} else {
    console.log(`${student.name} cannot give exam`);
}


