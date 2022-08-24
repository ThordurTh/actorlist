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

    const template = document.querySelector("template").content;

    const copy = template.cloneNode(true);

    copy.querySelector(".popup").textContent = name.fullname;
    copy.querySelector(".popuptext").textContent = name.movie;
   
    // function firstName() {
    //     let actor = name.fullname;
    //     let firstName = actor.split(" ")[0]
    //     console.log(firstName)
    //     copy.querySelector(".popup").classList.add(firstName);
    // }
    // firstName();

    const parent = document.querySelector("main");
    parent.appendChild(copy);   
}