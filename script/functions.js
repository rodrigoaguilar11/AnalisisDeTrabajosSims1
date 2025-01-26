function workHours(array) {
  let begin = array.begintime
  let end = array.endtime
  if (end > begin) {
    return end - begin;
  } else {
    return 24 - begin + end;
  }
}

function workHoursArgument(begin,end) {
  if (end > begin) {
    return end - begin;
  } else {
    return 24 - begin + end;
  }
}

function carHour(begin) {
  if (begin == 0) {
    return 23;
  } else {
    return begin - 1;
  }
}

function totalMoodChanges(array){
return array.moodChangesPerHour[0] +
array.moodChangesPerHour[1] +
array.moodChangesPerHour[2] +
array.moodChangesPerHour[3] +
array.moodChangesPerHour[4] +
array.moodChangesPerHour[5] +
array.moodChangesPerHour[6]
}

function totalSkills(array){
  return array.skills[0] / 100 +
  array.skills[1] / 100 +
  array.skills[2] / 100 +
  array.skills[3] / 100 +
  array.skills[4] / 100 +
  array.skills[5] / 100
}
function salaryFilter(objects, props, sort) {
  return [...objects].sort((a, b) =>
    props.reduce((iterator, p, i) => {
      if (iterator === 0) {
        let [m, n] = sort && sort[i] == "asc" ? [b[p], a[p]] : [a[p], b[p]];
        iterator = m > n ? 1 : m < n ? -1 : 0;
      }
      return iterator;
    }, 0)
  );
}

//console.log(salaryFilter(list, ["salary", "nameUs"], ["des", "asc"]));
//console.log(worklist);

function levelClasify(list) {
  const classified = [];

  list.forEach((career) => {
    career.levels.forEach((levelData) => {
      const level = levelData.level;
      let existingLevel = classified.find((item) => item.level === level);

      if (!existingLevel) {
        existingLevel = { level: level, careers: [] };
        classified.push(existingLevel);
      }
      existingLevel.careers.push({
        carrerNameEs: career.carrerNameEs,
        carrerNameUs: career.carrerNameUs,
        levelData: levelData,
      });
    });
  });
  classified.sort((a, b) => a.level - b.level);
  return classified;
}

function sortArgument(data, argument, orden) {
  return data.map(nivel => {
    return {
      ...nivel,
      careers: [...nivel.careers].sort((a, b) => {
        const salaryA = a.levelData[argument];
        const salaryB = b.levelData[argument];
        if (orden=="des"){
          return salaryB - salaryA
        }else{
          return  salaryA - salaryB
        }
        ; // Orden descendente (mayor a menor)
      })
    };
  });
}

