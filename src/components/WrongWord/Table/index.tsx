import { EachTd } from "./style";

interface Props {
  makeTr: Function;
  isAnswer: Function;
  clickAnswer: Function;
  round: number;
}

export default function Table({ makeTr, isAnswer, clickAnswer, round }: Props) {
  return (
    <table>
      <tbody>
        {makeTr(round).map((el: [], idx: number) => {
          return (
            <tr key={idx}>
              {el.map((e, i) => {
                return (
                  <EachTd key={i} onClick={() => isAnswer(e) && clickAnswer()}>
                    {e}
                  </EachTd>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
