Palautus sisältää kuvat (t80), 'db.json' ja 'public' ja 'src', jossa tehtävät 81-86, kaikki yhdellä html-sivulla, sama App.js
(Löytyy myös täältä: https://github.com/SeijaLauronen/react2)
Tee tarvittaessa uusi react-appi komentokehoitteessa, ja korvaa sitten public ja src kansiot:
	npx create-react-app testapp
	cd testapp
	npm install react-router-dom
Käynnistä:
	npm start
React sovellus käynnistyy selaimeen	http://localhost:3000/

Kansio, johon kopioit tiedoston 'db.json' pitää olla ajettuna
   npm install -g json-server	
ja json-serveri pitää käynnistää joko:
   json-server --watch db.json --port 3004
tai viiveen näkymiseksi tehtävässä 82:
   json-server --watch db.json --port 3004 --delay 4000

db.json sisältää "taulun" 'asiakkaat' lisäksi muitakin 'tauluja'. 

-------------------------------------
80: Kuvat: get, add ja delete, numeroitu kokeilujärjestyksessä, myös epäonnistuneet kutsut
81: Haku, 82: Loading..., 83: Hakuehdoilla ei löytynyt dataa, 84: Poisto 85:Router 86: Virhekäsittely. Koodissa on 2 eri vaihtoa toteutukselle, joista toinen on nyt kommentoitu.
Vielä jäi ratkaisematta, kuinka routerin kanssa saisi välitettyä erroboundarin sisälläkin match-parametrin...
Ylimääräisiä tiedostoja on mm. edeltävistä harjoituksista ja epäonnistuneista kokeiluista
TODO: 
*virhekäsittely, jos esim json-server ei ole käynnissä tms





