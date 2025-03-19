import { Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export const BackButton = () => {
  return (
    <Button
      colorScheme="blue"
      leftIcon={<ArrowBackIcon />}
      onClick={() => (window.location.href = "/")}
    ></Button>
  );
};
