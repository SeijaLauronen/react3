Palautus sisältää kuvat (t80), 'db.json' ja 'public' ja 'src', jossa tehtävät 81-86, kaikki yhdellä html-sivulla, sama App.js
(Löytyy myös täältä: https://github.com/SeijaLauronen/react3)
Tee tarvittaessa uusi react-appi komentokehoitteessa, ja korvaa sitten public ja src kansiot:
(router on react 2 tehtäviin, sitä ei nyt react 3:ssa tarvita)
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






