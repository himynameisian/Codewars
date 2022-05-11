/*Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more. */

function peopleWithAgeDrink(old) {
    if (old >= 21){
      return 'drink whisky'
    }else if(old < 21 && old >= 18){
     return 'drink beer'
    }else if(old < 18 && old >= 14){
      return 'drink coke'
    }else (old < 14)
      return 'drink toddy'
  };