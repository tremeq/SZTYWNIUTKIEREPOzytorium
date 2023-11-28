fetch("./data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const lectures = {
      "PON": [],
      "WTO": [],
      "ŚRO": [],
      "CZW": [],
      "PIĄ": [],
    };

    data.forEach((lecture) => {
      lectures[lecture.dzien.slice(0, 3).toUpperCase()].push(lecture);
    });

    Object.keys(lectures).forEach((weekday) => {
      lectures[weekday].sort((a, b) => (a["koniec"] > b["koniec"]) ? 1 :
        ((b["koniec"] > a["koniec"]) ? -1 : 0));
      lectures[weekday].sort((a, b) => (a["poczatek"] > b["poczatek"]) ? 1 :
        ((b["poczatek"] > a["poczatek"]) ? -1 : 0));

      if (lectures[weekday].length > 0) {
        const table = document.querySelector("table");
        const weekrow = table.querySelector("tr");
        const weekcell = document.createElement("td");
        weekcell.innerHTML = weekday;
        weekrow.appendChild(weekcell);

        const lecturesTable = document.createElement("table");
        lecturesTable.border = "1";
        lecturesTable.style.borderCollapse = "collapse";
        weekdayLoop:
        for (const lecture of lectures[weekday]) {
          const startTime = new Date(lecture["poczatek"]).toLocaleTimeString();
          // const endTime = new Date(lecture["koniec"]).toLocaleTimeString();
          const timeStr = `${startTime.slice(0, 5)}`; // - ${endTime.slice(0, 5)}`;

          const lecturesTableRows = lecturesTable.querySelectorAll("tr");
          for (const row of lecturesTableRows) {
            if (row.querySelector("td").innerHTML == timeStr) {
              const lectureCount = row.querySelectorAll("td")[1];
              lectureCount.innerHTML = parseInt(lectureCount.innerHTML) + 1;
              continue weekdayLoop;
            }
          };

          const lectureHourData = document.createElement("td");
          lectureHourData.innerHTML = timeStr;
          const lectureCountData = document.createElement("td");
          lectureCountData.innerHTML = 1;
          const lecturesRow = document.createElement("tr");
          lecturesRow.appendChild(lectureHourData);
          lecturesRow.appendChild(lectureCountData);
          lecturesTable.appendChild(lecturesRow);
        };
        const lecturesTableContainer = document.createElement("td");
        lecturesTableContainer.appendChild(lecturesTable);
        table.querySelectorAll("tr")[1].appendChild(lecturesTableContainer);
      }
    });
  });
