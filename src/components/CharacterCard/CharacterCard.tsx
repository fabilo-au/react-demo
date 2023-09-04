import React from "react";
import { getThumbnail } from "~/lib/thumbnail";
import { Character } from "~/lib/types";
import Container from "./Container";
import Name from "./Name";

type Props = {
  character: Character;
};

const CharacterCard = ({ character }: Props) => {
  return (
    <Container
      sx={{
        backgroundImage: `url(${getThumbnail(character.thumbnail)})`,
      }}
    >
      <Name gutterBottom variant="h5">
        {character.name}
      </Name>
    </Container>
  );
};

export default CharacterCard;
