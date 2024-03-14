function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logWhisper(string) {
    console.log(whisper(string));
}

function logShout(string) {
    console.log(shout(string));
}
function sayHiToHeadphonedRoommate(string) {
    if (shout(string) === string) {
        return "Okay, I hear you.";
    }
    else {
        return "I can't hear you!";
    }
}
function sayHiToHeadphonedRoommate(string) {
    if (shout(string)===string) {
        return "YES INDEED!";
    }
    else {
        return "I can't hear you!";
    }
}
function sayHiToHeadphonedRoommate(string) {
    if (shout(string)===string){
        return "YES INDEED!";
    }
    else if(string==="Let's have dinner together!") {
        return "I would love to!";
    }
    else{
        return "I can't hear you!";
    }
}