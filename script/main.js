const clasifyLevels = levelClasify(worklist);

document.addEventListener("DOMContentLoaded", function (e) {
  //Nav menu anchor listeners
  document.getElementById("salary").addEventListener("click", () => {
    sortTable(sortArgument(clasifyLevels, "salary"), "Salario");
  });
  document.getElementById("friends").addEventListener("click", () => {
    sortTable(sortArgument(clasifyLevels, "friends"), "Amigos");
  });
  document.getElementById("business").addEventListener("click", () => {
    workTable("Business");
  });
  document.getElementById("entertainment").addEventListener("click", () => {
    workTable("Entertainment");
  });
  document.getElementById("law_enforcement").addEventListener("click", () => {
    workTable("LawEnforcement");
  });
});

function workTable(work) {
  const actualWork = worklist.filter(
    (select) => select.carrerNameUs === work
  )[0];

  document.getElementById("title").innerHTML =
    actualWork.carrerNameEs + " (" + actualWork.expansion + ")";

  let tab = "<br>";
  let content = "";
  //General
  tab += `<button class="nav-link active" id="v-pills-general-tab" data-bs-toggle="pill" data-bs-target="#v-pills-general"
                type="button" role="tab" aria-controls="v-pills-general" aria-selected="true">General</button>`;

  content += `<div class="tab-pane fade show active" id="v-pills-general" role="tabpanel" aria-labelledby="v-pills-general-tab"
                tabindex="0">
                <div class="list-group-item list-group-item-light container text-center col-lg-5 col-md-10 col-sm-12">
    <h1 id="card">General</h1>
</div>
<table class="table table-success table-striped">
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
  <div class="tab-pane fade" id="v-pills-requisitos" role="tabpanel" aria-labelledby="v-pills-requisitos-tab"
                tabindex="0"><div class="list-group-item list-group-item-light container text-center col-lg-5 col-md-10 col-sm-12">
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

  content += `<div class="tab-pane fade" id="v-pills-cansanciohora" role="tabpanel" aria-labelledby="v-pills-cansanciohora-tab"
                tabindex="0">
                <div class="list-group-item list-group-item-light container text-center col-lg-5 col-md-10 col-sm-12">
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

  content += `<div class="tab-pane fade" id="v-pills-cansanciodia" role="tabpanel" aria-labelledby="v-pills-cansanciodia-tab"
                tabindex="0">
                <div class="list-group-item list-group-item-light container text-center col-lg-5 col-md-10 col-sm-12">
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
  content += `<div class="tab-pane fade" id="v-pills-cartasoportunidad" role="tabpanel" aria-labelledby="v-pills-cartasoportunidad-tab"
                tabindex="0">
<div class="list-group-item list-group-item-light container text-center col-lg-5 col-md-10 col-sm-12">
    <h1 id="card">Cartas de oportunidad</h1>
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
  tab+=`<br>`
  document.getElementById("v-pills-tab").innerHTML = tab;
  document.getElementById("v-pills-tabContent").innerHTML = content;
}

function sortTable(array, argument) {
  document.getElementById("title").innerHTML = argument + " por Niveles";
  let countLevel = 1;
  let countWork = 1;
  let actualLevel;
  let actualCareer;
  let totalMood;
  let hoursDay;

  let tab = "<br>";
  let content = "";
  
  array.forEach(
    (element) => (
      tab += `
      <button class="nav-link" id="v-pills-nivel${countLevel}-tab" data-bs-toggle="pill" data-bs-target="#v-pills-nivel${countLevel}"
     type="button" role="tab" aria-controls="v-pills-nivel${countLevel}" aria-selected="false">Nivel ${countLevel}</button>`,

      content += `<div class="tab-pane fade" id="v-pills-nivel${countLevel}" role="tabpanel" aria-labelledby="v-pills-nivel${countLevel}-tab"
      tabindex="0">
      <div class="list-group-item list-group-item-light container text-center col-lg-5 col-md-10 col-sm-12">
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
    <tbody>`,
      actualLevel = element.careers,
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
        countWork = 1,
        countLevel += 1
      ),
      content += `</tbody></table></div>`
    )
  );
  tab+=`<br>`
  document.getElementById("v-pills-tab").innerHTML = tab;
  document.getElementById("v-pills-tabContent").innerHTML = content;
    
  document.addEventListener("DOMContentLoaded", function (e) {
 document.getElementById("v-pills-nivel1").className += "active show";
  });
  
}
