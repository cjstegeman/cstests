
let beers = [];
let currentDate, timestart, timestop;   
let out = document.getElementById("output");
let infoDiv = document.getElementById("infoDiv");

function fLoadJson(weergave) {
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
    //console.log("beers A =", beers);
    out.innerHTML = "<h3>Biertjes (weergave: " + weergave + ")</h3>";
    let info = "<h3>Opbouw output:</h3><ul>";
    oInfo[weergave].forEach(function (item, index) {
        info += "<li>" + item + "</li>";
    });
    info += "<ul>";
    infoDiv.innerHTML = info;

    if (weergave == 'naam') fShowNaam(beers);
    if (weergave == 'tabel') fShowTabel(beers);
    if (weergave == 'tabel_obj') fShowTabelObjBuild(beers);
}

function fReset() {
    out.innerHTML     = "<i>Output HTML</i>";
    infoDiv.innerHTML = "<i>Opbouw output</i>";
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

    let html = "<table class='tblA'>";

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

oInfo = {
    naam: [
        "weergave van naam en brouwer",
        "ophalen bier-tabel via Axios",
        "opbouw html var met JS",
        "vullen van output-div via <i>innerHTML</i>"
    ],
    tabel: [
        "weergave van complete biertabel",
        "ophalen bier-tabel via Axios",
        "headers: haalt veldnamen uit het eerste bier-row",
        "opbouw html var met JS",
        "vullen van output-div via <i>innerHTML</i>"
    ],
    tabel_obj: [
        "weergave van complete biertabel via objectopbouw van tabel met plain JS",
        "ophalen bier-tabel via Axios",
        "headers: haalt veldnamen uit het eerste bier-row",
        "opbouw objecten: via document.createElement",
        "aan element <i>table</i> append je element <i>tr</i>, daaraan een <i>td</i>, etc",
        "aan een <i>td</i> append je een <i>textNode</i> met de html-inhoud",
        "vullen van output-div via <i>append van table aan output-div</i>"
    ],
}