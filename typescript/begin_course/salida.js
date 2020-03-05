var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Data Types
var myString = "Hello World";
myString.split(' ');
var myNumber = 20;
var myBoolen = true || false;
var myVar = "string";
myVar = 4 + myVar;
// Arrays
var anyArray = [0, "", true];
var stringArray = ["", "", ""];
var numberArray = [1, 2, 3];
var booleanArray = [true, false, true];
// Tuple
var stringNumberTuple = ["Hello", 30];
// stringNumberTuple = [30, "hello"]   -> Error
// Undefined types
var myVoid = undefined; // Permite que la variable sea como global
var myNull = null || undefined;
var myUndefined = undefined;
// Functions
function getSum(number1, number2) {
    return number1 + number2;
}
var mySumFunction = function (number1, number2) {
    if (typeof (number1) === "string") {
        number1 = parseInt(number1);
    }
    if (typeof (number2) === "string") {
        number2 = parseInt(number2);
    }
    return number1 + number2;
};
function getName(firstName, lastName) {
    if (lastName === undefined) {
        return "" + firstName;
    }
    else {
        return firstName + " " + lastName;
    }
}
function myVoidFunction() {
    return;
}
function showTask(task) {
    document.write(task.title + " - " + task.body + " </br>");
}
var myTask = {
    title: "Task2",
    body: "fgverwwtb"
};
showTask(myTask);
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User created: ', this.name);
    }
    User.prototype.register = function () {
        console.log(this.name + 'is now regitered');
    };
    User.prototype.payMembership = function () {
        console.log(this.name + 'paid membership');
    };
    return User;
}());
// inheritance
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payMembership = function () {
        _super.prototype.payMembership.call(this);
    };
    return Member;
}(User));
// class receive behaivour of parent class
var Report = /** @class */ (function () {
    function Report(data) {
        this.data = data;
    }
    Report.prototype.run = function () {
        this.data.forEach(function (line) {
            console.log(line);
        });
    };
    return Report;
}());
var report = new Report(['first line', 'second line']);
report.run();
var TabbedReport = /** @class */ (function (_super) {
    __extends(TabbedReport, _super);
    function TabbedReport(headers, values) {
        var _this = _super.call(this, values) || this;
        _this.headers = headers;
        return _this;
    }
    TabbedReport.prototype.run = function () {
        console.log(this.headers);
        _super.prototype.run.call(this);
    };
    return TabbedReport;
}(Report));
var headers = ['Name'];
var data = ['Alice Green', 'Isaac Asimov', 'Isaac Delahaye'];
var r = new TabbedReport(headers, data);
r.run();
var isaacNewton = new User('isaac Newton', 'isaacNewton@gmail.com', 34);
console.log(isaacNewton.age);
isaacNewton.register();
var mike = new Member(1, 'Mike Portnoy', 'mike@email.com', 50);
mike.payMembership();
// Testing
var spaceBlank = "</br>";
// Write in the DOM
document.write(typeof (myString) + spaceBlank);
document.write(myNumber.toString() + spaceBlank);
document.write(getName("Andreu") + spaceBlank);
document.write(getName("Andreu", "Isac") + spaceBlank);
