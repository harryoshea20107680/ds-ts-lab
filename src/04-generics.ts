import {friends, colleagues} from './01-basics'
import {Friend, Colleague} from './myTypes'

function findMatch<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
    return data.find((criteria))
}

console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Jane')  ))
console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'Finance'  ))

//returns a sorted copy of an array of any type, where the second parameter is the sorting criterion. 
function sort<T>( objects : T[], sorter: (t1: T, t2: T) => number, max? : number){
    let end = objects.length;
    if (max !== undefined) {
     end = max < 2 ? 1 : max
  }
  const objectsCopy = objects;
  const sortedCopy = objects.sort(sorter);
  return sortedCopy.slice(0,end) 
}


// Sort friends by age
console.log(sort<Friend>(friends, (a, b) => a.age - b.age));
// Sort colleagues by extension number
console.log(
  sort<Colleague>(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension
  )
);


