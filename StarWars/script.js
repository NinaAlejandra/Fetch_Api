// Lyssnar på klickhändelsen på knappen och kör funktionen getApi
document.getElementById("submitButton").addEventListener("click", getApi);

//Funktion för att rensa inputfältet så att man slipper göra det manuellt efter varje sök, inkluderade name som prop pga detta.
const clearInput = () => {
  document.getElementById("characterName").value = "";
};

function getApi() {
  // Hämta värdet från input-fältet
  const characterName = document.getElementById("characterName").value;

  // Kontrollera om ett namn har angetts
  if (characterName) {
    // Skapa en fullständig URI med det angivna namnet
    const fullUri = `https://www.swapi.tech/api/people/?name=${characterName}`;

    // Gör en fetch-förfrågan till URI:n
    fetch(fullUri)
      .then((res) => res.json())
      .then((data) => {
        // Plocka ut relevant information och skapa en sträng
        const { name, height, mass, gender, hair_color } =
          data.result[0].properties;
        const outputText = `Name :${name}, Height: ${height}, Mass: ${mass}, Gender: ${gender}, Hair Color: ${hair_color}`;
        // Visa resultatet i output-textrutan
        document.getElementById("output").value = outputText;
      })
      .catch((err) => console.log(err));
  } else {
    // Visa ett felmeddelande om inget namn har angetts
    alert("Please input a character");
  }

  clearInput();
}
