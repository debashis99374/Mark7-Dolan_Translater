var buttonHandler=document.getElementById("button");
var txtInput=document.getElementById("txt-area-input");
var outputText=document.getElementById("txt-area-output");
var serverUrl="https://api.funtranslations.com/translate/dolan.json"


function getTranslationUrl(text){
    return serverUrl + "?"+"text="+ text
}

function errorHandler(error){
    console.log("error occured",error);
    alert("issue with server.Please try after some time!!");

}

function clickHandler() {
    var inputText = txtInput.value;
    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText;
        })
        .catch(errorHandler)
}
buttonHandler.addEventListener("click", clickHandler);
