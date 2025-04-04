import { FunctionComponent } from "preact/src/index.d.ts";

type CharacterData = {
  name: string;
  image: string;
};

type Props = {
  characters: CharacterData[];
};

const Character: FunctionComponent<Props> = (props) => {
  const characters = props.characters;
  return (
    <div>
      {characters.map((ch) => (
        <div key={ch.name}> 
          <li>{ch.name}</li>
          <img src={ch.image} alt={ch.name} />
        </div>
      ))}
    </div>
  );
};

export default Character;
