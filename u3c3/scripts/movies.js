// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let search = async() => {
    let query = document.getElementById("input").value;
   fetch(`http://www.omdbapi.com/?apikey=ce042f61&s=${query}`)
   .then(function(data){
       return data.json();
       
   })
   .then(function(data){
       console.log(data.Search);
       mapData(data.Search);
   })
   .catch(function(err){
       console.log(err)
   })
}


function mapData(data){
    let list = document.getElementById("movies");
    list.innerHTML=null;
    console.log(data);
    data.forEach(function (el){
        var cont =document.createElement("div")
        let title = document.createElement("p");
        title.setAttribute("id","title");
        title.innerHTML= el.Title;
        let poster = document.createElement("img");
        poster.setAttribute("id","poster");
        poster.src=el.Poster;
        let year = document.createElement("p");
        year.innerHTML = el.Year;
        var btn = document.createElement("button");
        btn.innerText="Book Now";

        cont.append(poster,title,year,btn)
        list.append(cont);
        btn.onclick =(x)=>{ 
            bookPage(moviePage)
            
        }
    });
    let moviePage ={
        Title,
        Poster,
    };
    

    
}

let bookPage=(x)=>{
    
    window.location.href="checkout.html";
    localStorage.setItem("MovieDeatils",JSON.stringify(x))
}

