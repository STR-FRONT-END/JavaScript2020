const myObj = {name: 'Shannon'};
console.log(myObj)
// myObj = 'new';
myObj.name = 'Reed'
console.log(myObj)



const newObj = myObj;//not a clone, just a reference
newObj.name = "shakeya"
console.log("myObj", myObj)
console.log("newObj", newObj)

//Duplicate Object
const dupObj = {name: 'Shannon', age: '34', city: 'San Diego'}
let dupObj2 = Object.assign({}, dupObj)
let dupObj3 = {...dupObj}

dupObj.name = 'Tatum'
console.log("dupObj", dupObj)
dupObj2.name = 'Keya'
console.log("dupObj2", dupObj2)
dupObj3.name = 'Momma'
console.log("dupObj3", dupObj3)



let names = ['Jack', 'Jill', 'Kim', 'Mike']
let names2 = names;
names2 = names2.slice(1)
console.log("names", names)
console.log("names2j", names2)

let names3 = [...names2]
console.log("names3", names3)





//Reducer
//update the car color
//updtae the car milage
const person = {name: 'Shannon', age: '34', city: 'San Diego'}
//Turn these function into action in the reducers
const changeName = (person, newName) => {
  return {...person, name: newName}
}

const changeCity = (person, newCity) => {
  return {...person, city: newCity}
}

//Initialize State
let currentState = {name: 'Shannon', age: '34', city: 'San Diego'}



//Reducer
const reducer = (state, action) => {
  switch(action.type) {
    case "CHANGE_NAME":
      return {...state, name: action.payload } ;
    case "CHANGE_CITY":
      return {...state, city: action.payload };
    default:
      console.log("error: oh no");
  }
}

const dispatch = action => {
  return currentState = reducer(currentState, action)
}

currentState
let newperson = changeName(person, "Tatum")
newperson

let action = {type: "CHANGE_NAME", payload: "Shakeya"}
dispatch(action)
dispatch({type: "CHANGE_CITY", payload: "Birmingham"})