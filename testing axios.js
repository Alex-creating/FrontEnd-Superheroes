function displayObject() {

    axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
        .then((response) => {
            console.log(response);
            showObjects(response.data);
        }).catch((error) => {
            console.log(error);
        });
}

const squadList = document.getElementById("display");
const titleList = document.getElementById("title");

function showObjects(data) {
    const newObject = document.createElement("pre");
    newObject.className = "card-m5";
    newObject.innerText = "Squad name: " + data.squadName
        + "\nHome Town: " + data.homeTown
        + "\nFormed: " + data.formed
        + "\nSecret Base: " + data.secretBase
        + "\nActive: " + data.active
        + "\n\nMembers: ";
    titleList.appendChild(newObject);
    showMembers(data);
}

function showMembers(squad) {
    for (let p of squad.members) {
        const newMember = document.createElement("pre");
        const newMemberDetails = document.createElement("pre");
        newMemberDetails.className = "card-text";
        newMember.className = "card-body";
        
        newMember.innerText = "\t" + p.name;
        newMemberDetails.innerText = "\t" + "Age: " +p.age
         + "\n\t" + "Real name: " + p.secretIdentity
         +  "\n\t" + "Powers: " + "\n\t"+p.powers ;
    

        squadList.appendChild(newMember);
        squadList.appendChild(newMemberDetails);
    }
}