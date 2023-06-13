const questions = [{
    'que': "which of the following is a markup language ?",
    'a': "HTML",
    'b': "css",
    'c': "javascript",
    'd': "php",
    'correct': "a"
},

{
    'que': "who is the father of c++?",
    'a': "steve smith",
    'b': "morne morakle",
    'c': "brajane stoustrup",
    'd': "ab devillers",
    'correct': "c"
},

{
    'que': 'which type of language does javascript is?',
    'a': 'objeact-oriented',
    'b': 'object-based',
    'c': 'procedural',
    'd': 'not',
    'correct': 'a'
}
]

let index = 0;
let total = questions.length;
let right =0, wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options')

const loadQuestion=()=>{
    if(index===total){
        return endQuiz();
    }
    reset();
    const data = questions[index]
    // console.log(data);
    quesBox.innerText = `${index+1}) ${data.que}`
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
   
}

const submitQuiz=()=>{
    const data = questions[index];
    const ans = getAnswer()
    if(ans==data.correct){
         right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;  
}

const getAnswer=()=>{
    let answer;
     optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;

            }
        }
     )
     return answer;
}

const reset=()=>{
    optionInputs.forEach(
       (input)=>{
           input.checked=false;
       }
    )
}

const endQuiz=()=>{
    document.getElementById("box").innerHTML = `
      <h3>Thanks for participating in quiz</h3>
      <h2>You had scored ${right}/${total} in this quiz</h2>  `
}


loadQuestion();













