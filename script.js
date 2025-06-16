let inputWord = document.getElementById('inp-word');
let searchBtn = document.getElementById('search-btn');
let head = document.querySelector('h3');
let volume = document.querySelector('i');
let wordMeanin = document.querySelector('.word-meanin');
let wordExample = document.querySelector('.wold-example');

let data = JSON.parse(localStorage.getItem("type")) ||[] ;
  let datanew={
    "book": { translation: "كتاب", example: "I read a **book** every night." },
    "car": { translation: "سيارة", example: "My **car** is very fast." },
    "apple": { translation: "تفاحة", example: "I like eating an **apple** every day." },
     "كلب" : { translation: "dog", example: "I like my dog" },
};



searchBtn.onclick = function () {
    localStorage.setItem("type", JSON.stringify(datanew));
    showdata();
        inputWord.value="";
       
};

function showdata() {
    let word = inputWord.value.toLowerCase();

    if (datanew[word]) {
        head.textContent = word;
        wordMeanin.textContent = datanew[word].translation;
        wordExample.textContent = datanew[word].example;
    } else {
        head.textContent = "الكلمة غير موجودة";
        wordMeanin.textContent = "";
        wordExample.textContent = "";
    }
       
}
 
    volume.onclick = function () {
        let text = head.textContent;
        if (text && text !== "الكلمة غير موجودة") {
            let utterance = new SpeechSynthesisUtterance(text);
             utterance.lang = 'en-US';
             utterance.lang = 'ar-SA';

            speechSynthesis.speak(utterance);
        }
    }