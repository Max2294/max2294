// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==

let yandexInput = document.getElementsByName('text')[0];
let btw = document.getElementsByClassName('button_theme_websearch')[0];
let searchWorld = 'Гобой';
let i=0;
let links = document.links;

if (btw!=undefined){
    let timerId = setInterval(()=>{
        yandexInput.value += searchWorld[i];
        i++;
        if (i==searchWorld.length){
            clearInterval(timerId);
            btw.click();}
    },500);
}
else if (location.hostname == 'yandex.ru'){
    for (let i=0; i<links.length; i++){
        if (links[i].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1){
            links[i].click();
            break;
        }
    }
}
else {
    setInterval(()=>{
        if (getRandom(0,100)<30) location.href = 'yandex.ru';
        let index = getRandom(0, links.length)
        links[index].click();
    },5000);
}

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
