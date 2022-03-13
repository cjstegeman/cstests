let out = document.getElementById("output");
let infoDiv = document.getElementById("infoDiv");
let oInfo;

let stdsA = [
    { "naam": "Son",    "groep": "SD2A", "fav": "backend"  },
    { "naam": "Lucas",  "groep": "SD2B", "fav": "frontend" },
    { "naam": "Tommy",  "groep": "SD2A", "fav": "backend"  },
    { "naam": "Simon",  "groep": "SD2A", "fav": "frontend" },
    { "naam": "Oskar",  "groep": "SD2B", "fav": "frontend" },
    { "naam": "Jesse",  "groep": "SD2B", "fav": "backend"  },
    { "naam": "Sven",   "groep": "SD2A", "fav": "frontend" },
    { "naam": "Fabian", "groep": "SD2B", "fav": "backend"  },
    { "naam": "Dylan",  "groep": "SD2B", "fav": "frontend" },
];

let stdsB = [
    { 
        "groep": "SD2A",
        "std": [
            { "naam": "Son",   "fav": "backend"  },
            { "naam": "Tommy", "fav": "backend"  },
            { "naam": "Simon", "fav": "frontend" },
            { "naam": "Sven",  "fav": "frontend" },
        ]  
    }, {
        "groep": "SD2B",
        "std": [
            { "naam": "Lucas",  "fav": "frontend" },
            { "naam": "Oskar",  "fav": "frontend" },
            { "naam": "Jesse",  "fav": "backend"  },
            { "naam": "Fabian", "fav": "backend"  },
            { "naam": "Dylan",  "fav": "frontend" },
        ]
    }
]

function fInitialize() {
    console.clear;
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

function fShow(weergave) {
    //console.log("stdsA =", stdsA); console.log("stdsB =", stdsB); console.log("weergave =", weergave); console.log("oInfo =", oInfo);
    out.innerHTML = "<h3>Studenten (weergave: " + weergave + ")</h3>";
    let info = "<h3>Opbouw output:</h3><ul>";
    oInfo[weergave].forEach(function (item, index) {
        info += "<li>" + item + "</li>";
    });
    info += "</ul>";
    infoDiv.innerHTML = info;

    if (weergave == 'table_flat') fShowFlatTable();
    if (weergave == 'table_nested') fShowNestedTable();
    if (weergave == 'flat2nestedA') fShowFlatTable2Nested();
    if (weergave == 'flat2nestedB') fShowFlatTable2NestedB();
}

// function fGetUL() krijgt een (nested) array of object mee (=arr_obj) en plaatst de inhoud daarvan in een (nested) <ul>-<li> structuur
function fGetUL(arr_obj) {
    let html = "<ul style='margin-top:5px;'>";

    if (Array.isArray(arr_obj)) { // als arr_obj een array is:
        arr_obj.forEach(function (item, index) {
            // test of het item uit de array op zich ook weer een array of object is
            if (typeof (item) == "object" || Array.isArray(item) ) {
                //zo ja: voer deze dan weer in fGetUL()
                html += "<li>" + index + ": " 
                    html += fGetUL(item) 
                html += "</li>";
            }
            else {
                //zo nee: zet de inhoud dan in een <li>
                html += "<li>" + index + ": " + item + "</li>"; // komt niet voor..
            }
        });
    }
    else if (typeof (arr_obj) == "object") { // als arr_obj een object is:
        Object.keys(arr_obj).forEach(function (objKey, index) {
            if (typeof (arr_obj[objKey]) == "object" || Array.isArray(arr_obj[objKey])) {
                html += "<li>" + objKey + " =&gt; ";
                    html += fGetUL(arr_obj[objKey]);
                html += "</li>";
            } else {
                html += "<li>" + objKey + " =&gt; " + arr_obj[objKey] + "</li>";
            }
        })
    }
    else {

    }
    html += "</ul>";
    return html;
}

function fShowFlatTable() {
    out.innerHTML += fGetUL(stdsA);
}

function fShowNestedTable() {
    out.innerHTML += fGetUL(stdsB);
}

function fShowFlatTable2Nested() {
    let stdsAnew = {}
    stdsA.forEach(function (oStd, index) { // loop door studenten-array heen
        if (stdsAnew[oStd.groep]) // als (bijv.) het object stdsAnew.SD2A al bestaat
            stdsAnew[oStd.groep].push({ "naam": oStd.naam, "fav": oStd.fav }) // zo ja: push dan een nieuw student object in de array van stdsAnew.SD2A
        else
            stdsAnew[oStd.groep] = [{ "naam": oStd.naam, "fav": oStd.fav }]; // zo nee: maak dan van stdsAnew.SD2A een nieuwe array met 1 element: het object van die student
    });
    console.log("stdsAnew = ", stdsAnew);
    out.innerHTML += fGetUL(stdsAnew);
}

function fShowFlatTable2NestedB() {
    let stdsAnew = {}
    stdsA.forEach(function (oStd, index) { // loop door studenten-array heen
        if (stdsAnew[oStd.groep]) { // als (bijv.) het object stdsAnew.SD2A al bestaat
            if (stdsAnew[oStd.groep][oStd.fav]) { // als (bijv.) het object stdsAnew.SD2A.backend al bestaat
                stdsAnew[oStd.groep][oStd.fav].push(oStd.naam) // zo ja: push dan een nieuwe studentnaam in de array van stdsAnew.SD2A.backend
            } else {
                stdsAnew[oStd.groep][oStd.fav] = [oStd.naam]; // zo nee: maak dan van stdsAnew.SD2A.backend een nieuwe array met 1 studentnaam
            }
        } else {  // als stdsAnew.SD2A nog niet bestaat
            stdsAnew[oStd.groep] = {};  // maak dan van stdsAnew.SD2A een nieuw object
            stdsAnew[oStd.groep][oStd.fav] = [oStd.naam]; // maak stdsAnew.SD2A.backend aan vul deze in met een array met die student
        }
    });
    console.log("stdsAnew = ", stdsAnew);
    out.innerHTML += fGetUL(stdsAnew);
}