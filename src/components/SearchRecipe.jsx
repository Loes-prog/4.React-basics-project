import { Input } from "@chakra-ui/react";

export const SearchRecipe = ({ query, setQuery }) => {
  return (
    <Input
      placeholder="Search.."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      size="lg"
      width="80%"
      maxWidth="500px"
      mb={4}
      bg="white"
    />
  );
};
