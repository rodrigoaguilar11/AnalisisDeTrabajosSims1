const clasifyLevels = levelClasify(worklist);

document.addEventListener("DOMContentLoaded", function (e) {
  //Nav menu anchor listeners
  document.getElementById("salary").addEventListener("click", () => {
    sortTable(sortArgument(clasifyLevels, "salary", "asc"), "Salario");
  });
  document.getElementById("friends").addEventListener("click", () => {
    sortTable(sortArgument(clasifyLevels, "friends", "asc"), "Amigos");
  });
  document.getElementById("skills").addEventListener("click", () => {
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
  document.getElementById("about").addEventListener("click", () => {
    about();
  });
  //Trabajos
  document.getElementById("business").addEventListener("click", () => {
    workTable("Business");
  });
  document.getElementById("entertainment").addEventListener("click", () => {
    workTable("Entertainment");
  });
  document.getElementById("law_enforcement").addEventListener("click", () => {
    workTable("Law Enforcement");
  });
  document.getElementById("life_of_crime").addEventListener("click", () => {
    workTable("Life of Crime");
  });
  mainPage();
});

function mainPage() {
  document.getElementById(
    "title"
  ).innerHTML = `Bienvenido a la pagina para clasificar trabajos en Los Sims 1`;
  document.getElementById("subtitle").innerHTML = `
            <div class="p-4 sims_div container">
                    <div class="center">
                        <h4>Conceptos:</h4>
                       <h5>De forma nativa cada carrera en el nivel 10 tiene una carta de oportunidad de cambio de carrera.
                       Esto significa que cuando el sim vaya a trabajar pueda comenzar otra carrera desde el nivel 1, para evitarlo podemos mantenernos en el nivel 9</h5>
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
    actualWork.carrerNameEs + " - " + actualWork.expansion;

  let tab = `<div class="sims_div p-3">`;
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
    content += `
  <tr>
    <th scope="row">${count}</th>
    <td>${level.nameEs}</td>
    <td>$${level.salary}</td>
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
<div class="list-group-item container text-center col-lg-6 col-md-10 col-sm-12 p-1 mb-3">
    <h1 id="card" class="p-2">Cartas de oportunidad</h1>
</div>
<table class="table table-success table-striped">
<thead>
<tr>
  <th scope="col">Nivel</th>
  <th scope="col">Nombre</th>
  <th scope="col">Efecto</th>
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
<td>${level.promotionEs}</td>
</tr>`;
    count += 1;
  }
  content += `</tbody></table></div>`;
  document.getElementById("v-pills-tab").innerHTML = tab;
  document.getElementById("v-pills-tabContent").innerHTML = content;
}

function sortTable(array, argument) {
  document.getElementById("subtitle").innerHTML = ``;
  document.getElementById("title").innerHTML = argument + " por Niveles";
  let countLevel = 1;
  let countWork = 1;
  let actualLevel;
  let actualCareer;
  let totalMood;
  let hoursDay;

  let tab = `<br><div class="sims_div align-items-center p-3">`;
  let content = "";

  array.forEach(
    (element) => (
      (tab += `
      <button class="nav-link" id="v-pills-nivel${countLevel}-tab" data-bs-toggle="pill" data-bs-target="#v-pills-nivel${countLevel}"
     type="button" role="tab" aria-controls="v-pills-nivel${countLevel}" aria-selected="false">Nivel ${countLevel}</button>`),
      (content += `<div class="tab-pane fade sims_div p-3" id="v-pills-nivel${countLevel}" role="tabpanel" aria-labelledby="v-pills-nivel${countLevel}-tab"
      tabindex="0">
      <div class="list-group-item container text-center col-lg-5 col-md-10 col-sm-12">
    <h1 id="card">Nivel ${countLevel}</h1>
</div>
    <table class="table table-success table-striped">
    <thead>
    <tr>
    <th scope="col">Ranking</th>
    <th scope="col">Carrera</th>
    <th scope="col">Puesto</th>
    <th scope="col">Salario</th>
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
        <td>$${actualCareer.salary}</td>
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
  document.getElementById("title").innerHTML = `<h1>Informacion del proyecto</h1>`;
  document.getElementById("subtitle").innerHTML = `<div class="container">
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
                  <a href="" target="_blank">Canal de Youtube</a>.
              </h4>
              <br>
              <a href="https://www.youtube.com/channel/UCPqGCgi3vwvp24XImnEytgw" target="_blank"><img
                      src="./img/youtube.png" alt="youtube" style="width: 100px;"></a>
          </div>
      </div>
      <div class="center">
      <h2>Nuesta comunidad en español:</h2>
      <a href="https://www.facebook.com/groups/555451053352612" target="_blank"><img
                      src="./img/grupo.jpg" alt="youtube" style="width: 400px;"></a>
      <br>
      </div>
      <h5 class="center">El objetivo de esta pagina es ofrecer informacion clasificada sobre las carreras laborales de Los Sims 1.</h5>
          <br>
      <h5>Inicio del proyecto 27/12/2024.</h4>
          <button class="btn"><a href="../index.html"><span pan>Volver</span></a></button>
  </div>
</div>`;
}
