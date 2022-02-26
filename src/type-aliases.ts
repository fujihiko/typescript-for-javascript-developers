export {};

type Mojiretsu = string;

const fooString: string = 'Hellow';
const fooMojiretsu: Mojiretsu = 'Hellow';

const example1 = {
    name: 'Ham',
    age: '43'
};

type Profile = {
    name: string;
    age: string;
}

const example2: Profile = {
    name: 'Ham',
    age: '43'
};

type Profile2 = typeof example1;