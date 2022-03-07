import { SUBJECT_QUESTION } from "components/common/QuizDatas/javascript";
import { useState } from "react";
import { CommonOutLineBtn } from "styles/button";

interface Props {
  answer: string;
  index: number;
}
export default function Questions() {
  const [level, setLevel] = useState(0);
  const [answer, setAnswer] = useState("");

  function isAnswer({ answer, index }: Props) {
    if (answer === SUBJECT_QUESTION[index]) return true;
  }

  return (
    <div>
      {SUBJECT_QUESTION[level].questions.map((el, idx) => {
        return (
          <div>
            <span>{el}</span>
            <input onChange={e => setAnswer(e.target.value)} />
            <CommonOutLineBtn
              onClick={() => isAnswer(answer, idx) && alert("정답")}
            >
              제출
            </CommonOutLineBtn>
          </div>
        );
      })}
    </div>
  );
}
