var prediction_1 = ""
var prediction_2 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});

camera = document.getElementById("camera");

Webcam.attach("#camera")
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("screenshot").innerHTML = '<img id="captured_image"src="' + data_uri + '"/>';
    });
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/PcWJM87HE/model.json', modelLoaded)

function modelLoaded() {
    console.log("model loaded");
}

function speak() {

    var synth = window.speechSynthesis;
    speak_data_1 = "first prediction is" + prediction_1;
    speak_data_2 = "second prediction is" + prediction_2;
    var utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2)
    synth.speak(utterthis)
}
