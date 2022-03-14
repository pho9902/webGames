export const SUBJECT = {
  ranbow: ["red", "orange", "yellow", "green", "blue", "indigo", "purple"],
  programingLan: [
    "c",
    "c#",
    "c++",
    "python",
    "ruby",
    "java",
    "javascript",
    "d",
    "f#",
    "kotlin",
    "prolog",
    "pascal",
    "fortran",
    "cobol",
    "lisp",
    "perl",
    "r",
    "groovy",
    "scala",
    "swift",
    "occam",
  ],
};

export const setMainSubject = (subject: string) => {
  switch (subject) {
    case "ranbow":
      return "무지개의 색깔을 영어로";
  }

  return "asdf;";
};
