
function process(speech_text) {
    return "....";
}
recognition.onresult = event => {
   const last = event.results.length - 1;
   const res = event.results[last];
   const text = res[0].transcript;
   if (res.isFinal) {
      processing.innerHTML = "processing ....";
      const response = process(text);
      
      const p = document.createElement("p");
      p.innerHTML = `You said: ${text} </br>Siri said: ${response}`;
      processing.innerHTML = "";
      result.appendChild(p);
      // add text to speech later
   } else {
      processing.innerHTML = `listening: ${text}`;
   }
}