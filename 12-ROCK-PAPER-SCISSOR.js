
    let score= JSON.parse(localStorage.getItem('score'))||{//to use it need to have||
      win:0,
      lose:0,
      tie:0
    }    

    
    let autoplaying=false;
    let IntervalID;
    
    function resetGame(){
    score={
      win: 0,
      lose: 0,
      tie:0
    };
    

    localStorage.removeItem('score');
    console.log(JSON.parse(localStorage.getItem('score')));
    }
    updateGame(); 
    
    function AutoPlay(){
       
      if(!autoplaying){
        IntervalID= setInterval(function (){
      const  PlayerMove=pickComputerMove();
        playGame(PlayerMove);
      },3000);
      autoplaying=true;
    }
    else{
      clearInterval(IntervalID);
      autoplaying=false;
    }
  }

    function pickComputerMove(){//get random moves from the computer using math.random

        let computerMove='';
        //const emoji=doc

        const randomNumber=Math.random();   

        if(randomNumber>=0 && randomNumber<1/3){
          computerMove='rock';

        }

        if(randomNumber >=1/3 && randomNumber <2/3){
          computerMove='paper';
          
        }
        if(randomNumber>=2/3 && randomNumber <1){
          computerMove='scissors';
        }
        return computerMove;

    }
    function updateGame(){
    document.querySelector('.js-score')
    .innerHTML= `win ${score.win} lose ${score.lose} Tie ${score.tie}`;
    }

  
  


  //verify the player move then tells the results
  function playGame(PlayerMove){
      let result='';
      const computerMove=pickComputerMove();

      if(PlayerMove==='scissors'){

        if(computerMove==='rock'){
        result='LOSE!';
        }
        else if(computerMove==='paper'){
          result='WIN!';
          
        }
        else if(computerMove==='scissors'){
          result='TIE!';
        }
      }

      else if (PlayerMove==='paper'){           

        if(computerMove==='rock'){
          result='WIN!';

        }
        else if(computerMove==='paper'){
          result='TIE!';
          
        }
        else if(computerMove==='scissors'){
          result='LOSE!';
        }

      }

      else if(PlayerMove==='rock'){

      if(computerMove==='rock'){
        result='TIE!';

      }
      else if(computerMove==='paper'){
        result='LOSE!';
        
      }
      else if(computerMove==='scissors'){
        result='WIN!';
      }

      }
      if (result==='WIN!'){
        score.win++;
      }
      if (result==='LOSE!'){
        score.lose++;
      }
      if (result==='TIE!'){
        score.tie++;
      }

      localStorage.setItem('score',JSON.stringify(score));
      //show the results
      updateGame(); 
      document.querySelector('.js-result').innerHTML=result;
      document.querySelector('.js-moves').innerHTML=`You <img src="${PlayerMove}-emoji.png"class="moves"> VS <img src="${computerMove}-emoji.png"class="moves" > Computer`;
      //  alert(`${PlayerMove} against ${computerMove} ${result}\nwin ${score.win} lose ${score.lose} Tie ${score.tie}`);
      console.log(JSON.stringify(score));
      console.log(localStorage.getItem('score'));
      console.log(JSON.parse(localStorage.getItem('score')));
      console.log(result );

  }