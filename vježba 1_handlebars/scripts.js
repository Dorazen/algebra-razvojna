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