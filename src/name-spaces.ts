export {};

namespace Japanese {
    export namespace Tokyo {
        export class Person {
            constructor(public name: string) {}
        }
    }
    export namespace Osaka {
        export class Person {
            constructor(public name: string) {}
        }
    }
}

namespace English {
    export class Person {
        constructor(
            public firstName: string,
            public middleName: string,
            public lastName: string
        ) {}
    }
}



const me = new Japanese.Tokyo.Person('はむさん');
const me2 = new English.Person('Michel', 'Joshef', 'Jackson');
const me3 = new Japanese.Osaka.Person('はむやん');


console.log(me.name);
console.log(me2);
console.log(me3);