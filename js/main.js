showAllItems();
const contactDiv = document.getElementById('contacts');

function showAllItems () {
    const url = "https://randomuser.me/api/?results=50";
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {    
        console.log(myJson.results);
        for (let i = 0; i < myJson.results.length; i++) {
            const element = myJson.results[i];
            const link = "<a class='contact' onclick='toggle_visibility(`contactInfo_" + i + "`)' href=#>" + element.name.first + " " + element.name.last + "</a>";
            // this.addEventListener('click', toggleInfo(this));
            contactDiv.innerHTML += "<div id='contactInfo_" + i + "' class='contactInfo '> <a class='closeButton' href=# onclick='toggle_visibility(`contactInfo_" + i + "`)'>X</a><h1>" + element.name.first + " " + element.name.last + "</h1> <table><tr><th>Address</th><th>Phone number</th><th>Age</th></tr> <tr><td>" + element.location.street + "</td><td>" + element.phone + "</td><td>" + element.dob.age + "</td></tr></table><img src='" + element.picture.large + "'</div>";
            contactDiv.innerHTML += link;
        }

    })
    // .then(function(){
    //     document.getElementsByClassName('contact').addEventListener('click', toggleInfo(document.getElementById('contactToggle').dataset.contactId));
    // });
}

function toggle_visibility(id) {
    console.log(id);
    document.getElementsByClassName('contactInfo').visibility = 'hidden';
    
    var e = document.getElementById(id);
    if(e.style.visibility == 'visible')
       e.style.visibility = 'hidden';
    else
       e.style.visibility = 'visible';
 }

function toggleInfo(id){
    console.log(id);
    let divToToggle = document.getElementsByClassName("contactInfo_" + id);
    console.log("divToToggle: "+divToToggle);
}

