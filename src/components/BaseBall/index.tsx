import { Input, Record, RecordDiv, Wrap, RuleDiv } from "./style";
import { useRouter } from "next/router";
import { useState } from "react";
import { CommonOutLineBtn } from "styles/button";

export default function BaseBall() {
  const router = useRouter();
  const [answer, setAnswer] = useState<string[]>(["", "", "", ""]);
  const [question, setQuestion] = useState<string>("");
  const [isGaming, setIsGaming] = useState<boolean>(false);
  const [record, setRecord] = useState<string[]>(["record"]);
  const [isRuleOpen, setIsRuleopen] = useState<boolean>(false);

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

    return `${S} Strike ${B} Ball`;
  }

  return (
    <Wrap>
      <CommonOutLineBtn onClick={() => setIsRuleopen(!isRuleOpen)}>
        룰설명
      </CommonOutLineBtn>
      {isRuleOpen && (
        <RuleDiv>
          <span>무작위로 선정된 중복이 없는 4자리 숫자가 설정됩니다.</span>
          <span>숫자 4자리를 입력해 질문을 하며 정답을 맞춰갑니다.</span>
          <span>
            숫자가 맞고 숫자의 자리는 맞지 않을 때 Ball ex) 정답 : 1234 질문 :
            4321 &gt; 4Ball
          </span>
          <span>
            숫자도 맞고 숫자의 자리도 맞을 때 Strike ex) 정답 : 1234 질문 : 1209
            &gt; 2Strike
          </span>
          <span>
            맞는 숫자가 없을 때 out ex) 정답 : 1234 질문 : 7890 &gt; out
          </span>
          <span>모든 숫자를 자리에맞게 맞추면 정답</span>
        </RuleDiv>
      )}
      <br />
      {isGaming ? (
        <div>
          <Input
            onChange={e => setQuestion(e.target.value)}
            value={question}
            placeholder="질문할 숫자 4자리를 입력하세요"
          />
          <CommonOutLineBtn
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
          </CommonOutLineBtn>
          <RecordDiv>
            {record.map((el, idx) => {
              return <Record key={idx}>{el}</Record>;
            })}
          </RecordDiv>
          <div>
            <CommonOutLineBtn onClick={() => router.reload()}>
              재도전
            </CommonOutLineBtn>
            <CommonOutLineBtn onClick={() => router.push("/")}>
              메인화면
            </CommonOutLineBtn>
          </div>
        </div>
      ) : (
        <CommonOutLineBtn
          onClick={() => {
            setIsGaming(true);
            setAnswer(returnAnswer());
          }}
        >
          START
        </CommonOutLineBtn>
      )}
    </Wrap>
  );
}
