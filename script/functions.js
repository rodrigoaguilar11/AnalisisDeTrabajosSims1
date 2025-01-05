function workHours(begin, end) {
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

function sortSalary(data) {
  return data.map(nivel => {
    return {
      ...nivel,
      careers: [...nivel.careers].sort((a, b) => {
        const salaryA = a.levelData.salary;
        const salaryB = b.levelData.salary;
        return salaryB - salaryA; // Orden descendente (mayor a menor)
      })
    };
  });
}

