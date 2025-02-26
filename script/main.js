const clasifyLevels = levelClasify(worklist);
const doomListenersToLoad = [
  {elementId: "business", work: "Business"},
  {elementId: "entertainment", work: "Entertainment"},
  {elementId: "law_enforcement", work: "Law Enforcement"},
  {elementId: "life_of_crime", work: "Life of Crime"},
  {elementId: "medicine", work: "Medicine"},
  {elementId: "military", work: "Military"},
  {elementId: "politics", work: "Politics"},
  {elementId: "pro_athlete", work: "Pro Athlete"},
  {elementId: "science", work: "Science"},
  {elementId: "x-treme_career", work: "X-Treme Career"},
  {elementId: "musician", work: "Musician"},
  {elementId: "slacker", work: "Slacker"},
  {elementId: "slacker", work: "Slacker"},
  {elementId: "paranormal", work: "Paranormal"},
  {elementId: "journalism", work: "Journalism"},
  {elementId: "hacker", work: "Hacker"},
  {elementId: "fashion", work: "Fashion"},
  {elementId: "education", work: "Education"},
  {elementId: "animal_care", work: "Animal Care"},
  {elementId: "culinary", work: "Culinary"},
  {elementId: "circus", work: "Circus"},
];

// {elementId: "", work: ""},
function makeListeners(array){
  array.forEach(function(e) {
    document.getElementById(e.elementId).addEventListener("click", () => {
      workTable(e.work);
    });
    document.getElementById("oc_"+e.elementId).addEventListener("click", () => {
      workTable(e.work);
    });
});
}
document.addEventListener("DOMContentLoaded", function (e) {
  makeListeners(doomListenersToLoad)

  //Nav menu anchor listeners
  document.getElementById("salary").addEventListener("click", () => {
    makeSortedTable(sortLevelsForArgument(clasifyLevels, "salary", "asc"), "Salario");
  });
  document.getElementById("friends").addEventListener("click", () => {
    makeSortedTable(sortLevelsForArgument(clasifyLevels, "friends", "asc"), "Amigos");
  });
  /* 
 document.getElementById("skills").addEventListener("click", () => {
    makeSortedTable(
      sortArgument(
        clasifyLevels,
        skills[0] / 100 +
          skills[1] / 100 +
          skills[2] / 100 +
          skills[3] / 100 +
          skills[4] / 100 +
          skills[5] / 100,
        "des"
      ),
      "Habilidades"
    );
  });

  document.getElementById("salary_hour").addEventListener("click", () => {
    makeSortedTable(
      sortArgument(
        clasifyLevels,
        "salary" / workHoursArgument("begintime", "endtime"),
        "asc"
      ),
      "Salario por horas"
    );
  });
*/
  document.getElementById("about").addEventListener("click", () => {
    about();
  });
  //Trabajos

  mainPage();

  //canvas menu
  document.getElementById("oc_salary").addEventListener("click", () => {
    makeSortedTable(sortLevelsForArgument(clasifyLevels, "salary", "asc"), "Salario");
  });
  document.getElementById("oc_friends").addEventListener("click", () => {
    makeSortedTable(sortLevelsForArgument(clasifyLevels, "friends", "asc"), "Amigos");
  });
  
  /*document.getElementById("oc_skills").addEventListener("click", () => {
    sortTable(
      sortArgument(
        clasifyLevels,
        skills[0] / 100 +
          skills[1] / 100 +
          skills[2] / 100 +
          skills[3] / 100 +
          skills[4] / 100 +
          skills[5] / 100,
        "des"
      ),
      "Habilidades"
    );
  });
  */
  document.getElementById("oc_about").addEventListener("click", () => {
    about();
  });
});

function mainPage() {
  document.getElementById(
    "title"
  ).innerHTML = `<h1>Bienvenido a la pagina para clasificar trabajos en Los Sims 1</h1>`;
  document.getElementById("subtitle").innerHTML = `
            <div class="p-4 d-sm-flex d-md-flex">
                    <div class="sims_div p-4 m-1">
                       <h2 class="center">Conceptos de Adultos</h2>
                       <br>
                       <h4>Cartas de oportunidad y Cambio de carrera</h4>
                       <h5>Algunos niveles de algunos trabajos tienen cartas de oportunidad, De forma nativa cada carrera en el nivel 10 tiene una de cambio de carrera.
                       Esto significa que cuando el sim vaya a trabajar tiene un 12% de que pueda comenzar otra carrera desde un nivel bajo, para evitarlo podemos mantenernos en el nivel 9</h5>
                       <br>
                       <h4>Conseguir un Ascenso</h4>
                       <h5>Para conseguir un ascenso se deben cumplir los requisitos del siguiente nivel al actual e ir a trabajar de buen estado de ánimo así tendrás más posibilidades de ascenso</h5>
                       <br>
                       <h4>Bonificación de Ascenso</h4>
                       <h5>El dinero bonus de ascenso es el nuevo salario multiplicado por 2</h5>                   
                       <br>
                       <h4>Puntos de Habilidad</h4>
                       <h5>Internamente los puntos de habilidad se cuentan de a 100 y no de a 1, esto permite ejemplo: tener 150 puntos de cocina, significa 1 y media barra, a fines practicos las mediremos de a 1 y no 100</h5>
                       <br>
                       <h4>Diferencias</h4>
                       <h5>Algunas cartas de oportunidad no coinciden en la descripción con el efecto dado, según las expansiones instaladas las cartas de oportunidad pueden variar, según el idioma los textos pueden variar, no así los efectos.</h5>
                       <br>
                       <h4>Necesidad Habitación</h4>
                       <h5>La necesidad “habitación” no sufre decaimientos en el trabajo, ya que aunque el sim "no esté en el solar" le sigue afectando la habitación del exterior de la casa, deberías mantener un buen estado del patio, probablemente con una piscina grande para maximizar esa barra.</h5>
                       <br>
                       <h4>Vehículo Null</h4>
                       <h5>Algunos puestos de trabajo no tienen un vehículo asignado, por defecto el juego les asigna uno según la expansión instalada.</h5>                   
                       <br>
                       <h4>Tomar Dias Libres</h4>
                       <h5>Los adultos pueden faltar un día al trabajo sin perderlo, recibirán una llamada de advertencia, pero no tiene consecuencia, si al siguiente día faltan si perderán el trabajo debiendo empezar con otro desde el nivel 1.
                       <br>Entonces puedes trabajar un día si y otro no indefinidamente sin peligro y aprovechar los días libres para hacer amigos, subir habilidades, hacer fiestas, etc...</h5>
                       <br>
                       <h4>Auto compartido</h4>
                       <h5>El auto esperará una hora (entre la hora de llegada y hora de entrada).
                       <br>Puedes ir al trabajo hasta unos pocos segundos antes de que se vaya sin repercusión negativa en el desempeño y así aprovechar más tiempo en la casa para subir necesidades, habilidades, hacer amigos, etc...</h5>
                    </div>
                    <div class="sims_div p-4 m-1">
                        <h2 class="center">Conceptos de niños</h2>
                        <br>             
                       <h4>Bonus de niños</h4>
                       <h5>Los niños que van a estudiar con una nota de A++ tienen un 5% de recibir $100</h5>
                       <br>
                       <h4>Notas de niños</h4>
                       <h5>Los niños suben la nota si al volver de la escuela tienen 40 puntos de animo y bajan la nota si tienen menos de 0 (El animo se mide desde -100 a 100)</h5>                  
                       <br>
                       <h4>Tomar Dias Libres</h4>
                       <h5>Los niños cuando faltan a la escuela pierden un grado entero de nota ejemplo: de A+ a B+, de B- a C- o C a D.
                       <br>Si las notas son buenas pueden faltar varios días sin que se lo lleve la escuela militar, pero siempre hay que monitorizar las notas.</h5>
                       <br>
                       <h4>Subir notas express</h4>
                       <h5>Si recibes la advertencia de la escuela militar pon el juego en pausa, llama por teléfono para ir a ciudad vieja y visita a miss Lucile para con la lectura de manos subir las necesidades del niño, al volver cerca de la entrada compra un telescopio y pon el niño a ver entonces subirán las notas rápidamente, tambien puedes utilizar hechizos de alegria con el Niño.</h5>
                    </div>
            </div>
        `;
}
function workTable(work) {
  document.getElementById("subtitle").innerHTML = ``;
  const actualWork = worklist.filter(
    (select) => select.carrerNameUs === work
  )[0];

  document.getElementById("title").innerHTML =
    `<img class="p-2 m-1"src="img/works/${actualWork.carrerNameUs}.png"><h1 class="m-auto">` +
    actualWork.carrerNameEs +
    " - " +
    actualWork.expansion +
    `</h1><img class="p-2 m-1"src="img/works/${actualWork.carrerNameUs}.png">`;

  let tab = `<div class="sims_div p-3 row">`;
  let content = "";
  //General
  tab += `<button class="nav-link active" id="v-pills-general-tab" data-bs-toggle="pill" data-bs-target="#v-pills-general"
                type="button" role="tab" aria-controls="v-pills-general" aria-selected="true">General</button>`;

  content += `<div class="tab-pane fade show active sims_div p-3" id="v-pills-general" role="tabpanel" aria-labelledby="v-pills-general-tab"
                tabindex="0">
                <div class="list-group-item container text-center col-lg-5 col-md-10 col-sm-12 p-1 mb-3">
    <h1 id="card">General</h1>
</div>
<table class="table table-success table-striped p-5">
<thead>
  <tr>
    <th scope="col">Nivel</th>
    <th scope="col">Nombre</th>
    <th scope="col">Salario</th>
    <th scope="col">Salario/hora</th>
    <th scope="col">Bonificacion</th>
    <th scope="col">Auto</th>
    <th scope="col">Entrada</th>
    <th scope="col">Salida</th>
    <th scope="col">Horas</th>
  </tr>
</thead>
<tbody>`;

  const workLevels = actualWork.levels;
  let count = 1;
  for (const element in workLevels) {
    const level = workLevels[element];
    let bonus = "";
    if (count == 1) {
      bonus = "0";
    } else {
      bonus = level.salary * 2;
    }
    content += `
  <tr>
    <th scope="row">${count}</th>
    <td>${level.nameEs}</td>
    <td>§${level.salary}</td>
    <td>§${Math.round(level.salary / workHours(level))}</td>
    <td>§${bonus}</td>
    <td>${carHour(level.begintime)}</td>
    <td>${level.begintime}</td>
    <td>${level.endtime}</td>
    <td>${workHours(level)}</td>
  </tr>`;
    count += 1;
  }
  content += `</tbody></table></div>`;

  //Requisitos
  tab += `
   <button class="nav-link" id="v-pills-requisitos-tab" data-bs-toggle="pill" data-bs-target="#v-pills-requisitos"
  type="button" role="tab" aria-controls="v-pills-requisitos" aria-selected="false">Requisitos</button>`;

  content += `
  <div class="tab-pane fade sims_div p-3" id="v-pills-requisitos" role="tabpanel" aria-labelledby="v-pills-requisitos-tab"
                tabindex="0"><div class="list-group-item container text-center col-lg-5 col-md-10 col-sm-12 p-1 mb-3">
    <h1 id="card">Requisitos</h1>
</div>
  <table class="table table-success table-striped">
<thead>
  <tr>
    <th scope="col">Nivel</th>
    <th scope="col">Amigos</th>
    <th scope="col">Cocina</th>
    <th scope="col">Mecanica</th>
    <th scope="col">Carisma</th>
    <th scope="col">Fisico</th>
    <th scope="col">Logica</th>
    <th scope="col">Creatividad</th>
    <th scope="col">Habilidad</th>
    <th scope="col">Total</th>
  </tr>
</thead>
<tbody>`;
  count = 1;
  for (const element in workLevels) {
    const level = workLevels[element];
    content += `
<tr>
  <th scope="row">${count}</th>
  <td>${level.friends}</td>
  <td>${level.skills[0] / 100}</td>
  <td>${level.skills[1] / 100}</td>
  <td>${level.skills[2] / 100}</td>
  <td>${level.skills[3] / 100}</td>
  <td>${level.skills[4] / 100}</td>
  <td>${level.skills[5] / 100}</td>
  <td>${totalSkills(level)}</td>    
  <td>${level.friends + totalSkills(level)}</td> 
</tr>`;
    count += 1;
  }
  content += `</tbody></table></div>`;

  //Cansancio por hora
  tab += `<button class="nav-link" id="v-pills-cansanciohora-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cansanciohora"
                type="button" role="tab" aria-controls="v-pills-cansanciohora" aria-selected="false">Cansancio por hora</button>`;

  content += `<div class="tab-pane fade sims_div p-3" id="v-pills-cansanciohora" role="tabpanel" aria-labelledby="v-pills-cansanciohora-tab"
                tabindex="0">
                <div class="list-group-item container text-center col-lg-5 col-md-10 col-sm-12 p-1 mb-3">
    <h1 id="card">Cansancio por Hora</h1>
</div>  
<table class="table table-success table-striped">
<thead>
  <tr>
    <th scope="col">Nivel</th>
    <th scope="col">Hambre</th>
    <th scope="col">Comodidad</th>
    <th scope="col">Higiene</th>
    <th scope="col">Vejiga</th>
    <th scope="col">Energia</th>
    <th scope="col">Diversion</th>
    <th scope="col">Social</th>
    <th scope="col">Total por hora</th>
    <th scope="col">Salario/hora</th>
  </tr>
</thead>
<tbody>`;
  count = 1;
  for (const element in workLevels) {
    const level = workLevels[element];
    content += `
<tr>
  <th scope="row">${count}</th>
  <td>${level.moodChangesPerHour[0]}</td>
  <td>${level.moodChangesPerHour[1]}</td>
  <td>${level.moodChangesPerHour[2]}</td>
  <td>${level.moodChangesPerHour[3]}</td>
  <td>${level.moodChangesPerHour[4]}</td>
  <td>${level.moodChangesPerHour[5]}</td>
  <td>${level.moodChangesPerHour[6]}</td>
  <td>${totalMoodChanges(level)}</td>
  <td>§${Math.round(level.salary / workHours(level))}</td>
</tr>`;
    count += 1;
  }
  content += `</tbody></table></div>`;

  //cansancio por dia
  tab += `<button class="nav-link" id="v-pills-cansanciodia-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cansanciodia"
                type="button" role="tab" aria-controls="v-pills-cansanciodia" aria-selected="false">Cansancio por dia</button>`;

  content += `<div class="tab-pane fade sims_div p-3" id="v-pills-cansanciodia" role="tabpanel" aria-labelledby="v-pills-cansanciodia-tab"
                tabindex="0">
                <div class="list-group-item container text-center col-lg-5 col-md-10 col-sm-12 p-1 mb-3">
    <h1 id="card">Cansancio por dia</h1>
</div>
<table class="table table-success table-striped">
<thead>
<tr>
  <th scope="col">Nivel</th>
  <th scope="col">Hambre</th>
  <th scope="col">Comodidad</th>
  <th scope="col">Higiene</th>
  <th scope="col">Vejiga</th>
  <th scope="col">Energia</th>
  <th scope="col">Diversion</th>
  <th scope="col">Social</th>
  <th scope="col">Total por dia</th>    
  <th scope="col">Horas</th>
  <th scope="col">Puntaje</th>
  <th scope="col">Salario</th>
</tr>
</thead>
<tbody>`;
  count = 1;
  for (const element in workLevels) {
    const level = workLevels[element];
    let hoursDay = workHours(level);
    let totalMood = totalMoodChanges(level);
    content += `
<tr>
<th scope="row">${count}</th>
<td>${level.moodChangesPerHour[0] * hoursDay}</td>
<td>${level.moodChangesPerHour[1] * hoursDay}</td>
<td>${level.moodChangesPerHour[2] * hoursDay}</td>
<td>${level.moodChangesPerHour[3] * hoursDay}</td>
<td>${level.moodChangesPerHour[4] * hoursDay}</td>
<td>${level.moodChangesPerHour[5] * hoursDay}</td>
<td>${level.moodChangesPerHour[6] * hoursDay}</td>
<td>${totalMood * hoursDay}</td>
<td>${hoursDay}</td>
<td>${totalMood * hoursDay * hoursDay}</td>
<td>§${level.salary}</td>
</tr>
`;
    count += 1;
  }
  content += `</tbody></table></div>`;

  //Cartas de oportunidad

  tab += `<button class="nav-link" id="v-pills-cartasoportunidad-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cartasoportunidad"
                type="button" role="tab" aria-controls="v-pills-cartasoportunidad" aria-selected="false">Cartas de oportunidad</button>`;
  content += `<div class="tab-pane fade sims_div p-3" id="v-pills-cartasoportunidad" role="tabpanel" aria-labelledby="v-pills-cartasoportunidad-tab"
                tabindex="0">
<div class="list-group-item container text-center col-lg-8 col-md-10 col-sm-12 p-1 mb-3">
    <h1 id="card" class="p-2">Cartas de oportunidad</h1>
    <h5>Cuando el sim trabaja hay un 12% de obtener la carta por nivel al volver del trabajo.</h5>
</div>
<table class="table table-success table-striped">
<thead>
<tr>
  <th scope="col">Nivel</th>
  <th scope="col">Nombre</th>
  <th scope="col">Descripcion</th>
  <th scope="col">Efecto</th>
</tr>
</thead>
<tbody>`;
  count = 1;
  for (const element in workLevels) {
    const level = workLevels[element];
    if (level.chanceCardEs != "") {
      content += `
<tr>
<th scope="row">${count}</th>
<td>${level.nameEs}</td>
  <td>${level.chanceCardEs}</td>
<td>${level.chanceCardEffectEs}</td>
</tr>`;
    }
    count += 1;
  }
  content += `</tbody></table></div>`;
  //descripcion
  tab += `<button class="nav-link" id="v-pills-descripcion-tab" data-bs-toggle="pill" data-bs-target="#v-pills-descripcion"
                type="button" role="tab" aria-controls="v-pills-descripcion" aria-selected="false">Descripcion</button>`;
  content += `<div class="tab-pane fade sims_div p-3" id="v-pills-descripcion" role="tabpanel" aria-labelledby="v-pills-descripcion-tab"
                tabindex="0">
<div class="list-group-item container text-center col-lg-6 col-md-10 col-sm-12 p-1 mb-3">
    <h1 id="card" class="p-2">Descripcion</h1>
</div>
<table class="table table-success table-striped">
<thead>
<tr>
  <th scope="col">Nivel</th>
  <th scope="col">Nombre</th>
  <th scope="col">Descripcion</th>
</tr>
</thead>
<tbody>`;
  count = 1;
  for (const element in workLevels) {
    const level = workLevels[element];
    content += `
<tr>
<th scope="row">${count}</th>
<td>${level.nameEs}</td>
  <td>${level.descriptionEs}</td>
</tr>`;
    count += 1;
  }
  content += `</tbody></table></div>`;

  //autos
  tab += `<button class="nav-link" id="v-pills-cars-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cars"
    type="button" role="tab" aria-controls="v-pills-cars" aria-selected="false">Transporte</button>`;
  content += `<div class="tab-pane fade sims_div p-3" id="v-pills-cars" role="tabpanel" aria-labelledby="v-pills-descripcion-tab"
    tabindex="0">
<div class="list-group-item container text-center col-lg-6 col-md-10 col-sm-12 p-1 mb-3">
<h1 id="card" class="p-2">Transporte</h1>
</div>
<table class="table table-success table-striped">
<thead>
<tr>
<th scope="col">Nivel</th>
<th scope="col">Nombre</th>
<th scope="col">Coche</th>
<th scope="col">Transporte</th>
</tr>
</thead>
<tbody>`;
  count = 1;
  for (const element in workLevels) {
    const level = workLevels[element];
    content += `
<tr>
<th scope="row">${count}</th>
<td>${level.nameEs}</td>
<td>${level.carNameUs}</td>
<td><img class="cars" src="./img/cars/${level.carNameUs}.png" alt="${level.carNameUs}" style="width: 100px;"></td>
</tr>`;
    count += 1;
  }
  content += `</tbody></table></div>`;
  document.getElementById("v-pills-tab").innerHTML = tab;
  document.getElementById("v-pills-tabContent").innerHTML = content;
}

function makeSortedTable(array, argument) {
  document.getElementById("subtitle").innerHTML = ``;
  document.getElementById("title").innerHTML =
    `<h1 class="m-auto">` + argument + " por Niveles</h1>";
  let countLevel = 1;
  let countWork = 1;
  let actualLevel;
  let actualCareer;
  let totalMood;
  let hoursDay;

  let tab = `<br><div class="sims_div p-3 row">`;
  let content = "";

  array.forEach(
    (element) => (
      (tab += `
      <button class="nav-link ${countLevel=="1" ? "active" : ""}" id="v-pills-nivel${countLevel}-tab" data-bs-toggle="pill" data-bs-target="#v-pills-nivel${countLevel}"
     type="button" role="tab" aria-controls="v-pills-nivel${countLevel}" aria-selected="false">Nivel ${countLevel}</button>`),
      (content += `<div class="tab-pane sims_div p-3 ${countLevel=="1" ? "active" : "fade"}" id="v-pills-nivel${countLevel}" role="tabpanel" aria-labelledby="v-pills-nivel${countLevel}-tab"
      tabindex="0">
      <div class="list-group-item container text-center col-lg-5 col-md-10 col-sm-12 ">
    <h1 id="card">Nivel ${countLevel}</h1>
</div>
    <table class="table table-success table-striped">
    <thead>
    <tr>
    <th scope="col">Ranking</th>
    <th scope="col">Carrera</th>
    <th scope="col">Puesto</th>
    <th scope="col">Salario</th>
    <th scope="col">Salario/hora</th>
    <th scope="col">Horas</th>
    <th scope="col">Amigos</th>
    <th scope="col">Habilidades</th>
    <th scope="col">Cansancio por dia</th>
    </tr>
    </thead>
    <tbody>`),
      (actualLevel = element.careers),
      actualLevel.forEach(
        (work) => (
          (actualCareer = work.levelData),
          (totalMood = totalMoodChanges(actualCareer)),
          (hoursDay = workHours(actualCareer)),
          (content += `
      <tr>
        <th scope="row">${countWork}</th>
        <td>${work.carrerNameEs}</td>
        <td>${actualCareer.nameEs}</td>
        <td>§${actualCareer.salary}</td>
        <td>§${Math.round(actualCareer.salary / workHours(actualCareer))}</td>
        <td>${workHours(actualCareer)}</td>
        <td>${actualCareer.friends}</td>
        <td>${totalSkills(actualCareer)}</td>
        <td>${totalMood * hoursDay}</td>
      </tr>`),
          (countWork += 1)
        ),
        (countWork = 1),
        (countLevel += 1)
      ),
      (content += `</tbody></table></div>`)
    )
  );
  tab += `</div>`;
  document.getElementById("v-pills-tab").innerHTML = tab;
  document.getElementById("v-pills-tabContent").innerHTML = content;
}

function about() {
  document.getElementById(
    "title"
  ).innerHTML = `<h1>Informacion del proyecto</h1>`;
  document.getElementById("v-pills-tabContent").innerHTML = ``;
  document.getElementById("v-pills-tab").innerHTML = ``;

  document.getElementById(
    "subtitle"
  ).innerHTML = `<div class="container center">
  <div class="p-4 sims_div">
      <div class="col d-block d-lg-flex">
          
           <div class="col-lg-6 p-1">
              <h4>Realizado por Rodrigo Aguilar 2025.</h4>
              <h4 class="white">
                  <a href="https://www.linkedin.com/in/rodrigo-aguilar-91b09a252/"
                      target="_blank">Linkedin</a>,
                  <a href="https://github.com/rodrigoaguilar11" target="_blank">GitHub</a>.
              </h4>
              <br>
              <a href="https://www.linkedin.com/in/rodrigo-aguilar-91b09a252/" target="_blank"><img
                      src="./img/linkedIn.png" alt="linkedin" style="width: 100px;"></a>
              <a href="https://github.com/rodrigoaguilar11" target="_blank" style="margin-left:1em ;"><img
                      src="./img/Github.png" alt="github" style="width: 100px;"></a>
          </div>

          <div class="col-lg-6 p-1">
              <h4>Complementando la Informacion difundida en mi</h4>
              <h4 class="white">
                  <a href="https://www.youtube.com/channel/UCPqGCgi3vwvp24XImnEytgw" target="_blank">Canal de Youtube: Lion Eagle Sims 1</a>
              </h4>
              <br>
              <a href="https://www.youtube.com/channel/UCPqGCgi3vwvp24XImnEytgw" target="_blank"><img
                      src="./img/youtube.png" alt="youtube" style="width: 100px;"></a>
          </div>
      </div>
      <br>
      <div class="d-block d-lg-flex">
        
        <div class="col-lg-6 p-1">
        <h4 class="white">Nuesta comunidad en español <br><a href="https://www.facebook.com/groups/555451053352612" target="_blank">Los Sims 1 | Español / Latam</a></h4>
        <a href="https://www.facebook.com/groups/555451053352612" target="_blank"><img class="rounded"
                      src="./img/grupo.jpg" alt="Facebook" style="width: 300px;"></a>
      </div>
      <div class="class="col-lg-6 p-1">      
      <h4 class="white">Donaciones y Agradecimientos <br><a href="https://paypal.me/lioneagle11?country.x=UY&locale.x=es_XC" target="_blank">Paypal</a></h4>
      <a href="https://paypal.me/lioneagle11?country.x=UY&locale.x=es_XC" target="_blank"><img class="rounded"
                      src="./img/Paypal.png" alt="Paypal" style="width: 300px;"></a>
      </div>

      </div>
      <br>
      <h5 class="center">El objetivo de esta pagina es ofrecer informacion clasificada sobre las carreras laborales de Los Sims 1.</h5>
          <br>
      <h5>Inicio del proyecto 27/12/2024.</h4>
  </div>
</div>`;
}
