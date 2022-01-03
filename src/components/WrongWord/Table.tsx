interface Props {
  makeTr: Function;
  isAnswer: Function;
  clickAnswer: Function;
  level: number;
}

export default function Table({ makeTr, isAnswer, clickAnswer, level }: Props) {
  return (
    <table>
      <tbody>
        {makeTr(level).map((el: [], idx: number) => {
          return (
            <tr key={idx}>
              {el.map((e, i) => {
                return (
                  <td key={i} onClick={() => isAnswer(e) && clickAnswer()}>
                    {e}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
