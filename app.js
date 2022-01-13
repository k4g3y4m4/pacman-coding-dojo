
let game = document.querySelector('.background-game');

let gameinit = () => {
    let heightGame = document.querySelector('.background-game').offsetHeight;
    let widthGame = document.querySelector('.background-game').offsetWidth;

    html = '';

    function getRandom(min, max) {  
        return Math.floor(
        Math.random() * (max - min) + min
        )
    }

    for(let i = 1 ;  i <=heightGame/20; i++){
        html += '<div class="row">';
        if(i == 1 || i == heightGame/20){
            for(let j = 1; j <= widthGame/20; j++){
                html += '<div class="brick"></div>';
            }
        }else{
            for(let j = 1; j <= widthGame/20 ; j++){
                if(j == 1 || j == widthGame/20){
                    html += '<div class="brick"></div>';
                }else{
                    html += '<div class="coin"></div>';
                }
            }
        }
        html += '</div>';
    }

    let packmanheight = getRandom(2, heightGame/20-2);
    let packmanwidth = getRandom(2, widthGame/20-2);
    console.log(packmanheight, packmanwidth);

    game.innerHTML = html;
    game.childNodes[packmanheight].childNodes[packmanwidth].classList.replace('coin', 'packman');

}


let moves = () => { 
    let packman = document.querySelector('.packman');   
    positionX = (document.querySelector('.packman').offsetTop)/20;
    positionY = (document.querySelector('.packman').offsetLeft)/20;
    console.log(positionX, positionY);
    window.addEventListener('keydown', (e) => {
        if(e.keyCode==37){
            //left
            if(game.childNodes[positionX].childNodes[positionY-1].classList.contains('coin')){
                game.childNodes[positionX].childNodes[positionY-1].classList.replace('coin', 'packman')
                game.childNodes[positionX].childNodes[positionY].classList.replace('packman', 'cell')
                console.log(game.childNodes[positionX].childNodes[positionY].classList)
            }
            
        }else if(e.keyCode==38){
            //up
            if(game.childNodes[positionX-1].childNodes[positionY].classList.contains('coin')){
                game.childNodes[positionX-1].childNodes[positionY].classList.replace('coin', 'packman')
                game.childNodes[positionX].childNodes[positionY].classList.replace('packman', 'cell')
            }
            
        }else if(e.keyCode==39){
            //right
            if(game.childNodes[positionX].childNodes[positionY+1].classList.contains('coin')){ 
                game.childNodes[positionX].childNodes[positionY+1].classList.replace('coin', 'packman')
                game.childNodes[positionX].childNodes[positionY].classList.replace('packman', 'cell')
            }
            
        }else if(e.keyCode==40){
            //down
            if(game.childNodes[positionX+1].childNodes[positionY].classList.contains('coin')){
                game.childNodes[positionX+1].childNodes[positionY].classList.replace('coin', 'packman')
                game.childNodes[positionX].childNodes[positionY].classList.replace('packman', 'cell')
            }
        
        }
    })

}

gameinit();
moves();  


