import { data } from "../utils/data.js";
import { Box, Image, Text, SimpleGrid, Heading } from "@chakra-ui/react";

export const RecipeListPage = ({ query, onSelectRecipe }) => {
  const filteredRecipes = data.hits.filter(
    (hit) =>
      hit.recipe.label.toLowerCase().includes(query.toLowerCase()) ||
      hit.recipe.healthLabels.some(
        (label) =>
          ["vegan", "vegetarian"].includes(label.toLowerCase()) &&
          label.toLowerCase().includes(query.toLowerCase())
      )
  );

  return (
    <Box p={5}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
        {filteredRecipes.map((hit) => (
          <Box
            key={hit.recipe.label}
            borderWidth="0px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            m={2}
            bg="white"
            textAlign="center"
            onClick={() => onSelectRecipe(hit.recipe)}
          >
            <Box borderTopRadius="md" overflow="hidden">
              <Image
                src={hit.recipe.image}
                alt={hit.recipe.label}
                objectFit="cover"
                height="200px"
                width="100%"
              />
            </Box>
            <Box p={3} fontSize="sm">
              <Heading size="md" mt={3}>
                {hit.recipe.label}
              </Heading>
              <Box mb={1}>
                {hit.recipe.healthLabels
                  .filter(
                    (label) => label === "Vegan" || label === "Vegetarian"
                  )
                  .map((label, index) => (
                    <Text
                      key={index}
                      bg="purple.100"
                      color="purple"
                      width="fit-content"
                      px={1}
                      py={1}
                      borderRadius="md"
                      display="inline-block"
                      mx={1}
                    >
                      {label}
                    </Text>
                  ))}
              </Box>
              <Box mb={1}>
                {hit.recipe.dietLabels.map((label, index) => (
                  <Text
                    key={index}
                    bg="green.100"
                    color="green"
                    width="fit-content"
                    px={1}
                    py={1}
                    borderRadius="md"
                    display="inline-block"
                    m={1}
                  >
                    {label}
                  </Text>
                ))}
              </Box>
              <Text>Dish: {hit.recipe.dishType}</Text>
              <Box mb={1}>
                {hit.recipe.cautions?.length > 0 && (
                  <>
                    <Text>Cautions:</Text>
                    {hit.recipe.cautions.map((label, index) => (
                      <Text
                        key={index}
                        bg="red.100"
                        display="inline-block"
                        color="red"
                        p={1}
                        borderRadius="md"
                        m={1}
                        whiteSpace="nowrap"
                      >
                        {label}
                      </Text>
                    ))}
                  </>
                )}
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
