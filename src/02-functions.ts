import {Friend, Colleague, EmailContact } from './myTypes'
//import objects for testing:
import {friends, colleagues} from './01-basics'

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))


// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) { // Inferred retun type
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}



// adds a colleague to an array, and setting their extensins number to the highest extension, plus 1:
function addColleague(cs: Colleague[], name: string, department: string, email: string){ //Inferred string return
  cs[cs.length + 1] = {
  name: name,
  department: department,
  contact: {
    email: email,
    extension: highestExtension(cs).contact.extension + 1,
  },
};
  return 'Colleague added' + name;
}


//to test addCcolleague:
addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));



function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max? : number
): EmailContact[] {
  let end = colleagues.length;
  if (max !== undefined) {
     end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}
// Test invocations
console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW



//Searches an array of friends for those that satisfy a criterion. 
//The criterion is specified as a callback.
function findFriends(
  friends: Friend[],
  criterion: (friend: Friend) => boolean
): string[] {
  const foundFriends = friends.filter(criterion);
  return foundFriends.map((friend) => friend.name)
}


console.log('Friends starting with Ma: ' + findFriends(friends, (friend) => friend.name.startsWith('Ma')));
console.log('friends over 35: ' + findFriends(friends, (friend) => friend.age < 35));

