import { useState } from "react";
import {
  GiRabbitHead,
  GiHorseHead,
  GiBearFace,
  GiLabradorHead,
  GiRaccoonHead,
  GiCamelHead,
  GiFox,
  GiTigerHead,
  GiWolfHead,
  GiSpikedDragonHead,
  GiDeerHead,
  GiHyenaHead,
  GiKenkuHead,
  GiLynxHead,
  GiTritonHead,
  GiNinjaHead,
  GiMechaHead,
} from "react-icons/gi";
import {Goal, Ladder, Wrap, EachIcon} from './style'

interface Props {
  count: number;
}

export default function GameBoard({ count }: Props) : JSX.Element {
  const [users, setUsers] = useState<number[]>(Array(count).fill(0));

  const animals = [
    "rabbit",
    "horse",
    "bear",
    "dog",
    "raccoon",
    "camel",
    "fox",
    "tiger",
    "wolf",
    "dragon",
    "deer",
    "hyena",
    "kenku",
    "lynx",
    "triton",
    "ninja",
    "robot",
  ];

  const setAnimalTag = (animal: string) => {
    switch (animal) {
      case "rabbit":
        return <GiRabbitHead />;
      case "horse":
        return <GiHorseHead />;
      case "bear":
        return <GiBearFace />;
      case "dog":
        return <GiLabradorHead />;
      case "raccoon":
        return <GiRaccoonHead />;
      case "camel":
        return <GiCamelHead />;
      case "fox":
        return <GiFox />;
      case "tiger":
        return <GiTigerHead />;
      case "wolf":
        return <GiWolfHead />;
      case "dragon":
        return <GiSpikedDragonHead />;
      case "deer":
        return <GiDeerHead />;
      case "hyena":
        return <GiHyenaHead />;
      case "kenku":
        return <GiKenkuHead />;
      case "lynx":
        return <GiLynxHead />;
      case "triton":
        return <GiTritonHead />;
      case "ninja":
        return <GiNinjaHead />;
      case "robot":
        return <GiMechaHead />;
    }
  };

  const sortedAnimal = animals.sort(() => Math.random() - 0.5);

  return ( 
  <Wrap>
    {users.map((el, idx) => {
      return (
        <EachIcon key={idx}>
          {setAnimalTag(sortedAnimal[idx])}
          <Ladder />
          <Goal />
        </EachIcon>
      );
    })}
  </Wrap>
  )
}
