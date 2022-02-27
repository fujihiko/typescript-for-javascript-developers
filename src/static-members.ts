export {};

class Me {
    static isProgrammer: boolean = true;
    static firstName: string = 'Atsushi';
    static lastName: string = 'Maeda';

    static work() {
        // return "Hey, Guy! This is Atsushi Are you interedted."
        return `Hey, Guy! This is ${this.firstName} Are you interedted.`
    }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());