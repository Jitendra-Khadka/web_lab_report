let fruits = ['apple',"banana",'orange','mango'];

function loops(){
  for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]+"for");
  }
  
  let x = 0;
  while(x < fruits.length){
    console.log(fruits[x]+'while');
    x++;
  }
  
  let y = 0;
  do{
    console.log(fruits[y]+'do');
    y++;
  }while(y < fruits.length)
  }

  for(let i = 0; i < 5; i++){
    for(let j = 0; j< 5; j++){
      if(i == j){
        console.log(i*j);
      }
    }
  }

loops();