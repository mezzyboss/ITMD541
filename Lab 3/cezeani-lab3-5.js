function sortPeopleByAge(people) {
  return people.sort((a, b) => a.age - b.age).map(person => 
    // sorts the people array by age then outputs a new introductory string for each person
      console.log(person.name + ' is ' + person.age + ' years old and from ' + person.city));
}

// Testing time
let testPeople1 = [
  {name: 'Alice', age: 30, city: 'Chicago'},
  {name: 'Bob', age: 20, city: 'New York'},
  {name: 'Charlie', age: 25, city: 'Los Angeles'},
  {name: 'Diana', age: 35, city: 'Houston'},
];

sortPeopleByAge(testPeople1);
