
let beers = []; 
let out = document.getElementById("output");
let infoDiv = document.getElementById("infoDiv");
let oInfo;

function fInitialize() {
    console.clear();
    fLoadInfo();
    out.innerHTML = "<i>Output HTML</i>";
    infoDiv.innerHTML = "<i>Opbouw output</i>";
}

function fLoadInfo() {
    axios.get("../pm_api.json")
        .then((response) => {
            // console.log("response =", response);
            oInfo = response.data.oInfo;
            //console.log("oInfo =", oInfo);
        })
        .catch(function (error) {
            console.log("error=", error);
        });
}

function fLoadJson(weergave) {
    console.clear();
    let url = 'https://15euros.nl/api/bier_basic.php';
    //console.log("in fLoadJson. URL = " + url);
    axios.get(url)
        .then((response) => {
            let beers = response.data;
            //console.log("beers 1 =", beers);

            fShow(beers, weergave)   
        })
        .catch(function (error) {
            console.log("error=", error);
        });
}
// fLoadJson('test');

function fShow(beers, weergave) {
    console.log("beers A =", beers); console.log("weergave =", weergave); console.log("oInfo =", oInfo);
    out.innerHTML = "<h3>Biertjes (weergave: " + weergave + ")</h3>";
    let info = "<h3>Opbouw output:</h3><ul>";
    oInfo[weergave].forEach(function (item, index) {
        info += "<li>" + item + "</li>";
    });
    info += "</ul>";
    infoDiv.innerHTML = info;

    if (weergave == 'naam') fShowNaam(beers);
    if (weergave == 'tabel') fShowTabel(beers);
    if (weergave == 'tabel_obj') fShowTabelObjBuild(beers);
}

function fShowNaam(beers) {
    let html = "";
    beers.forEach(function (beer, index) {
        html += index + ") " + beer.naam + ", " + beer.brouwer + "<br>";
    });
    out.innerHTML += html;
}

function fShowTabel(beers) {
    // zet de veldnamen van het eerste biertje in een array
    let aFields = Object.keys(beers[0]);
    console.log("aFields = ", aFields);

    let html = "<table class='tblA dark'>";

    // schrijf headers in HTML
    html += "<tr>";
    aFields.forEach(function (field, index) {
        html += "<th>" + field + "</th>";
    });
    html += "</tr>";

    beers.forEach(function (beer, index) {
        html += "<tr>";
        aFields.forEach(function (field, index) {
            html += "<td>" + beer[field] + "</td>";
        });
        html += "</tr>";
    });
    html += "</table>";

    out.innerHTML += html;
}

function fShowTabelObjBuild(beers) {
    // zet de veldnamen van het eerste biertje in een array
    let aFields = Object.keys(beers[0]);
    console.log("aFields = ", aFields);

    // maak table object aan en add de class 
    const tbl = document.createElement("table");
    tbl.classList.add("tblA");

    // schrijf headers in HTML
    let row, cel, text;
    row = document.createElement("tr");
    aFields.forEach(function (field, index) {
        cel = document.createElement("th");
        text = document.createTextNode(field);
        cel.appendChild(text);

        row.appendChild(cel);
    });
    tbl.appendChild(row);

    beers.forEach(function (beer, index) {
        row = document.createElement("tr");
        aFields.forEach(function (field, index) {
            cel = document.createElement("td");
            text = document.createTextNode(beer[field]);
            cel.appendChild(text);

            row.appendChild(cel);
        });
        tbl.appendChild(row);
    });
    // html += "</table>";


    out.append(tbl);
    fTijdStop();
}

//onderstaand object met info stond eerst hard in deze code maar is verhuist naar de "poor-men"-API: pm_api.js
// De API is "poor-men" omdat de JSON die deze oplevert meteen hard in de JS staat en niet via AJAX opgehaald wordt uit een DB

/* oInfo = {
    "naam": [
        "weergave van naam en brouwer",
        "ophalen bier-tabel via Axios",
        "opbouw html var met JS",
        "vullen van output-div via <i>innerHTML</i>"
    ],
    "tabel": [
        "weergave van complete biertabel",
        "ophalen bier-tabel via Axios",
        "headers: haalt veldnamen uit het eerste bier-row",
        "opbouw html var met JS",
        "vullen van output-div via <i>innerHTML</i>"
    ],
    "tabel_obj": [
        "weergave van complete biertabel via objectopbouw van tabel met plain JS",
        "ophalen bier-tabel via Axios",
        "headers: haalt veldnamen uit het eerste bier-row",
        "opbouw objecten: via document.createElement",
        "aan element <i>table</i> append je element <i>tr</i>, daaraan een <i>td</i>, etc",
        "aan een <i>td</i> append je een <i>textNode</i> met de html-inhoud",
        "vullen van output-div via <i>append van table aan output-div</i>"
    ],
} */
