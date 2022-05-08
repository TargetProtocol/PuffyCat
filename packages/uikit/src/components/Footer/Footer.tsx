import React from "react";

import { Flex } from "../Box";
import { Button } from "../Button";
import { ArrowForwardIcon } from "../Svg";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledSocialLinks,
  StyledToolsContainer,
} from "./styles";
import { FooterProps } from "./types";

const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  return (
    <StyledFooter p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <StyledIconMobileContainer display={["block", null, "none"]}>
        <img src='https://puffycat.me/files/images/puffycat.png'/>
        </StyledIconMobileContainer>
        
        <StyledSocialLinks order={[2]} pb={["42px", null, "32px"]} mb={["0", null, "32px"]} />
        <StyledToolsContainer
          order={[1, null, 3]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
        >
          
          <Flex order={[1, null, 2]} mb={["24px", null, "0"]} justifyContent="space-between" alignItems="center">
            
            <Button
              as="a"
              href="https://pancakeswap.finance/swap?outputCurrency=0x4e1c99ff9d474c002b7b9b05fffb088e41974fe7"
              target="_blank"
              scale="sm"
              endIcon={<ArrowForwardIcon color="black" />}
            >
              <text>Buy on Pancakeswap</text>
            </Button>
          </Flex>
        </StyledToolsContainer>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
