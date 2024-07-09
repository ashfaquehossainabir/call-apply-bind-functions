// Call & apply set "this" and pass arguments
// to a function: 
// --> Call uses individual args
// --> apply uses an array of args

// Bind creates a new function with a fixed 
// "this" and optional args, without immediate
// execution.

// Call & apply invoke functions immediately.
// Bind allows delayed execution.


const person = {
  getDetails: function (location, rollNo) {
    return `Name: ${this.firstName} ${this.lastName} from ${location}, Roll No. ${rollNo}`;
  }
}

const person1 = {
  firstName: "Ashfaque",
  lastName: "Hossain"
}

const person2 = {
  firstName: "Abir",
  lastName: "Mamu"
}

// Call() Function
// const infoPerson1 = person.getDetails.call(person1, "Malibag", 32115);
// const infoPerson2 = person.getDetails.call(person2, "Shajahanpur", 15116);


// Apply() Function
// const infoPerson1 = person.getDetails.apply(person1, ["Malibag", 32115]);
// const infoPerson2 = person.getDetails.apply(person2, ["Shajahanpur", 11432]);


// Bind() Function
// const infoPerson1 = person.getDetails.bind(person1, "Malibag", 11321);
// const infoPerson2 = person.getDetails.bind(person2, "Shajahanpur", 32114);

// console.log(infoPerson1());
// console.log(infoPerson2());
