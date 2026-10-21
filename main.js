const data = [
    {
      name: "John",
      birthday: "1-1-1995",
      favoriteFoods: {
        meats: ["hamburgers", "sausages"],
        fish: ["salmon", "pike"],
      },
    },
    {
      name: "Mark",
      birthday: "10-5-1980",
      favoriteFoods: {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
      },
    },
    {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: {
        meats: ["cow", "chicken"],
        fish: ["pike"],
      },
    },
    {
      name: "Thomas",
      birthday: "1-10-1990",
      favoriteFoods: {
        meats: ["bird", "rooster"],
        fish: ["salmon"],
      },
    },
    {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: {
        meats: ["hamburgers", "lamb"],
        fish: ["bass", "tuna"],
      },
    },
  ];


  function getNames(arr){
    return arr.map((i)=>i.name)
  }


  function getBornBefore1990(arr) {
    return arr.filter(i => i.birthday.split("-")[2]<1990)
  }

  function countFoodOccurrences(arr) {
    const result = {};
  
    arr.forEach((person) => {
      const meats = person.favoriteFoods.meats;
      const fish = person.favoriteFoods.fish;
      const allFoods = [...meats, ...fish];
  
      allFoods.forEach((food) => {
        if (result[food]) {
          result[food] += 1;
        } else {
          result[food] = 1;
        }
      });
    });
  
    return result;
  }
    
  //MAIN:

  console.log("-------Section 1-------");
  console.log(getNames(data));
  console.log("-------Section 2-------");
  console.log(getBornBefore1990(data));
  console.log("-------Section 3-------");
  console.log(countFoodOccurrences(data));

