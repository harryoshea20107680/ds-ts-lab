//interface for friend added:
interface Friend {
    name: string;
    phone: string;
    age: number
}


const friend1 = {
  name: "Michael Brick",
  phone: "087-12345",
  age: 25,
};

const friend2 = {
  name: "Martin Youngfella",
  phone: "086--12345",
  age: 31,
};

const friends = [friend1, friend2];
console.log(friends[1]);

//   -------------------

//interface for colleagues:

interface Colleague {
    name: string;
    department: string;
    contact: {email: string; extension: number};
}

// interface for colleague history
interface ColleagueHistory {
  current: Colleague[],
  former: Colleague[]
}

const colleague1 = {
  name: "Ralph Graham",
  department: "Engineering",
  contact: {
    email: "rgraham@company.com",
    extension: 121,
  },
};

const colleague2 = {
  name: "Patti Burke",
  department: "Finance",
  contact: {
    email: "pburke@company.com",
    extension: 132,
  },
};

const colleague3 = {
  name: "Dean Sullivan",
  department: "HR",
  contact: {
    email: "dos@company.com",
    extension: 125,
  },
};

//updated colleagues data structure
export const colleagues : ColleagueHistory = {
  current: [colleague1, colleague2, colleague3],
  former: [],
};

console.log(colleagues.current[0]);
