let inputWord = document.getElementById('inp-word');
let searchBtn = document.getElementById('search-btn');
let head = document.querySelector('h3');
let volume = document.querySelector('i');
let wordMeanin1 = document.querySelector('.word-meanin1');
let wordExample1 = document.querySelector('.word-example1');
let wordMeanin2 = document.querySelector('.word-meanin2');
let wordExample2 = document.querySelector('.word-example2');
let wordMeanin3 = document.querySelector('.word-meanin3');
let wordExample3 = document.querySelector('.word-example3');
let pos2=document.getElementById("pos2");
let sample2=document.getElementById("sample2");
let pos3=document.getElementById("pos3");
let sample3=document.getElementById("sample3");
let pos1=document.getElementById("pos1");
let sample1=document.getElementById("sample1");
let meaning= document.getElementById("meaning");
let definitions=document.querySelector(".definitions");
let word=document.querySelector(".word");


searchBtn.addEventListener("click",function(){
      
      if(inputWord.value === ""){
           inputWord.style.borderBottom="3px solid red";
           
        }else{
             inputWord.style.borderBottom="3px solid #ae9cff ";
        }

         async function dectionary(){
           try{
            const word=inputWord.value;
            const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
            const response = await fetch(url);

            const data = await response.json();
            meaning.innerText=word;


            if(data[0].meanings[0]?.partOfSpeech  ){
           pos1.innerText=data[0].meanings[0].partOfSpeech;
        }else{
             pos1.innerText="No-partofSpeech";
        }
        
       if(data[0].meanings[1]?.partOfSpeech ){
           pos2.innerText=data[0].meanings[1].partOfSpeech;
        }else{
             pos2.innerText="No-partofSpeech";
        }

       if(data[0].meanings[2]?.partOfSpeech ){
           pos3.innerText=data[0].meanings[2].partOfSpeech;
        }else{
             pos3.innerText="No-partofSpeech";
        }


           if(data[0].meanings[0]?.synonyms && data[0].meanings[0].synonyms.length>0){
           sample1.innerText="/"+ data[0].meanings[0].synonyms;
           }else{
            sample1.innerText ="/ No-synonyms";
           }
        

          if(data[0].meanings[1]?.synonyms &&data[0].meanings[1].synonyms.length>0){
           sample2.innerText="/"+ data[0].meanings[1].synonyms;
           }else{
            sample2.innerText ="/ No-synonyms";
           }

          if(data[0].meanings[2]?.synonyms && data[0].meanings[2].synonyms.length>0 ){
           sample3.innerText="/"+ data[0].meanings[2].synonyms;
           }else{
            sample3.innerText ="/ No-synonyms";
           } 



            if(data[0].meanings[0]?.definitions[0]?.definition){
            wordMeanin1.innerText=data[0].meanings[0].definitions[0].definition;
            wordMeanin1.style.borderBottom="1px solid #ae9cff"
            wordMeanin1.style.padding="5px";
             
        }else{
            wordMeanin1.innerText="No-definition";
            wordMeanin1.style.borderBottom="1px solid #ae9cff"
            wordMeanin1.style.padding="5px";
        }
         if(data[0].meanings[1]?.definitions[1]?.definition){
            wordMeanin2.innerText=data[0].meanings[1].definitions[0].definition;
            wordMeanin2.style.borderBottom="1px solid #ae9cff"
            wordMeanin2.style.padding="5px";
        }else{
            wordMeanin2.innerText="No-definition";
            wordMeanin2.style.borderBottom="1px solid #ae9cff"
            wordMeanin2.style.padding="5px";
        }
         if(data[0].meanings[2]?.definitions[0]?.definition){
            wordMeanin3.innerText=data[0].meanings[2].definitions[0].definition;
            wordMeanin3.style.borderBottom="1px solid #ae9cff"
            wordMeanin3.style.padding="5px";
        }else{
            wordMeanin3.innerText="No-definition";
            wordMeanin3.style.borderBottom="1px solid #ae9cff"
            wordMeanin3.style.padding="5px";
        }
  
       console.log(data);
    }catch{
        alert("Enter a correct word");
    }
}

 definitions.style.display="block";
 word.style.display="flex";

dectionary();

});

    volume .addEventListener("click", () => {
    const word=meaning.innerText;
    if (word) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = "en-US";
        speechSynthesis.speak(utterance);
    }
});



