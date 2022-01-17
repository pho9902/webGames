import { useRouter } from "next/router";
import { Wrap, HeaderBody, Logo } from "./style";

export default function Header() {
  const router = useRouter();
  return (
    <Wrap>
      <HeaderBody>
        <Logo onClick={() => router.push("/")}>Web Games!!</Logo>
        <span>games</span>
      </HeaderBody>
    </Wrap>
  );
}
