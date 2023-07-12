console.log("Welcome to spotify");
let songIndex = 0 ;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myprogressBar');
let waves =  document.getElementById('gif')

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
       audioElement.play(); 
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
    //    waves.style.opacity = 1 ;
       
    }else{
        audioElement.pause(); 
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
});

audioElement.addEventListener('timeupdate',()=>{
    progress =  parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value = progress;
})
myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myprogressBar.value*audioElement.duration)/100 ;
})