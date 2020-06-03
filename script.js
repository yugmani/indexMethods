let the_text = "Cool Cruising Car";
let indexEl = document.getElementById("index");
let lastindexEl = document.getElementById("last_index");
let html = `<p>text = "<strong>Cool Cruising Car"</strong><br><br>`;
let ht = `<p>text = "<strong>Cool Cruising Car"</strong><br><br>`;

function indexPosition(string){
    let position = the_text.indexOf(string);
    if (position !== -1){
    html += `The character <em>${string}</em> is at position:`;
    html += `<strong> ${position}</strong>.</p>`;
    
    }
    else {
        html += `Your character ${string} is not in the "${the_text}". So position: <strong>${position}</strong></p>`;
    }
    indexEl.innerHTML = html;
}

function lastCharacter(string1){
    let lastPosition = the_text.toLowerCase().lastIndexOf(string1);
    if (lastPosition !== -1){
    ht += `The last instance of `;
    ht += `<em>${string1}</em> character is at <strong>${lastPosition}</strong> position.</p>`;
    }
    else  {
        ht += `Your character ${string1} is not in the "${the_text}". So position:<strong>${lastPosition}</strong></p>`;
    }
    lastindexEl.innerHTML = ht;
}

indexPosition("l");
indexPosition("y");
indexPosition("a");
indexPosition("u");
indexPosition("r");

lastCharacter("c");
lastCharacter("i");
lastCharacter("x");