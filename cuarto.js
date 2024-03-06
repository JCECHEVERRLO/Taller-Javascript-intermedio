const users = [
    { name: "Cristian", age: 20 },
    { name: "Juan", age: 17 },
    { name: "Orlando", age: 25 },
    { name: "Katherine", age: 30 },
  ];
  

  function age_in_days(age) {
    const dias_año = 365;
    return age * dias_año;
  }
  
  function mayor18(user) {
    return user.age >= 18;
  }
  
  const Edad_dias = users
    .filter(mayor18)
    .map(user => ({
      ...user,
      age_in_days: age_in_days(user.age)
    }));
  
  console.log(Edad_dias);
  
  
  
  
  
  


