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

interface Props {
  count: number;
}

export default function After({ count }: Props) {
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
        <GiRaccoonHead />;
      case "camel":
        <GiCamelHead />;
      case "fox":
        <GiFox />;
      case "tiger":
        <GiTigerHead />;
      case "wolf":
        <GiWolfHead />;
      case "dragon":
        <GiSpikedDragonHead />;
      case "deer":
        <GiDeerHead />;
      case "hyena":
        <GiHyenaHead />;
      case "kenku":
        <GiKenkuHead />;
      case "lynx":
        <GiLynxHead />;
      case "triton":
        <GiTritonHead />;
      case "ninja":
        <GiNinjaHead />;
      case "robot":
        <GiMechaHead />;
    }
  };

  const sortedAnimal = animals.sort(() => Math.random() - 0.5);

  return users.map((el, idx) => {
    return (
      <div key={idx}>
        {el}
        {setAnimalTag(sortedAnimal[idx])}
      </div>
    );
  });
}
