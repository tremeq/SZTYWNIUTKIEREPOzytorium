import data from "$lib/data.json";

export function load() {
  const lectures = {
    "Poniedziałek": [],
    "Wtorek": [],
    "Środa": [],
    "Czwartek": [],
    "Piątek": [],
  }

  data.forEach((lecture) => {
    const startTime = lecture["poczatek"].split("T")[1].slice(0, 5);
    const lectureCount = lectures[lecture.dzien.split(" ")[0]].find(lecture => lecture.startTime == startTime);

    if (lectureCount) {
      lectureCount.lectures += 1;
    } else {
      lectures[lecture.dzien.split(" ")[0]].push({ startTime, lectures: 1 });
    }
  });

  let hourList = new Set();
  Object.keys(lectures).forEach((weekday) => {
    lectures[weekday].forEach((lecture) => {
      hourList.add(lecture["startTime"]);
    });
  });

  hourList = new Set(
    Array.from(hourList).sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;

      return 0;
    }),
  );

  return {
    lectures,
    hourList
  };
}
