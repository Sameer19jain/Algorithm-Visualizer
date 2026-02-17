var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
var array_type_select=document.getElementById("array_type");
var size_display=document.getElementById("size_display");
var speed_display=document.getElementById("speed_display");
//var array_speed=document.getElementById('a_speed').value;

var butts_algos=document.querySelectorAll(".algos button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

// New features: statistics tracking
var comparisons = 0;
var arrayAccesses = 0;
var swaps = 0;
var startTime = 0;
var timerInterval = null;
var isPaused = false;
var soundEnabled = true;

// Get new control buttons
var pauseBtn = document.getElementById("pauseBtn");
var resetBtn = document.getElementById("resetBtn");
var soundBtn = document.getElementById("soundBtn");
var themeBtn = document.getElementById("themeBtn");

// Audio context for sound effects
var audioContext = null;
try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
} catch (e) {
    console.log("Web Audio API not supported");
}

//Array generation and updation.

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

// Event listeners for new controls
pauseBtn.addEventListener("click", togglePause);
resetBtn.addEventListener("click", resetStats);
soundBtn.addEventListener("click", toggleSound);
themeBtn.addEventListener("click", toggleTheme);

// Update displays
inp_as.addEventListener("input", function() {
    size_display.innerText = "Size: " + inp_as.value;
});

inp_aspeed.addEventListener("input", function() {
    var speeds = ["Very Slow", "Slow", "Medium", "Fast", "Very Fast"];
    speed_display.innerText = "Speed: " + speeds[inp_aspeed.value - 1];
});

function generate_array()
{
    cont.innerHTML="";
    var arrayType = array_type_select.value;

    for(var i=0;i<array_size;i++)
    {
        // Generate array based on selected type
        switch(arrayType) {
            case "random":
                div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min)) + 10;
                break;
            case "nearly_sorted":
                div_sizes[i] = i * 0.5 + Math.floor(Math.random() * 10);
                break;
            case "reversed":
                div_sizes[i] = (array_size - i) * 0.5;
                break;
            case "few_unique":
                div_sizes[i] = Math.floor(Math.random() * 5) * 10 + 10;
                break;
        }
        
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%; border-radius: 3px 3px 0 0; transition: all 0.2s ease;";
        divs[i].classList.add("array-bar");
    }
    resetStats();
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

// Statistics functions
function updateStats() {
    document.getElementById("comparisons").innerText = comparisons;
    document.getElementById("arrayAccess").innerText = arrayAccesses;
    document.getElementById("swaps").innerText = swaps;
}

function resetStats() {
    comparisons = 0;
    arrayAccesses = 0;
    swaps = 0;
    updateStats();
    stopTimer();
    document.getElementById("timeElapsed").innerText = "0s";
}

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(function() {
        if (!isPaused) {
            var elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
            document.getElementById("timeElapsed").innerText = elapsed + "s";
        }
    }, 100);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function togglePause() {
    isPaused = !isPaused;
    pauseBtn.innerText = isPaused ? "Resume" : "Pause";
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    soundBtn.innerText = "Sound: " + (soundEnabled ? "ON" : "OFF");
}

function toggleTheme() {
    document.body.classList.toggle("light-theme");
    var isLight = document.body.classList.contains("light-theme");
    themeBtn.innerText = isLight ? "🌞 Light Theme" : "🌙 Dark Theme";
}

function playNote(freq, duration) {
    if (!soundEnabled || !audioContext) return;
    
    var oscillator = audioContext.createOscillator();
    var gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = freq;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
    pauseBtn.disabled=false;
}

function runalgo()
{
    disable_buttons();
    resetStats();
    startTimer();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}
