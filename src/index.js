function displayPoem(response) {
    console.log("poem generated");
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
      });
} 

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");

    let apiKey="2046c535afeb092fo82f1d306d8a2b2t";
    let prompt=`User instructions are: Generate a poem about $(instructionsInput.value)`;
    let context=
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic html. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
    let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Generating Poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    let poemElement = document.querySelector("#poem");
       poemElement.classList.remove("hidden");
       poemElement.innerHTML = `<div class="generating">⏳ Generating a love poem about ${instructionsInput.value}</div>`;

    axios.get(apiUrl).then(displayPoem);

}


let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);