let age: number;

age = 12;

let userName: string;

userName = "Pedro";

let isInstructor: boolean;

isInstructor = true;

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
  gender?: "male" | "female";
};

type Student = Person & {
  grade: "primary" | "secundary" | "graduation";
};

type PersonName = Pick<Person, "name">;

const nomePedro: PersonName = { name: "Pedro" };

type PersonWithoutAge = Omit<Person, "age">;

const student: Student = {
  name: "pedro",
  age: 33,
  grade: "graduation",
  gender: "male",
};

let person: Person;

person = {
  name: "Pedro",
  age: 32,
};

let people: Person[];

let course: string | number = "React - The Complete Guide";

course = 32142;

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

function insertAtBeginning<T>(array: T[], value: T): T[] {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split("");
