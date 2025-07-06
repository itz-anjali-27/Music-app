let songIndex=0;
let audioElement=new Audio("songs/a1.mpeg");
let masterPlay=document.getElementById('masterPlay');
var myProgressBar=document.getElementById('myprogressBar');
let masterSong=document.getElementById('mastersong');
let masterImg=document.getElementById('masterimg');
let songs=[
    {songName:"Yaar Mod Do", coverPath:"covers/s1.jpg" },
    {songName:"Main Agar Kahun", coverPath:"covers/s2.jpg" },
    {songName:"Main to chaleya Teri Aur", coverPath:"covers/s3.jpg" },
    {songName:"Tere Bin ", coverPath:"covers/s4.jpg" },
    {songName:"Suniyan suniyan", coverPath:"covers/s5.jpg" },
    {songName:"Lo Maan Liya", coverPath:"covers/s6.jpg" },
    {songName:"Kitna CHahne Lage", coverPath:"covers/s7.jpg" },
    {songName:"Tainu Khbar Nahin", coverPath:"covers/s8.jpg" },
    {songName:"Mann Jogiya", coverPath:"covers/s9.jpg" },
    {songName:"O jaaneman Do You Know", coverPath:"covers/s10.jpg" },
    {songName:"Tera Chehra", coverPath:"covers/s11.jpg" },
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
         element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/a${songIndex+1}.mpeg`;
        masterSong.innerText=songs[songIndex].songName;
        masterImg.src=songs[songIndex].coverPath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=11)
    {
        songIndex=0;
    }
    else{
        songIndex+=1;
    }

        audioElement.src=`songs/a${songIndex+1}.mpeg`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
        audioElement.src=`songs/a${songIndex+1}.mpeg`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})


