/* eslint-disable no-unused-vars */

const { add, subtract, divide, multiply } = require('./calculator');

/**
 * @file index.js is the root file for this example application
 * @author KeySar
 * @see <a href="https://traversymedia.com"
 */
/**
 * Student Name
 * @type {string}
 */

const studentName = 'John Doe';

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [98, 97.7, 76, 89, true];

/**
 * Todo object
 * @type{{id: number|string, text: string}}
 */
const todo = {
  id: '1',
  text: 'Hello',
};

/**
 * Calculate tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
  return `$${amount + tax * amount}`;
};

console.log(calculateTax(100, 0.5));

/**
 * A Student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age (optional)
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */
const student = {
  id: 1,
  name: 'john doe',
  age: 20,
  isActive: true,
};

/**
 * Class to create a person object
 */
class Person {
  /**
   * @param {Object} personInfo information about the person"
   */
  constructor(personInfo) {
    /**
     * @property {string} name Persons name
     */
    this.name = personInfo.name;
    /**
     * @property {string} age Persons age
     */
    this.age = personInfo.age;
  }

  /**
   * @property {Function} greet A greeting with name and age
   * @return void
   */
  greet() {
    console.log(`Hello, my name is ${this.name} and i am ${this.age}`);
  }
}

/**
 * Person One
 * See {@link Person}
 */
const person1 = new Person({
  name: 'John doe',
  age: 30,
});
console.log(person1.greet());

console.log(add(20));
