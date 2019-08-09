// DOM elements
let firstToneButton = document.querySelector('#firstToneButton');
let firstToneHz = document.querySelector('#firstToneHz');
let firstDeviceButton = document.querySelector('#firstDeviceButton');
let secondToneButton = document.querySelector('#secondToneButton');
let secondToneHz = document.querySelector('#secondToneHz');
let secondDeviceButton = document.querySelector('#secondDeviceButton');


// Variables
let isFirstTone = false;
let isSecondTone = false;


// Create the synths
let firstSynth = new Tone.Synth().toMaster();
let secondSynth = new Tone.Synth().toMaster();


// Handle first button click
firstToneButton.addEventListener('click', function() {
  if(!isFirstTone) {
    firstSynth.triggerAttack(firstToneHz.value);
    firstToneButton.textContent = 'Release';
    isFirstTone = true;

  }
  else {
    firstSynth.triggerRelease();
    firstToneButton.textContent = 'Play';
    isFirstTone = false;
  }
});

// Handle second button click
secondToneButton.addEventListener('click', function() {
  if(!isSecondTone) {
    secondSynth.triggerAttack(secondToneHz.value);
    secondToneButton.textContent = 'Release';
    isSecondTone = true;
  }
  else {
    secondSynth.triggerRelease();
    secondToneButton.textContent = 'Play';
    isSecondTone = false;
  }
});

// Handle first pair button click
firstDeviceButton.addEventListener('click', function() {
  navigator.bluetooth.requestDevice({
    acceptAllDevices: true
  })
  .then(device => {
    console.log('User paired with device name:', device.name,
                'id:', device.id);
  })
  .catch(error => { console.log(error) });
});

// Handle second pair button click
secondDeviceButton.addEventListener('click', function() {
  navigator.bluetooth.requestDevice({
    acceptAllDevices: true
  })
  .then(device => {
    console.log('User paired with device name:', device.name,
                'id:', device.id);
  })
  .catch(error => { console.log(error) });
});
