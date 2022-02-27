export {};

interface Profile {
    name: string;
    underTwenty: boolean;
    [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Ham', underTwenty: false }

// how to write index signeture
// { [ index: typeForIndex]: typeForValue }
profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'japan';

console.log(profile);