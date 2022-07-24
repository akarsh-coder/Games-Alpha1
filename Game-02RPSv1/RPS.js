const resultDisplay=document.querySelector('#result')
const choicesDisplay=document.querySelector('#choices')
const choices=['rock','paper','scissors']

const handleClick = (e) => {
  const userChoice= e.target.innerHTML
  const computerChoice=choices[Math.floor(Math.random()*choices.length)] 
  getResults(userChoice,computerChoice);
}

choices.forEach(choice=>{
    const button=document.createElement('button')
    button.innerHTML=choice
    button.addEventListener('click',handleClick)
    choicesDisplay.appendChild(button)
})
const getResults= (userChoice,computerChoice)=>{
    switch(userChoice+computerChoice){
        case 'scissorspaper':
        case 'paperrock':
        case 'rockscissor':
         resultDisplay.innerHTML='You chose '+userChoice+' and the computer chose '+ computerChoice+', you won.'
         break
        case 'paperscissors':
        case 'rockpaper':
        case 'scissorrock':
         resultDisplay.innerHTML='You chose '+userChoice+' and the computer chose '+ computerChoice+', you lost.'
         break
        case 'scissorsscissors':
        case 'paperpaper':
        case 'rockrock':
         resultDisplay.innerHTML='You chose '+userChoice+' and the computer chose '+ computerChoice+ " ,it's a draw."
         break 
    }
        
}