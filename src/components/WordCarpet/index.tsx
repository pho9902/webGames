import { useEffect, useState } from "react";
import { CommonOutLineBtn } from "styles/button";
import {
  Wrap,
  RuleDiv,
  GameBoard,
  EachPlayer,
  PlayerDiv,
  SubjectDiv,
} from "./styles";
import { RiUser3Line, RiUser3Fill } from "react-icons/ri";
import { setMainSubject, SUBJECT } from "components/common/WordDatas/subjects";

export default function WordCarpet() {
  const [level, setLevel] = useState(0);
  const [isGaming, setIsGaming] = useState(false);
  const [subject, setSubject] = useState("ㅁㄴㅇㄹ");
  const wholeRound = Array(Object.keys(SUBJECT).length).fill(0);
  console.log(setMainSubject(Object.keys(SUBJECT)[0]));
  const carpet = {
    user: [0, 0, 0],
    player1: [0, 0, 0],
    player2: [0, 0, 0],
    player3: [0, 0, 0],
  };

  const [round, setRound] = useState(0);

  const onClickStart = () => {
    setIsGaming(true);
    setRound(1);
    // let idx = setSubject(() => setMainSubject(Object.keys(SUBJECT)[idx]));
  };

  // 입력을 누르면 라운드가 넘어감
  // 유저의 답이 정답 배열안에 포함돼 있으면 정답 문자열 length 만큼 발판 추가
  // 다른 플레이어 들은 10%의 확률로 틀린 답, 90%의 확률로 정답배열에서 무작위 정답 도출
  // 레벨 * 2 만큼 매 라운드 배열이 줄어든다.
  // 먼저 발판의 개수가 1보다 작아지는 순서대로 패배 (같이 떨어지면 공동순위 부여 생각해야댐)

  return (
    <Wrap>
      {!isGaming ? (
        <RuleDiv>
          <span>룰 설명 </span>
          <span>주제가 주어집니다.</span>
          <span>주제에 맞는 단어를 입력합니다.</span>
          <span>
            입력한 단어가 주제에 포함된다면 단어의 글자수 만큼 발판이
            추가됩니다.
          </span>
          <span>발판은 매 라운드 마다 레벨별로 다른 갯수 줄어듭니다.</span>
          <CommonOutLineBtn onClick={() => setLevel(1)}>
            level 1
          </CommonOutLineBtn>
          <CommonOutLineBtn onClick={() => setLevel(2)}>
            level 2
          </CommonOutLineBtn>
          <CommonOutLineBtn onClick={() => setLevel(3)}>
            level 3
          </CommonOutLineBtn>
          {level ? (
            <CommonOutLineBtn onClick={onClickStart}>시작</CommonOutLineBtn>
          ) : null}
        </RuleDiv>
      ) : (
        <div>
          <SubjectDiv>
            <span>주제</span>
            <span>{subject}</span>
          </SubjectDiv>
          <input />
          <button>입력</button>
          <GameBoard>
            <PlayerDiv>
              <RiUser3Line />
              <EachPlayer>
                {carpet.user.map((el, idx) => (
                  <span key={idx}>발판</span>
                ))}
              </EachPlayer>
            </PlayerDiv>
            <PlayerDiv>
              <RiUser3Fill />
              <EachPlayer>
                {carpet.player1.map((el, idx) => (
                  <span key={idx}>발판</span>
                ))}
              </EachPlayer>
            </PlayerDiv>
            <PlayerDiv>
              <RiUser3Fill />
              <EachPlayer>
                {carpet.player2.map((el, idx) => (
                  <span key={idx}>발판</span>
                ))}
              </EachPlayer>
            </PlayerDiv>
            <PlayerDiv>
              <RiUser3Fill />
              <EachPlayer>
                {carpet.player3.map((el, idx) => (
                  <span key={idx}>발판</span>
                ))}
              </EachPlayer>
            </PlayerDiv>
          </GameBoard>
        </div>
      )}
    </Wrap>
  );
}
