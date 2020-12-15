
document.getElementById("button1").addEventListener("click", function aleatoire () {
    let name1 = ["Johnny Halliday", "Donald Trump", "Elizabeth II ", "Marylin Monroe", "Didier Deschamps", "Christiano Ronaldo"];
    let object = ["raquette", "balaie", "brosse à dent", "parapluie", "marteau", "table de tennis", "chaise"];
    let temperature = ["froid", "chaud", "nuageux", "pluvieux", "orageux"];
    let location = ["Paris", "Cannes", "Nord", "Marseille", "Bretagne"];
    let verb = ["chanter", "manger", "sauter", "courir", "dormir"];
    let name = document.getElementById("input1").value;
    name1 = name1[Math.floor(Math.random() * name1.length)];
    object = object[Math.floor(Math.random() * object.length)];
    temperature = temperature[Math.floor(Math.random() * temperature.length)];
    location = location[Math.floor(Math.random() * location.length)];
    verb = verb[Math.floor(Math.random() * verb.length)];

    let text = document.createElement("p");
    text.style.marginTop = "20px";
    text.innerHTML = "Heyy, je m'appelle " + name + ", j'ai un background à vous raconté. C'était un Vendredi, il faisait " + temperature + ", je partais en vacance à/en/dans le " + location + ". Je m'étais arrêté dans une aire d'autoroute pour " + verb + ", en sortant de ma voiture, au loin j'avais remarqué " + name1 + ", habillé en romain sur un cheval blanc, je m'approchais pour mieux voir et d'un coup il/elle sorta de sa poche une/un " + object + " et me le/la lanca et là, la guerre était déclaré, on c'était mis à lancer plein d'objets improbables. J'ai fini par le/la mettre K.O., c'était drôle mais ce n'était q'un rêve.";
    text.style.fontSize = "17px";
    document.getElementById("container").appendChild(text);
});

