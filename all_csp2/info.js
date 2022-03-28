
    let aInfo = [
        {
            "title": "axios-base",
            "file"  : "axios_base.html",
            "info" : [
                "AJAX-(/HTTP-)request via <span class='special'>Axios</span>", 
                "weergave van naam en brouwer",
                "opbouw html var met JS",
                "vullen van output-div via <i>innerHTML</i>"
            ],
            "oefeningen" : [
                "Geef de velden in een tabel weer",
                "Voeg zelf in JS of in de HTML, statisch de headers (&lt;th&gt;) toe",
                "kijk of je de <span class='special'>for-each</span> loop kan vervangen voor een gewone <span class='special'>for-loop</span>. Welke heeft jou voorkeur?",
                "zorg dat de nummering niet bij 0, maar bij 1 begint",
                "maak dezelfde opdracht als hierboven met de <span class='special'>Fetch-API</span> van JS zelf (ipv. Axios)"
            ]
        },
        {
            "title": "Axios-bier-headers ",
            "file": "axios_headers_from_fields.html",
            "info": [
                "<span class='special'>ophalen de veldnamen</span> van de biertabel",
                "ophalen bieren via Axios",
                "weergeven van veldnamen en biertjes via <span class='special'>innerHTML</span>"
            ],
            "oefeningen": [
                "Geef velden in een tabel weer",
                "Voeg de veldnamen als headers (&lt;th&gt;) toe",
            ]
        },
        {
            "title": "Axios-nested-JSON ",
            "file": "axios_nested_json.html",
            "info": [
                "na ophalen van de biertabel, <span class='special'>unieke array</span> met brouwers opbouwen",
                "weergeven van alle brouwers"
            ],
            "oefeningen": [
                "<span class='special'>sorteer de array</span> met brouwers alfabetisch",
                "breid je script uit: haal een <span class='special'>unieke array met objecten</span>:",
                "aBrouwers[0] = <br>"+
                "{<br>"+
                "&nbsp; &nbsp; \"brouwer\" = \"brouwernaam\", <br>"+
                "&nbsp; &nbsp; \"biertjes\" = \"[.., ..] (array_alle_biertjes_brouwer)\", <br>"+
                "}",
            ]
        },
        {
            "title": "jquery-object-build",
            "file": "jquery_obj_build.html",
            "info": [
                "AJAX-(/HTTP-) request via jQuery",
                "<span class='special'>omzetten flat-JSON naar nested</span>",
                "opbouw html &lt;ul&gt; in variable met JS",
                "<span class='special'>opbouw html  &lt;ul&gt;-<i>object</i> met jquery</span>",
            ],
            "oefeningen": [
                "Geef bovenstaande in een tabel weer",
                "\"nest\" de JSON nog dieper: verzamel onder de gisting (alle biertjes van) de brouwers",
                "geef deze in een UL-structuur weer"
            ]
        },
        {
            "title": "static JSON",
            "file": "static_json.html",
            "info": [
                "geen gebruik van API, maar <span class='special'>statische JSON</span> in JS opgebouwd",
                "schrijven van \"platte\" JSON naar HTML",
                "schrijven van \"geneste\" JSON naar HTML",
                "gebruik van algemene function voor uitlezen van objects/arrays, flat/nested",
            ],
            "oefeningen": [
                "Maak een script dat de platte JSON inleest en in een HTML tabel weergeeft",
                "zie hierboven maar dan met een geneste tabel",
                "zet de statische JSON in een aparte file: een <span class='special'>poor-men-API</span>",
                "haal met de <span class='special'>Fetch-API</span> van JS zelf de poor-men-API op (verder zelfde opdracht)"
            ]
        },

        /*
        
        "tabel_obj": [
            "weergave van complete biertabel via objectopbouw van tabel met plain JS",
            "ophalen bier-tabel via Axios",
            "headers: haalt veldnamen uit het eerste bier-row",
            "opbouw objecten: via document.createElement",
            "aan element <i>table</i> append je element <i>tr</i>, daaraan een <i>td</i>, etc",
            "aan een <i>td</i> append je een <i>textNode</i> met de html-inhoud",
            "vullen van output-div via <i>append van table aan output-div</i>"
        ],
        "timer": [
            "zelfde weergave als die van \"plain js\" maar nu met een timer op de verschillende functies"
        ],
        "table_flat": [
            "json object als variabele in script gedefinieerd",
            "\"platte\" tabel / JSON =&gt; array van studenten zonder sub-arrays",
            "het is veel werk om deze platte tabel weer te geven als nested list van klas =&gt; student",
            "makkelijker dan is: zet json object om in gewenste nesting"
        ],
        "table_nested": [
            "json object als variabele in script gedefinieerd",
            "\"geneste\" tabel / JSON =&gt; array van groepen met daarin sub-arrays van studenten",
            "geneste JSON-structuur is makkelijk te vertalen naar geneste HTML (bijv. een <ul>)"
        ],
        "flat2nestedA": [
            "voor weergave van geneste ul-structuur vanuit platte JSON:",
            "- zet platte json studenten om naar geneste: groep =&gt; student",
            "- geef geneste JSON gemakkelijk weer als HTML"
        ],
        "flat2nestedB": [
            "Als nestedB maar dan 1 stap dieper nog:",
            "- geen: groep =&gt; student",
            "- maar: groep =&gt; student =&gt; fav"
        ]
    },
    */


]