import { EachTd, WrapTable } from "./style";

interface Props {
  makeTr: Function;
  isAnswer: Function;
  clickAnswer: Function;
  round: number;
}

export default function Table({ makeTr, isAnswer, clickAnswer, round }: Props) {
  return (
    <WrapTable>
      <tbody>
        {makeTr(round).map((el: [], idx: number) => {
          return (
            <tr key={idx}>
              {el.map((e, i) => {
                return (
                  <EachTd
                    round={round}
                    key={i}
                    onClick={() => isAnswer(e) && clickAnswer()}
                  >
                    {e}
                  </EachTd>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </WrapTable>
  );
}
