import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Table from "../Table";
import ResultModal from "../ResultModal/ResultModal";
import { Wrap } from "./style";

export default function EachLevel() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState<string>("");
  const [round, setRound] = useState<number>(1);

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
    5: ["읆", "읊"],
  };

  const answer: string[] = ["야", "흉", "멵", "닭", "읊"];

  function isAnswer(str: string): boolean {
    return answer.includes(str);
  }

  const makeTr = useCallback(
    (round: number): string[][] => {
      const problem: string[][] = Array.from({ length: levels[round] }, _ =>
        Array.from({ length: levels[round] }, _ => words[round][0])
      );

      problem[Math.floor(Math.random() * levels[round])][
        Math.floor(Math.random() * levels[round])
      ] = words[round][1];

      return problem;
    },
    [words, levels]
  );

  function clickAnswer() {
    let now = new Date();

    if (now.getMinutes() - startTime.getMinutes() > 0) {
      setResult(
        `${now.getMinutes() - startTime.getMinutes()}분 ${
          now.getSeconds() - startTime.getSeconds() + 60
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
    if (!router.isReady) return;
    setRound(Number(router.query.pid));
  }, [router, round]);

  return (
    <Wrap>
      <Table
        makeTr={makeTr}
        isAnswer={isAnswer}
        clickAnswer={clickAnswer}
        round={round}
      />
      {isOpen && <ResultModal result={result} />}
    </Wrap>
  );
}
