declare enum Feature {
    Waterproof = 0,
    Insulate = 1,
    None = 2
}
declare let hat: {
    name: string;
    price: number;
    feature: Feature;
};
declare let gloves: {
    name: string;
    price: number;
    feature: Feature;
};
declare let umbrella: {
    name: string;
    price: number;
    feature: Feature;
    hasFeature: (checkFeature: any) => boolean;
};
declare let products: {
    name: string;
    price: number;
    feature: Feature;
    hasFeature?(f: Feature): boolean;
}[];
declare type Student = {
    name: string;
    id: number;
};
declare let peach: {
    name: string;
    id: number;
};
declare let wade: {
    name: string;
    id: number;
};
declare let members: Student[];
declare type Project = {
    id: number;
    name: string;
    price?: number;
};
declare type Person = {
    id: string;
    name: string;
    city: string;
};
declare type UnionType = {
    id: string | number;
    name: string;
};
declare let shirt: {
    id: number;
    name: string;
    price: number;
};
declare let shoes: {
    id: number;
    name: string;
    price: number;
};
declare let paints: {
    id: number;
    name: string;
    price: number;
};
declare let bob: {
    id: string;
    name: string;
    city: string;
    company: string;
    dept: string;
};
declare let dataItems: (Person | Project)[];
declare function isPerson(testObj: any): testObj is Person;
declare type Employee = {
    company: string;
    dept: string;
};
declare let engineer: (Person & Employee)[];
