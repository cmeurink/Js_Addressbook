showAllItems();
const contactDiv = document.getElementById('contactContainer');

function showAllItems () {
    const url = "https://randomuser.me/api/?results=20&nat=NL";
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {    
        for (let i = 0; i < myJson.results.length; i++) {
            const element = myJson.results[i];
            const link = `<a class='contact' onclick="getPersonFromLocalStorage('person${i}')" href=#><img src='${element.picture.thumbnail}' /><p>${element.name.first}  ${element.name.last}</p></a>`;
            contactDiv.innerHTML += link;
            localStorage.setItem(`person${i}`, JSON.stringify(element));
        }
        console.table(myJson.results[0]);
    });
}

function getPersonFromLocalStorage(id) {
    let person = JSON.parse(localStorage.getItem(id));
    console.table(person.name);
    let userInfo = document.getElementById('userInfo');
    userInfo.innerHTML = "";
    userInfo.innerHTML += `
        <img src="${person.picture.large}" alt="Picture of person">
        <div class="info">
            <h1>${person.name.first} ${person.name.last}</h1>
            <table>
                <tr>
                    <th>Phone number</th>
                </tr>
                <tr>
                    <td>${person.cell}</td>
                </tr>
                <tr>
                    <th>E-mail address</th>
                </tr>
                <tr>
                    <td>${person.email}</td>
                </tr>
                <tr>
                    <th>Address</th>
                </tr>
                <tr>
                    <td>${person.location.street}</td>
                </tr>
            </table>
        </div>
    `;
 }

