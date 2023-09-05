import React from "react";
import { Box, Button, Grid, LinearProgress } from "@mui/material";
import { useCharacters } from "~/hooks";
import { Character } from "~/lib/types";
import { CharacterCard } from "~/components";

const CharacterListPage = () => {
  const { characters, isLoading, loadMore } = useCharacters();
  return (
    <>
      <Grid container spacing={2} sx={{ paddingTop: 2 }}>
        {characters?.map((character: Character) => (
          <Grid
            item
            key={character.id}
            xs={6}
            sm={4}
            md={3}
            lg={2}
            sx={{ padding: 1 }}
          >
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>
      {loadMore && (
        <Box display="flex" alignContent="center" sx={{ padding: 2 }}>
          <Button onClick={loadMore} variant="outlined" sx={{ flex: 1 }}>
            Load More
          </Button>
        </Box>
      )}
      {isLoading && <LinearProgress />}
    </>
  );
};

export default CharacterListPage;
