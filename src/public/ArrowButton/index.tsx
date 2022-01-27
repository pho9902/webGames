import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { Arrow } from "./style";

interface Props {
  direction: string;
  onClick: Function;
}

export default function ArrowButton({ direction, onClick }: Props) {
  function arrowDirection() {
    switch (direction) {
      case "up":
        return <AiOutlineArrowUp />;
      case "down":
        return <AiOutlineArrowDown />;
      case "left":
        return <AiOutlineArrowLeft />;
      default:
        return <AiOutlineArrowRight />;
    }
  }
  return <Arrow onClick={() => onClick()}>{arrowDirection()}</Arrow>;
}
