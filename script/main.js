const clasifyLevels = levelClasify(worklist);

document.addEventListener("DOMContentLoaded", function (e) {
  //Nav menu anchor listeners
  document.getElementById("salary").addEventListener("click", () => {
    sortTable(sortArgument(clasifyLevels,"salary"),"Salario")
  });
  document.getElementById("friends").addEventListener("click", () => {
    sortTable(sortArgument(clasifyLevels,"friends"),"Amigos")
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
  let result = `<table class="table table-success table-striped">
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
</thead>`;

  const actualWork = worklist.filter(
    (select) => select.carrerNameUs === work
  )[0];
  //console.log(actualWork.levels);

  document.getElementById("title").innerHTML =
    actualWork.carrerNameEs + " (" + actualWork.expansion + ")";

  const workLevels = actualWork.levels;
  let count = 1;
  for (const element in workLevels) {
    const level = workLevels[element];
    result += `
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
  result += `</tbody></table><div class="list-group-item list-group-item-light container text-center col-lg-5 col-md-10 col-sm-12">
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
</thead>`;
  count = 1;
  for (const element in workLevels) {
    const level = workLevels[element];
    result += `
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
  //Cansancio por hora
  result += `</tbody></table>
  <div class="list-group-item list-group-item-light container text-center col-lg-5 col-md-10 col-sm-12">
      <h1 id="card">Cansancio por hora</h1>
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
</thead>`;
  count = 1;
  for (const element in workLevels) {
    const level = workLevels[element];
    result += `
<tr>
  <th scope="row">${count}</th>
  <td>${level.moodChangesPerHour[0]}</td>
  <td>${level.moodChangesPerHour[1]}</td>
  <td>${level.moodChangesPerHour[2]}</td>
  <td>${level.moodChangesPerHour[3]}</td>
  <td>${level.moodChangesPerHour[4]}</td>
  <td>${level.moodChangesPerHour[5]}</td>
  <td>${level.moodChangesPerHour[6]}</td>
  <td>${
    totalMoodChanges(level)
  }</td>
</tr>`;
    count += 1;
  }
  //cansancio por dia
  result += `</tbody></table>
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
</thead>`;
  count = 1;
  for (const element in workLevels) {
    const level = workLevels[element];
    let hoursDay = workHours(level);
    let totalMood = totalMoodChanges(level);
    result += `
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
  //Cartas de oportunidad
  result += `</tbody></table>
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
</thead>`;
  count = 1;
  for (const element in workLevels) {
    const level = workLevels[element];
    result += `
<tr>
<th scope="row">${count}</th>
<td>${level.nameEs}</td>
  <td>${level.descriptionEs}</td>
<td>${level.promotionEs}</td>
</tr>`;
    count += 1;
  }
  result += `</tbody></table>`;
  document.getElementById("list").innerHTML = result;
}

function sortTable(array, argument) {
  let result;
  document.getElementById("title").innerHTML = argument + " por Niveles";
  let countLevel = 1;
  let countWork = 1;
  let actualLevel;
  let actualCareer;
  let totalMood;
  let hoursDay;

  array.forEach(
    (element) => (
      (result += `</tbody></table>
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
</thead>`),
      (actualLevel = element.careers),
      actualLevel.forEach(
        (work) => (
          (actualCareer = work.levelData),
          (totalMood = totalMoodChanges(actualCareer)),
          (hoursDay = workHours(actualCareer)),
          (result += `
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
      )
    )
  );

  result += `</tbody></table>`;
  document.getElementById("list").innerHTML = result;
}
