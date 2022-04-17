function startScreen(){
    document.getElementById("startPage").style.display = 'block';
    document.getElementById("meditationPage").style.display = 'none';
    document.getElementById("blockerPage").style.display = 'none';
    document.getElementById("healthPage").style.display = 'none';
    document.getElementById("Meditation").onclick = meditationScreen;
    document.getElementById("Blocker").onclick = blockerScreen;
    document.getElementById("Health").onclick = healthScreen;
}

function meditationScreen(){
    document.getElementById("startPage").style.display = 'none';
    document.getElementById("meditationPage").style.display = 'block';
    document.getElementById("blockerPage").style.display = 'none';
    document.getElementById("healthPage").style.display = 'none';
    document.getElementById("back").onclick = startScreen;
}

function blockerScreen(){
    document.getElementById("startPage").style.display = "none";
    document.getElementById("meditationPage").style.display = 'none';
    document.getElementById("blockerPage").style.display = 'block';
    document.getElementById("healthPage").style.display = 'none';
    document.getElementById("back2").onclick = startScreen;
}

function healthScreen(){
    document.getElementById("startPage").style.display = "none";
    document.getElementById("meditationPage").style.display = 'none';
    document.getElementById("blockerPage").style.display = 'none';
    document.getElementById("healthPage").style.display = 'block';
    document.getElementById("back3").onclick = startScreen;
}

startScreen();