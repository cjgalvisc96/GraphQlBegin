// Data Types
var myString: string = "Hello World";
myString.split(' ');
var myNumber: number = 20;
var myBoolen: boolean = true || false;
var myVar: any = "string";
myVar = 4 + myVar;

// Arrays
var anyArray: any[] = [0, "", true];
var stringArray: string[] = ["", "", ""];
var numberArray: number[] = [1, 2, 3];
var booleanArray: boolean[] = [true, false, true];

// Tuple
var stringNumberTuple: [string, number] = ["Hello", 30];
// stringNumberTuple = [30, "hello"]   -> Error

// Undefined types
let myVoid: void = undefined; // Permite que la variable sea como global
let myNull: null = null || undefined;
let myUndefined: undefined = undefined;

// Functions
function getSum(number1: number, number2: number): number {
    return number1 + number2;
}

let mySumFunction = function (
    number1: number | string,
    number2: number | string): number {
    if (typeof (number1) === "string") {
        number1 = parseInt(number1);
    }
    if (typeof (number2) === "string") {
        number2 = parseInt(number2);
    }
    return number1 + number2;
}

function getName(
    firstName: string,
    lastName?: string): string {
    if (lastName === undefined) {
        return `${firstName}`;
    } else {
        return `${firstName} ${lastName}`;
    }
}

function myVoidFunction(): void {
    return;
}

// Interfaces define the object structure
interface interfaceTask {
    title: string;
    body: string;
}
function showTask(task: interfaceTask) {
    document.write(`${task.title} - ${task.body} </br>`);
}


let myTask: interfaceTask = {
    title: "Task2",
    body: "fgverwwtb"
}
showTask(myTask)

// Clases

interface interfaceUser {
    name: string;
    email: string;
    age: number;
    register();
    payMembership();
}

class User implements interfaceUser {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User created: ', this.name);
    }

    register() {
        console.log(this.name + 'is now regitered')
    }

    payMembership() {
        console.log(this.name + 'paid membership');
    }
}


// inheritance
class Member extends User {
    id: number;
    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.id = id;
    }

    payMembership() {
        super.payMembership();
    }
}

// class receive behaivour of parent class

class Report {
    data: Array<string>;

    constructor(data: Array<string>) {
        this.data = data;
    }

    run() {
        this.data.forEach((line) => {
            console.log(line)
        });
    }
}

var report: Report = new Report(['first line', 'second line']);
report.run();

class TabbedReport extends Report {

    headers: Array<string>;

    constructor(headers: string[], values: string[]) {
        super(values);
        this.headers = headers;
    }

    run() {
        console.log(this.headers);
        super.run();
    }
}

var headers: string[] = ['Name'];
var data: string[] = ['Alice Green', 'Isaac Asimov', 'Isaac Delahaye'];
var r: TabbedReport = new TabbedReport(headers, data);
r.run();

let isaacNewton = new User('isaac Newton', 'isaacNewton@gmail.com', 34);

console.log(isaacNewton.age);
isaacNewton.register();


let mike = new Member(1, 'Mike Portnoy', 'mike@email.com', 50);
mike.payMembership();



// Testing
let spaceBlank = "</br>";
// Write in the DOM
document.write(typeof (myString) + spaceBlank);
document.write(myNumber.toString() + spaceBlank);
document.write(getName("Andreu") + spaceBlank);
document.write(getName("Andreu", "Isac") + spaceBlank);

