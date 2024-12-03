let expression = [];
let postfix = [];
let symbols = [];
let evaluate_ans = [];
let answer = 0;
let precedence = {
  '*' : 1,
  "/" : 1,
  "+": 0,
  '-': 0,
};
 function add_to_expression(symbol){
  expression.push(symbol);
  if(expression.length == 0){
    documetn.getElementById(output).innerHTML = ans;
  }
  else{
    document.getElementById('output').innerHTML = evaluate_ans;
  }
 }

 function back(){
  if(expression.length > 0){
    expression.pop();
  }

  function equals_to(){
    to_postfix();
    evaluate();
  }

  function to_postfix(item){
    for (let i = 0; i < expression.length; i++){
      let item = expression[i];
      let check_symbol;
      if(item == "+" || item == "-" || item == "*" || item == "/"){
        check_symbol = true;
      }
      else{
        check_symbol = false;
      }
      
      if(check_symbol == true){
        if(symbols.length == 0){
          symbols.push(item);
        }

        else if(precedence[item] > precedence(symbols[symbols.length-1])){
          symbols.push(item);
        }

        else{
          while(precedence[item] <= precedence[symbols[symbols.length-1]]){
            let x = symbols.pop();
            postfix.push(x);
          }
        }

      }
      else{
        postfix.push(item);
      }
    }
  }

  function evaluate(){
    let check_symbol;
    for(let i = 0; i < postfix.length; i++){
      if(item == "+" || item == "-" || item == "*" || item == "/"){
        check_symbol = true;
      }
      else{
        check_symbol = false;
      }

      if(check_symbol){
        switch(item){
          case "+":
            evaluate_ans[evaluate_ans.length-2] = evaluate_ans[evaluate_ans.length-1] + evaluate_ans[evaluate_ans.length-2]
            evaluate_ans.pop();
            break;

          case "-":
            evaluate_ans[evaluate_ans.length-2] = evaluate_ans[evaluate_ans.length-1] - evaluate_ans[evaluate_ans.length-2]
            evaluate_ans.pop();
            break;

          case "/":
            evaluate_ans[evaluate_ans.length-2] = evaluate_ans[evaluate_ans.length-1] / evaluate_ans[evaluate_ans.length-2]
            evaluate_ans.pop();
            break;

          case "*":
            evaluate_ans[evaluate_ans.length-2] = evaluate_ans[evaluate_ans.length-1] * evaluate_ans[evaluate_ans.length-2];
            evaluate_ans.pop();
            break;

        }
      }
      else{
        evaluate_ans.push(item);
      }
    }
    ans = evaluate_ans[0];

  }

  function reset(){
    postfix = [];
    symbols = [];
    evaluate_ans = [];
    ans = 0;
    expression = [];
  }
 }