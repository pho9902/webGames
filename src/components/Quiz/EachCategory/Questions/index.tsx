import { SUBJECT_QUESTION } from "components/common/QuizDatas/javascript";
import { useState } from "react";
import { CommonOutLineBtn } from "styles/button";

interface functionProps {
  answer: string;
  index: number;
}

export default function Questions() {
  const [level, setLevel] = useState(0);
  const [answer, setAnswer] = useState("");

  function isAnswer(answer: string, index: number) {
    setAnswer("");
    if (answer === SUBJECT_QUESTION[1].answers[index]) return true;
    return false;
  }

  return (
    <div>
      {SUBJECT_QUESTION[level].questions.map((el: string, index: number) => {
        return (
          <div key={index}>
            <span>{el}</span>
            <input value={answer} onChange={e => setAnswer(e.target.value)} />
            <CommonOutLineBtn
              onClick={() =>
                isAnswer(answer, index) ? alert("정답") : alert("오답")
              }
            >
              제출
            </CommonOutLineBtn>
          </div>
        );
      })}
    </div>
  );
}
