import { useState } from "react";
import BeforeStart from "./BeforeStart";
import Questions from "./Questions";

export default function EachCategory() {
  const [isGaming, setIsGaming] = useState(false);
  return (
    <div>
      {isGaming ? <Questions /> : <BeforeStart setIsGaming={setIsGaming} />}
    </div>
  );
}
