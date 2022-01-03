import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Table from "./Table";
import ResultModal from "./ResultModal";

export default function EachLevel() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState<string>("");

  let startTime = new Date();

  const levels: { [round: number]: number } = {
    1: 3,
    2: 4,
    3: 8,
    4: 10,
    5: 13,
  };
  const words: { [round: number]: string[] } = {
    1: ["아", "야"],
    2: ["흄", "흉"],
    3: ["먽", "멵"],
    4: ["닳", "닭"],
    5: ["읊", "읇"],
  };

  const answer: string[] = ["야", "흉", "멵", "닭", "읇"];

  function isAnswer(str: string): boolean {
    return answer.includes(str);
  }

  function makeTr(round: number): string[][] {
    const problem: string[][] = Array.from({ length: levels[round] }, _ =>
      Array.from({ length: levels[round] }, _ => words[round][0])
    );

    problem[Math.floor(Math.random() * levels[round])][
      Math.floor(Math.random() * levels[round])
    ] = words[round][1];

    return problem;
  }

  function clickAnswer() {
    let now = new Date();

    if (now.getMinutes() - startTime.getMinutes() > 0) {
      setResult(
        `${now.getMinutes() - startTime.getMinutes()}분 ${
          now.getSeconds() - startTime.getSeconds()
        }초`
      );
    } else {
      setResult(
        `${
          now.getSeconds() - startTime.getSeconds()
        }초 ${now.getMilliseconds()}`
      );
    }
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (!router) return;
  }, [router]);

  return (
    <div>
      <div>ㅌㅇㅂ</div>
      <Table
        makeTr={makeTr}
        isAnswer={isAnswer}
        clickAnswer={clickAnswer}
        level={Number(router.query.pid)}
      />
      {isOpen && <ResultModal result={Boolean(result)} />}
    </div>
  );
}
