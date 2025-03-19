import { Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export const BackButton = () => {
  return (
    <Button
      colorScheme="orange.100"
      leftIcon={
        <ArrowBackIcon
          color="grey"
          _hover={{
            bg: "purple.200",
            borderRadius: "15px",
          }}
        />
      }
      onClick={() => (window.location.href = "/")}
    ></Button>
  );
};
