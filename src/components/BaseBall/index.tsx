import { Record, RecordDiv, Wrap } from "./style";
import { useRouter } from "next/router";
import { useState } from "react";

export default function BaseBall() {
  const router = useRouter();
  const [answer, setAnswer] = useState<string[]>(["", "", "", ""]);
  const [question, setQuestion] = useState<string>("");
  const [isGaming, setIsGaming] = useState<boolean>(false);
  const [record, setRecord] = useState<string[]>(["record"]);

  function returnAnswer(): string[] {
    const answer: string[] = [];
    while (answer.length !== 4) {
      let num = Math.floor(Math.random() * 10).toString();
      !answer.includes(num) && answer.push(num);
    }

    return answer;
  }

  function check(input: string): string {
    const inputArr = input.split("");
    let S = 0;
    let B = 0;

    inputArr.forEach((el, idx) => {
      if (answer.includes(el)) {
        answer.indexOf(el) === idx ? (S += 1) : (B += 1);
      }
    });

    if (S + B === 0) return "Out!!";
    if (S === 4) return "HomeRun~!!";

    return `${S} Strike ${B} Ball ~`;
  }

  return (
    <Wrap>
      <span>룰설명</span>
      <br />
      {isGaming ? (
        <div>
          <input
            onChange={e => setQuestion(e.target.value)}
            value={question}
            placeholder="질문할 숫자 4자리를 입력하세요"
          />
          <button
            onClick={() => {
              if (question.length !== 4) alert("질문 숫자는 4자리여야 합니다");
              else {
                setQuestion(question);
                setRecord([...record, `${question} : ${check(question)}`]);
                setQuestion("");
              }
            }}
          >
            입력
          </button>
          <RecordDiv>
            {record.map((el, idx) => {
              return <Record key={idx}>{el}</Record>;
            })}
          </RecordDiv>
          <div>
            <button onClick={() => router.reload()}>재도전</button>
            <button onClick={() => router.push("/")}>메인화면</button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => {
            setIsGaming(true);
            setAnswer(returnAnswer());
          }}
        >
          START
        </button>
      )}
    </Wrap>
  );
}
