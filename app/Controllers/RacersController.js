// race controller class 


function draw(){
  document.getElementById('1').innerText = 'zoop'
}



export class RacersController{
  constructor(){
    console.log('RaceController loaded')
    draw()
  } 

}