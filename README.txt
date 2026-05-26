** För administratören:

* Starta projektet
    npm run dev

* Släppa en ny utgåva av sidan live
1. Se till att du står i rätt branch
Innan du börjar koda, kontrollera att du inte råkar stå i main.

git checkout riktig-kod

2. Gör dina ändringar
Öppna filerna i VS Code, ändra texter, lägg till bilder eller vad du nu vill göra. Spara filerna som vanligt.

3. Spara och skicka upp (Detta triggar Vercel)
Nu gör du en vanlig "push". Så fort GitHub tar emot din kod kommer Vercel att se det och börja bygga din sida automatiskt.

git add .
git commit -m "Beskrivning av vad du ändrat (t.ex. Uppdaterat rubriken)"
git push origin riktig-kod

Hur ser jag att det fungerar?
1. Gå till din Vercel Dashboard.
2. Du kommer se att det dyker upp en rad där det står "Building...".
3. När den blir grön (Ready) är dina ändringar live på historiska-roster.vercel.app.
