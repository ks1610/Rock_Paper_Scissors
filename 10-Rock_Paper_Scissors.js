
let score = JSON.parse(localStorage.getItem
    ('score')) || {
            win: 0,
            lose: 0,
            tie: 0
        };
    

    function reset_game(){
        score.win = 0;
        score.lose = 0;
        score.tie = 0;
        localStorage.removeItem('score');

        document.querySelector('.js-result')
            .innerText = 'Result';
        document.querySelector('.js-moved')
            .innerText = '';
        document.querySelector('.js-score')
            .innerHTML = `Win: ${score.win}, Lose: ${score.lose}, Tie: ${score.tie}`;
    } 
    function play(user){
        const cmpter = computerMove();

        document.querySelector('.js-score')
            .innerHTML = `Win: ${score.win}, Lose: ${score.lose}, Tie: ${score.tie}`;
        console.log(cmpter);
        
        localStorage.setItem('score', JSON.stringify(score));

        let result = '';
        
        if(user === 'Paper'){
            if(cmpter === 'Rock'){
                result = 'You win!';
            }
            else if(cmpter === 'Paper'){
                result = 'Tie';
            }
            else if(cmpter === 'Scissors'){
                result = 'You lose';
            }
        }
        
        if(user === 'Scissors'){
            if(cmpter === 'Rock'){
                result = 'You lose';
            }
            else if(cmpter === 'Paper'){
                result = 'You win!';
            }
            else if(cmpter === 'Scissors'){
                result = 'Tie';
            }
        }
        
        if(user === 'Rock'){
            if(cmpter === 'Rock'){
                result = 'Tie';
            }
            else if(cmpter === 'Paper'){
                result = 'You lose';
            }
            else if(cmpter === 'Scissors'){
                result = 'You win!';
            }
        }
        
        if(result === 'You win!'){
            score.win++;
        }
        else if(result === 'You lose'){
            score.lose++;
        }
        else if(result === 'Tie'){
            score.tie++;
        }
        
        localStorage.setItem('score', JSON.stringify(score));

        document.querySelector('.js-result')
            .innerHTML = result;

        document.querySelector('.js-moved')
            .innerHTML = `You picked <img class = "_move" src="Image/${user}.png"> || Computer picked <img class = "_move" src="Image/${cmpter}.png">`;
            //`You picked ${user} || Computer picked ${cmpter}`;

        document.querySelector('.js-score')
            .innerHTML = `Win: ${score.win}, Lose: ${score.lose}, Tie: ${score.tie}`;


    }
    
    function computerMove(){
        let cmpter = '';

        const randnum = Math.random();

        if(randnum >= 0 && randnum < 1/3){
            cmpter = 'Rock';
        }
        else if(randnum >= 1/3 && randnum < 2/3){
            cmpter = 'Paper';
        }
        else if(randnum >= 2/3 && randnum < 1){
            cmpter = 'Scissors';
        }
        
        return cmpter;
    }
