const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for (let i of data) {
    if (i.profession == "developer") {
      console.log(i.name);
    }
  }
}

// 2. Add Data
function addData() {
  const newData = {};
  newData.name = prompt("Enter name");
  newData.age = Number(prompt("Enter age"));
  newData.profession = prompt("Enter profession");
  data.push(newData);
  console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  let removedAdmins = [];
  for (let i = data.length - 1; i >= 0; i--) {
    if (data[i].profession == "admin") {
      removedAdmins.push(data[i]);
      data.splice(i, 1);
    }
  }
  console.log(`Admins that got removed`, removedAdmins);
  console.log(
    `NOTE:Please refresh the page after using Remove Admins button, because after removing admins, there might not be enough elements left in data object, which might lead to other buttons not working :)`
  );
}

// 4. Concatenate Array
function concatenateArray() {
  const newArr = [];
  newArr[0] = prompt("Enter name");
  newArr[1] = Number(prompt("Enter age"));
  newArr[2] = prompt("Enter profession");
  console.log(data.concat(newArr));
}

// 5. Average Age
function averageAge() {
  let avgSum = 0;
  for (let i of data) {
    avgSum += i.age;
  }
  console.log(avgSum / data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  for (let i of data) {
    if (i.age > 25) {
      console.log(`${i.name}'s age is above 25`);
    }
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  let temp = [];
  let uniqProfession = 0;

  for (let i = 0; i < data.length; i++) {
    temp.push(data[i].profession);
    for (let j of temp) {
      if (data[i] != j) {
        uniqProfession++;
      }
    }
  }
  console.log(`Number of unique professions = ${uniqProfession}`);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  data[0].profession = "manager";
  console.log(data[0]);
}

// 10. Profession Count
function getTotalProfessions() {
  let professionCount = 0;
  for (let i of data) {
    if (i.profession == "developer" || i.profession == "admin") {
      professionCount++;
    }
  }
  console.log(
    `There are ${professionCount} people that are either developers or admins`
  );
}
