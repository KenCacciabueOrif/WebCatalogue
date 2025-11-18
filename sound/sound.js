



  const synth = new Tone.Synth().toDestination();

  document.getElementById("play").addEventListener("click", async () => {
    // Resume the AudioContext (required by browsers)
    await Tone.start();
    console.log("AudioContext started");

    // Play a note
    synth.triggerAttackRelease("C4", "8n");
  });