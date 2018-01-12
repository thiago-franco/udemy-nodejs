var square = x => x*x;
console.log(square(9));

var user = {
    name: 'Thiago',
    sayHi: () => {
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt2: function() {
        console.log(`Hi. I'm ${this.name}`);
    }
}

user.sayHi();
user.sayHiAlt();
user.sayHiAlt2();