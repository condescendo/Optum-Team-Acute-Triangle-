const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (typeof SpeechRecognition === "undefined") {
  startBtn.remove();
  result.innerHTML = "<b>Browser does not support Speech API. Please download latest chrome.<b>";
}