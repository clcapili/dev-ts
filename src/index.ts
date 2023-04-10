// demo basic ts

// code ref 1
let age: number = 20;
if (age < 50)
  age += 6;

  console.log(age);

// code ref 2 - Any Type
let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;
let level;

function render(document: string) {
  console.log(document);
}

// code ref 3 - Arrays
let numbers:number[] = [];
numbers.forEach(n => n.toString)

// code ref 4 - Tuples
let user: [number, string, boolean, number] = [1, 'Charlene', true, 0];
user.push(1);

// code ref 5 - Enums

// const small = 1;
// const medium = 2;
// const large = 3;

//  PascalCase
const enum Size { Small = 1, Medium , Large };
let mySize: Size = Size.Medium;
console.log(mySize);

// code ref 6 - Functions
function calculateTax(income: number, taxYear = 2023): number {
  if (taxYear < 2023)
    return income * 1.2;
  return income * 1.3;
}

calculateTax(11_000);

// code ref 7 - Objects - Type Alliases
// DRY - Don't Repeat Yourself
type Employee = {
  // read-only
  readonly id: number,
  name: string,
  retire: (date: Date) => void
}

let employee: Employee = {
  id: 1, 
  name: 'Charlene',
  retire: (date: Date) => {
    console.log(date);
  }
};

// code ref 8 - Union Types
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === 'number')
    return weight * 1.2;
  else
    return parseInt(weight) * 1.2;
  
}
kgToLbs(10);
kgToLbs('10kg');

// code ref 9 - Intersection Types
type Draggable = {
  drag: () => void
};

type Resizable = {
  resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
}

// code ref 10 - Literal Types (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';
let metric: Metric = 'cm';

// code ref 11 - Nullable Types
function greet(name: string | null | undefined) {
  if (name)
    console.log(name.toUpperCase());
  else
    console.log('Hey!');
}

greet(undefined);

// code ref 12 - Optional Chaining
type Customer = {
  birthday?: Date;
};

function getCustomer (id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);

// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// if (customers !== null && customers !== undefined)
// customers?.[0]

// Optional call
let log: any = null;
log?.('a');