import { Text, Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import { data } from "../utils/data.js";
import { BackButton } from "../components/BackButton.jsx";
import recipeImage from "../assets/recipe.png";

export const RecipePage = ({ recipe }) => {
  return (
    <Flex justify="center" align="center" bg="white">
      <Box
        width={{ base: "100%", md: "70%", lg: "60%" }}
        minHeight="100%"
        bg="orange.100"
      >
        <Box position="relative" width="100%" height="100px">
          <Box position="absolute" left="2" top="40%">
            <BackButton />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Image height="100px" width="auto" src={recipeImage} />
          </Box>
        </Box>
        <Image
          src={recipe.image}
          alt={recipe.label}
          objectFit="cover"
          height="250px"
          width="100%"
        />
        <SimpleGrid
          p={3}
          gap={1}
          display="grid"
          columns={{ base: 1, sm: 1, md: 2, lg: 2 }}
        >
          <Box>
            <Text textTransform="uppercase" mb={4}>
              {recipe.mealType}
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              {recipe.label}
            </Text>
            <Text fontSize="12px">Dish Type: {recipe.dishType}</Text>
            <Text fontSize="12px">
              Total Cooking Time: {recipe.totalTime} Minutes
            </Text>
            <Text fontSize="12px" mb={4}>
              Servings: {recipe.yield}
            </Text>
            <Box>
              <Text fontWeight="bold" mb={2}>
                Ingredients
              </Text>
              {recipe.ingredientLines.map((ingredient, index) => (
                <Text key={index} fontSize="14px">
                  {ingredient}
                </Text>
              ))}
            </Box>
          </Box>
          <Box>
            <Box mb={1}>
              {recipe.healthLabels.length > 0 && (
                <>
                  <Text>Health Labels:</Text>
                  {recipe.healthLabels.map((label, index) => (
                    <Text
                      key={index}
                      bg="purple.100"
                      display="inline"
                      color="purple"
                      borderRadius="md"
                      p={1}
                      m={1}
                      textTransform="uppercase"
                      whiteSpace="nowrap"
                      fontSize={10}
                      fontWeight="bold"
                    >
                      {label}
                    </Text>
                  ))}
                </>
              )}
            </Box>
            <Box mb={1}>
              {recipe.dietLabels.length > 0 && (
                <>
                  <Text>Diet:</Text>
                  {recipe.dietLabels.map((label, index) => (
                    <Text
                      key={index}
                      bg="green.100"
                      display="inline"
                      color="green"
                      borderRadius="md"
                      p={1}
                      m={1}
                      textTransform="uppercase"
                      whiteSpace="nowrap"
                      fontSize={10}
                      fontWeight="bold"
                    >
                      {label}
                    </Text>
                  ))}
                </>
              )}
            </Box>

            <Box mb={1}>
              {recipe.cautions?.length > 0 && (
                <>
                  <Text>Cautions:</Text>
                  {recipe.cautions.map((label, index) => (
                    <Text
                      key={index}
                      bg="red.100"
                      display="inline"
                      color="red"
                      borderRadius="md"
                      p={1}
                      m={1}
                      textTransform="uppercase"
                      whiteSpace="nowrap"
                      fontSize={10}
                      fontWeight="bold"
                    >
                      {label}
                    </Text>
                  ))}
                </>
              )}
            </Box>
            <Text>Total Nutients:</Text>
            <Box
              display="grid"
              gap="2"
              gridTemplateColumns="repeat(3, minmax(0, 1fr))"
              fontSize={11}
            >
              <Box>
                <Text>
                  {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
                </Text>
                <Text>CALORIES</Text>
              </Box>
              <Box>
                <Text>
                  {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
                  {recipe.totalNutrients.CHOCDF.unit}
                </Text>
                <Text>{recipe.totalNutrients.CHOCDF.label.toUpperCase()}</Text>
              </Box>
              <Box>
                <Text>
                  {Math.round(recipe.totalNutrients.PROCNT.quantity)}
                  {recipe.totalNutrients.PROCNT.unit}
                </Text>
                <Text>{recipe.totalNutrients.PROCNT.label.toUpperCase()}</Text>
              </Box>
              <Box>
                <Text>
                  {Math.round(recipe.totalNutrients.FAT.quantity)}
                  {recipe.totalNutrients.FAT.unit}
                </Text>
                <Text>{recipe.totalNutrients.FAT.label.toUpperCase()}</Text>
              </Box>
              <Box>
                <Text>
                  {Math.round(recipe.totalNutrients.CHOLE.quantity)}
                  {recipe.totalNutrients.CHOLE.unit}
                </Text>
                <Text>{recipe.totalNutrients.CHOLE.label.toUpperCase()}</Text>
              </Box>
              <Box>
                <Text>
                  {Math.round(recipe.totalNutrients.NA.quantity)}
                  {recipe.totalNutrients.NA.unit}
                </Text>
                <Text>{recipe.totalNutrients.NA.label.toUpperCase()}</Text>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
