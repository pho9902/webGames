export const SUBJECT = {
  subject1: ["red", "orange", "yellow", "green", "blue", "indigo", "purple"],
};

export const setMainSubject = (subject: string) => {
  switch (subject) {
    case "subject1":
      return "무지개의 색깔을 영어로";
  }

  return "asdf;";
};
