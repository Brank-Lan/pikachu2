import string from './css';

const player = {
    id:undefined,
    time:100,
    n:1,
    ui:{
        demo: document.querySelector("#demo"),
        demo2: document.querySelector("#demo2")
    },
    events:{
        "#btnPause":"pause",
        "#btnPlay":"play",
        "#btnNormal":"normal",
        "#btnFast":"fast",
        "#btnSlow":"slow",
    },
    init:()=>{
        player.ui.demo.innerText = string.substr(0, player.n);
        player.ui.demo2.innerHTML = string.substr(0, player.n);
        player.bindEvents()
        player.play()
    },
    bindEvents:()=>{
       for(let key in player.events){
           if(player.events.hasOwnProperty(key)){
               const value = player.events[key]
               document.querySelector(key).onclick = player[value]
           }
       }
    },
    run: () => {
        player.n+=1
        if(player.n>string.length){
            window.clearInterval(player.id)
        }
        demo.innerText = string.substr(0,player.n)
        demo2.innerHTML =string.substr(0,player.n)
        demo.scrollTo(0,9999)
    },
    play:()=>{
        window.clearInterval(player.id)
        player.id = setInterval(player.run,player.time)
    },
    pause:()=>{
        window.clearInterval(player.id)
    },
    slow:()=>{
        player.time = 300
        player.id = player.play()
    },
    normal: ()=>{
        player.pause()
        player.time=100
        player.id = player.play()
    },
    fast:()=>{
        player.pause()
        player.time = 0
        player.id = player.play()
    }
}

player.init()
