fetch("https://api.covid19api.com/summary")
.then(response => response.json())
.then(data => getData(data));   //data => console.log(data) je korisno napraviti prvo čisto da u inspectu vidimo jel nam je api fetchan uspješno

function getData(data) {
    const source = document.getElementById("covid-list").innerHTML;  //oblik svega ovog što pišemo možemo vidjeti unutar dokumentacije handlebars template-a
    const template = Handlebars.compile(source);
    const context = {
        apiData: data.Countries    //apiData može biti bilo koji žnj naziv
    };
    const html = template(context);
    document.getElementById("result").innerHTML = html;
}
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')



function alert(message, type) {
  var wrapper = document.createElement('div');
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper);
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert(ajde, "success");
  });
}
// const ajde = document.querySelectorAll("switch").style.display = "inherit"; evo ovako sam pokušao to napraviti i onda napraviti da 
// alert pokrene ovu varijablu. iako pokušao sam ovo direkt ubaciti u alert ali klikom na button mi se prikaže riječ inherit