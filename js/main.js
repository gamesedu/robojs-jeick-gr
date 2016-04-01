console.log()
var bot1 = getUrlParam('bot1');
var bot2 = getUrlParam('bot2');
var rounds = getUrlParam('rounds');
var speed = getUrlParam('speed')
if(!bot1) {
    bot1 = 'testbot';
}   
if(!bot2) {
    bot2 = 'sittingduck';// default opponent =sitting duck
}

if(!rounds) {
    rounds = 3;   //reduced round number to 3 (to save time in class)
}

if(!speed) {
    speed = 20;   
}

rounds = parseInt(rounds);
var bot1File = (bot1.startsWith('/')?'':'bots/') + bot1 + '.js';
var bot2File = (bot2.startsWith('/')?'':'bots/') + bot2 + '.js';

duel = new Duel(bot1File, bot2File, rounds, speed);
duel.drawScans = getUrlParam('drawScans') != null;
duel.drawDebug = getUrlParam('drawDebug') != null;

duel.onFinished = function(bot1score,bot2score) {
    if(window != window.top) {
        top.battleFinished(bot1score, bot2score);
    }
    if(getUrlParam('redirecturl')) {
        var url = getUrlParam('redirecturl') + '?bot1='+bot1+'&bot2='+bot2+'&score1='+bot1score+'&score2='+bot2score;
        
        window.location.href = url;
    }
}

duel.start();
