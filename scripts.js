let start = document.getElementById('start')

let game_screen = document.getElementsByClassName('game_screen')[0]

start.addEventListener('click', () => {
    game_screen.style.visibility = 'visible'
    game_screen.style.opacity = '1'
    game_screen.style.pointerEvents = 'auto'

})


let user_choice
let comp_choice

const user_card = document.querySelectorAll('.user_card')
const comp_card = document.querySelectorAll('.comp_card')
const result_screen = document.getElementsByClassName('result_screen')[0]
const restart = document.getElementById('restart')


console.log(comp_card)

user_card.forEach(adding_event)

function adding_event(user_hand) {
    user_hand.addEventListener('click', (e) => {
        
        user_choice = user_hand.id
        hide_other_hand()
        generate_comp_choice()
        result_final()
        restart_btn_show()
    }, {once : true})
}


const choices_array = ['rock', 'paper', 'scissor']
const emoji = ['✊' , '🤚', '✌️']

function generate_comp_choice() {
    let random_num = Math.floor(Math.random() * 3)
    
    comp_choice = choices_array[random_num]
    

    comp_card.forEach(show)

    function show(comp_hand) {
        
        temp =  'c' + comp_choice
        if(temp == comp_hand.id){
            comp_hand.innerHTML = `<h3>${emoji[random_num]}</h3>`
            comp_hand.classList.add('selected_comp_choice')
        }
        else{
            
            
            comp_hand.style.opacity = '0'
        }
    }

}

function hide_other_hand() {

    user_card.forEach(hide)

    function hide(hand) {

        if (hand.id != user_choice) {
            hand.style.visibility = 'hidden'
            hand.style.opacity = '0'
        }
        else {
            hand.classList.add('selected_user_choice')
        }
    }

}


function result_final(){
    result_screen.style.visibility = 'visible'
    if(user_choice == comp_choice) {
        console.log('result is draw')
        result_screen.innerHTML = '<h1>DRAW!</h1>'
        
    }
    if (user_choice == 'rock' && comp_choice == 'paper'){
        console.log('you chose rock and comp chose paper so comp WINS')
        result_screen.innerHTML = '<h1>YOU LOST!</h1>'
        
        result_screen.classList.add('you_lost')
    }
    if (user_choice == 'rock' && comp_choice == 'scissor'){
        console.log('you chose rock and comp chose scissor so you WINS')
        
        result_screen.innerHTML = '<h1>YOU WON!</h1>'
        
        result_screen.classList.add('you_won')
    }
    if (user_choice == 'paper' && comp_choice == 'rock'){
        console.log('you chose paper and comp chose rock so you WINS')
        result_screen.innerHTML = '<h1>YOU WON!</h1>'
        
        result_screen.classList.add('you_won')
    }
    if (user_choice == 'paper' && comp_choice == 'scissor'){
        console.log('you chose paper and comp chose scissor so comp WINS')
        result_screen.innerHTML = '<h1>YOU LOST!</h1>'
        
        result_screen.classList.add('you_lost')
    }
    if (user_choice == 'scissor' && comp_choice == 'paper'){
        console.log('you chose scissor and comp chose paper so you WINS')
        result_screen.innerHTML = '<h1>YOU WON!</h1>'
        
        result_screen.classList.add('you_won')
    }
    if (user_choice == 'scissor' && comp_choice == 'rock'){
        console.log('you chose scissor and comp chose rock so comp WINS')
        result_screen.innerHTML = '<h1>YOU LOST!</h1>'
        
        result_screen.classList.add('you_lost')
    }
}

function refresh() {
    window.location.reload("Refresh")
}

function restart_btn_show() {
    restart.style.visibility = 'visible'
    restart.style.opacity = '1'
}