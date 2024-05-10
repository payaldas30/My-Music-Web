const music= new Audio('audio/1.mp3');



const songs =[
    {
        id:1,
        songName:`<p>Param sundari</p>`,
        poster:"img/1.jpg"
    },
    {
        id:2,
        songName:`<p>Chaleya _ Jawaan</p>`,
        poster:"img/2.jpg"
    },
    {
        id:3,
        songName:`<p>Faraatta _ Jawaan</p>`,
        poster:"img/3.jpg"
    },
    {
        id:4,
        songName:`<p>Kahani suno 2.0</p>`,
        poster:"img/4.jpg"
    },
    {
        id:5,
        songName:`<p>Keshariya</p>`,
        poster:"img/5.jpg"
    },
    {
        id:6,
        songName:`<p>Laal peeli akhiyan</p>`,
        poster:"img/6.jpg"
    },
    {
        id:7,
        songName:`<p>Naaja _ sooryavanshi</p>`,
        poster:"img/7.jpg"
    },
    {
        id:8,
        songName:`<p>O maahi _Dunki</p>`,
        poster:"img/8.jpg"
    },
    {
        id:9,
        songName:`<p>Teri baaton mein aisa uljha jiya</p>`,
        poster:"img/9.jpg"
    },
    {
        id:10,
        songName:`<p>Pehle bhi main</p>`,
        poster:"img/10.jpg"
    },
    {
        id:11,
        songName:`<p>Tum se _TBMAUJ</p>`,
        poster:"img/11.jpg"
    },
    {
        id:12,
        songName:`<p>Kabhi na kabhi</p>`,
        poster:"img/12.jpg"
    },
    {
        id:13,
        songName:`<p>Dus bahane 2.0</p>`,
        poster:"img/13.jpg"
    },
    {
        id:14,
        songName:`<p>Ek zindagi</p>`,
        poster:"img/14.jpg"
    },
    {
        id:15,
        songName:`<p>Khulke jeene ka</p>`,
        poster:"img/15.jpg"
    },
    {
        id:16,
        songName:`<p>Sawan mein lag gayi aag</p>`,
        poster:"img/16.jpg"
    },
    {
        id:17,
        songName:`<p>Garmi Street dancer3D</p>`,
        poster:"img/17.jpg"
    },
    {
        id:18,
        songName:`<p>Jab se mera dil</p>`,
        poster:"img/18.jpg"
    },
    {
        id:19,
        songName:`<p>Chale Aana</p>`,
        poster:"img/19.jpg"
    },
    {
        id:20,
        songName:`<p>Yaara_1921</p>`,
        poster:"img/20.jpg"
    },
    {
        id:21,
        songName:`<p>Tera Fitoor_Genius</p>`,
        poster:"img/21.jpg"
    },
    {
        id:22,
        songName:`<p>Rang Lageya ishq da</p>`,
        poster:"img/22.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src =songs[i].poster;
    e.getElementsByTagName('p')[0].innerHTML =songs[i].songName;
});

let masterPlay=document.getElementById('masterPlay');
let wave=document.getElementById('wave');
masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play(); 
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        wave.style.opacity=1;
    } else {
        music.pause(); 
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        wave.style.opacity=0;
    }
});


let makeAllBackground =()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background ='rgb(105,105,105, 0)';
    });
}
let makeAllPlay =()=>{
    Array.from(document.getElementsByClassName('play')).forEach((el)=>{
        el.classList.remove('fa-pause-circle');
        el.classList.add('fa-play-circle'); ;
    });
}

let index=0;
let poster_master_play=document.getElementById('poster_master_play');
let title=document.getElementById('title');

Array.from(document.getElementsByClassName('play')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        let index=el.target.id;
        // console.log(index);
     music.src = `audio/${index}.mp3`;
     poster_master_play.src=`img/${index}.jpg`;
     music.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
     wave.style.opacity=1;
     
     let songTitles = songs.filter((element)=>{
        return element.id == index;
     });
     songTitles.forEach(els=>{
        let{songName}= els;
        title.innerHTML =songName;
     });
     makeAllBackground();
     Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105, 1)";
     makeAllPlay();
     el.target.classList.add('fa-pause-circle');
     el.target.classList.remove('fa-play-circle');
     wave.style.opacity=1;
    });

})

let currentstart = document.getElementById('currentstart');
let currentend =document.getElementById('currentend');
let seek=document.getElementById('seek');
let barTwo=document.getElementById('bar-two');
let dot=document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr =music.currentTime;
    let music_duration =music.duration;
    // console.log(music_curr);
    // console.log(music_duration);

    let min1=Math.floor(music_duration/60);
     // console.log(min);
    let sec1=Math.floor(music_duration%60);
    // console.log(sec);
    if (sec1 <10) {
        sec1=`0${sec1}`;
    }
    currentend.innerText=`${min1}:${sec1}`;
    

    let min2=Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr%60);
    if (sec2 <10) {
        sec2 =`0${sec2}`;
    }
    currentstart.innerText=`${min2}:${sec2}`;


    let ProgressBar = parseInt((music_curr/music_duration)*100);
        seek.value=ProgressBar;
        // console.log(seek.value);

    let seekbar=seek.value;
    barTwo.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;
});
seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music.duration /100 ;
});

// let vol_icon=document.getElementById('vol_icon');
// let vol=document.getElementById('vol');
// let vol_bar=document.getElementsByClassName('vol_bar');
// let vol_dot=document.getElementById('vol_dot');


// vol.addEventListener('change',()=>{
//     if (vol.value==0) {
//        vol_icon.classList.remove('fa-volume-high'); 
//        vol_icon.classList.add('fa-volume-off'); 
//        vol_icon.classList.remove('fa-volume-low'); 
//     }
//     if (vol.value>0) {
//        vol_icon.classList.remove('fa-volume-high'); 
//        vol_icon.classList.remove('fa-volume-off'); 
//        vol_icon.classList.add('fa-volume-low'); 
//     }
//     if (vol.value>50) {
//        vol_icon.classList.add('fa-volume-high'); 
//        vol_icon.classList.remove('fa-volume-off'); 
//        vol_icon.classList.remove('fa-volume-low'); 
//     }
//     let vol_a=vol.value;
//     vol_bar.style.width =`${vol_a}%`;
//     vol_dot.style.left=`${vol_a}%`;
//     music.volume=vol_a/100;
// });

let next=document.getElementById('next');
let back=document.getElementById('back');

back.addEventListener('click',()=>{
    index-=1;
    if (index<1) {
        index=Array.from(document.getElementsByClassName('songItem')).length;  
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src=`img/${index}.jpg`;
     music.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
     wave.style.opacity=1;
     
     let songTitles = songs.filter((element)=>{
        return element.id == index;
     });
     songTitles.forEach(els=>{
        let{songName}= els;
        title.innerHTML =songName;
     });
     makeAllBackground();
     Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105, 1)";
     makeAllPlay();
    //   masterPlay.target.classList.add('fa-pause-circle');
    //   masterPlay.target.classList.remove('fa-play-circle');
     wave.style.opacity=1;
})
next.addEventListener('click',()=>{
    index++;
    if (index>Array.from(document.getElementsByClassName('songItem')).length) {
        index=1;  
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src=`img/${index}.jpg`;
     music.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
     wave.style.opacity=1;
     
     let songTitles = songs.filter((element)=>{
        return element.id == index;
     });
     songTitles.forEach(els=>{
        let{songName}= els;
        title.innerHTML =songName;
     });
     makeAllBackground();
     Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105, 1)";
     makeAllPlay();
    //   masterPlay.target.classList.add('fa-pause-circle');
    //   masterPlay.target.classList.remove('fa-play-circle');
     wave.style.opacity=1;
})





























// scroll left and right
let pop_song_left= document.getElementById('pop_song_left');
let pop_song_right= document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft+=360;
})
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft-=360;
})


let pop_art_left= document.getElementById('pop_art_left');
let pop_art_right= document.getElementById('pop_art_right');
let items=document.getElementsByClassName('items')[0];


pop_art_right.addEventListener('click',()=>{
    items.scrollLeft+=360;
})
pop_art_left.addEventListener('click',()=>{
    items.scrollLeft-=360;
})



