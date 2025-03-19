import { RecipeListPage } from "./pages/RecipeListPage";
import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";
import { SearchRecipe } from "./components/SearchRecipe";
import { Box, Heading } from "@chakra-ui/react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [query, setQuery] = useState("");

  return (
    <Box>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} />
      ) : (
        <Box bg="orange.100">
          <Heading color="brown.300" textAlign="center" py={7}>
            Recipe Checker
          </Heading>
          <Box textAlign="center">
            <SearchRecipe query={query} setQuery={setQuery} />
          </Box>
          <RecipeListPage query={query} onSelectRecipe={setSelectedRecipe} />
        </Box>
      )}
    </Box>
  );
};
