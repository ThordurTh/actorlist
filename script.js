function showpopup() {
    var popup = document.querySelector(".popuptext");
    popup.classList.toggle("show");
  }

  
    fetch('actors.json')
    .then(function(res) {
        return res.json();
    })
    .then(function(data){
        handleNames(data)
    });

function handleNames(data){
    console.log(data);
    data.forEach(showName);
}

function showName(name) {
    //grab the template
    const template = document.querySelector("template").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content
    copy.querySelector(".popup").textContent = name.fullname;
    copy.querySelector(".popuptext").textContent = name.movie;
   
    function firstName() {
        let actor = name.fullname;
        let firstName = actor.split(" ")[0]
        console.log(firstName)
        copy.querySelector(".popup").classList.add(firstName);
    }
    firstName();

    // copy.querySelector(".popup").classList.add(name.fullname);


    //grab parent
    const parent = document.querySelector("main");
    //append
    parent.appendChild(copy);

    
}

// function makeCard() {
//     const templateElement = document.querySelector("template").content;

//     const myClone = templateElement.cloneNode(true);
    
//     myClone.querySelector(".popup").textContent = "Hi Mom";
//     myClone.querySelector(".popuptext").textContent = "Hi Dad";

    
//     const parentElement = document.querySelector("main");
    
//     parentElement.appendChild(myClone);
// }

// makeCard();