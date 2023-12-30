        const quotes= document.getElementById("quotes");
        const author= document.getElementById("author");
        let realData="";

        // function defination to generate random number
        const getNewQuotes= ()=>{
            const rnum= Math.floor(Math.random()*10); // 10 is multiplied to get integer number and math.floor() is used to neglect decimal value
            quotes.innerText= `${realData[rnum].text}`; // text inside quotes is added using innerText and literal template
            author.innerText= `${realData[rnum].author}`;
        }
       const getQuotes= async()=>{
        const api= "https://type.fit/api/quotes";
        try {
            let data= await fetch(api);
            // to convert readable stream into json object
             realData= await data.json();

             // function call to get random number
             getNewQuotes();
            //console.log(realData.length);
        } catch (error) {
            
        }
       };
       getQuotes();
       
   