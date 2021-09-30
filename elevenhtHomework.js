//1
function One(fir, ...oth) {
  return {
    fir,
    oth,
  };
}
console.log(One(1, 2, 3, 4, 5, 6, 7, 8));

//2
const organisation = {
  name: "Google",

  info: {
    employees: ["Vlad", "Olga"],
    partners: ["Microsoft", "Facebook", "Xing"],
  },
};
// function getInfo({
//   name = "Unknow",
//   info: { partners: [first = "none", second = "none"] = [] } = {},
// } = {}) {}

// console.log(`${name}, ${first}, ${second}`);

// console.log(getInfo(organisation));

// Name: Google;
function getInfo({
  name = "Unknow",
  info: { partners: [first = "none", second = "none"] = [] } = {},
} = {}) {
  console.log(`Name: ${name}`);
  console.log(`Partners: ${first}, ${second}`);
}

getInfo(organisation);
getInfo();

//3
let user = {
  guid: "dd969d30-841d-436e-9550-3b0c649e4d34",

  isActive: false,

  balance: "$2,474.46",

  age: 30,

  eyeColor: "blue",

  name: "Tameka Maxwell",

  gender: "female",

  company: "ENOMEN",

  email: "tamekamaxwell@enomen.com",

  phone: "+1 (902) 557-3898",

  tags: ["aliquip", "anim", "exercitation", "non"],

  friends: [
    {
      id: 0,

      name: "Barber Hicks",
    },

    {
      id: 1,

      name: "Santana Cruz",
    },

    {
      id: 2,

      name: "Leola Cabrera",
    },
  ],
};

// Используя деструктуризацию получить значения из следующих полей

// 1. name,  balance, email

// 2. из массива tags получить первый и последний элемент

// 3. из массива friends получить значение поле name из первого элемента массива

function getlist({ name = {}, balance = {}, email = {} }) {
  console.log(`Name = ${name}, balance = ${balance}, email = ${email}`);
}
getlist(user);

function getMas({
  tags: [first = "none", s = "none", t = "none", last = "none"] = [],
} = {}) {
  console.log(`First = ${first} and last = ${last}`);
}
getMas(user);
function getName({ friends: [{ name: fName = "none" } = {}] = [] } = {}) {
  console.log(`Name = ${fName}`);
}
getName(user);

//4
const newArr = [, ...user.tags, ...user.friends];
console.log(newArr);
