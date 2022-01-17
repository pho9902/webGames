import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function BaseBall() {
  const router = useRouter();
  const [answer, setAnswer] = useState<string[]>(["", "", "", ""]);
  const [question, setQuestion] = useState<string>("");
  const [isGaming, setIsGaming] = useState<boolean>(false);

  const array: {}[] = [];

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
    if (inputArr === answer) return "Homerun!!";
    let S = 0;
    let B = 0;

    inputArr.forEach((el, idx) => {
      if (answer.includes(el)) {
        answer.indexOf(el) === idx ? (S += 1) : (B += 1);
      }
    });

    if (S + B === 0) return "Out!!";

    return `${S} Strike ${B} Ball ~`;
  }

  return (
    <div>
      <span>룰설명</span>
      <br />
      {isGaming ? (
        <div>
          <span>{answer}</span>
          <input
            onChange={e => {
              setQuestion(e.target.value);
            }}
            placeholder="질문할 숫자 4자리를 입력하세요"
          />
          <button
            onClick={() => {
              if (question.length !== 4) alert("질문 숫자는 4자리여야 합니다");
              else {
                // const obj: {} = {};
                // obj[question] = check(question);
                // array.push(obj);
                // memo[question] = ;
                // console.log(memo);
                console.log(array);
              }
            }}
          >
            입력
          </button>
          {/* <div>
            {Object.keys(memo).map(el => {
              <span>
                {el} : {memo[el]}
              </span>;
            })}
          </div> */}
          <div>
            <button>재도전</button>
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
    </div>
  );
}
