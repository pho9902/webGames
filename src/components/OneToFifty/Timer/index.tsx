import { useEffect } from "react";
import { TimerSpan } from "../style";

interface Props {
  time: number;
  setTime: Function;
}

export default function Timer({ time, setTime }: Props) {
  useEffect(() => {
    setTimeout(() => {
      setTime(time + 1);
    }, 1000);
  }, [time]);

  return <TimerSpan>{time}초</TimerSpan>;
}
