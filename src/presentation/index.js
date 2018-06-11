import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";

import { colors } from "@qlean/york-core";

// Import Spectacle Core tags
import {
  Deck,
  Slide,
  Heading,
  CodePane,
  ListItem,
  List,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
// Import fonts
import "../styles/fonts";
import "normalize.css";

// Import images
import ReactEuropeBanner from "../assets/images/reacteurope.png";

// Custom components
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledList = styled(List)`
  list-style: none;
  display: grid;
  grid-gap: 30px;
`;

const StyledLinksContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  margin: 30px auto;
`;

const StyledLink = styled.a`
  color: inherit;
`;


const theme = createTheme({
  ...colors
}, {
  primary: "MuseoSans",
  code: "Monaco"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} >
        <Slide transition={["zoom"]} bgImage={ReactEuropeBanner} bgDarken="0.7">
          <Heading fit lineHeight={2} textColor="white">Qlean на React Europe</Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white" textColor="black" align="flex-start flex-start">
          <Text textColor="green" textAlign="left">Qlean</Text>
          <StyledContainer>
            <Heading margin="50px 0 0 0" size={4} lineHeight={2} textColor="black">Минусы конференции</Heading>
            <StyledList>
              <ListItem>Не было докладов core разработчиков React</ListItem>
              <ListItem>Не самый релеватный Workshop</ListItem>
              <ListItem>Очень много участников</ListItem>
              <ListItem>$$$$</ListItem>
            </StyledList>
          </StyledContainer>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="black" align="flex-start flex-start">
          <Text textColor="green" textAlign="left">Qlean</Text>
          <StyledContainer>
            <Heading margin="50px 0 0 0" size={4} lineHeight={2} textColor="black">Плюсы конференции</Heading>
            <StyledList>
              <ListItem>Много известных спикеров</ListItem>
              <ListItem>Ряд открытий, которые прошли бы мимо</ListItem>
              <ListItem>Несколько очень крутых докладов</ListItem>
            </StyledList>
          </StyledContainer>
        </Slide>
        <Slide transition={["zoom"]} bgColor="green">
          <Heading fit lineHeight={2} textColor="white">Полезные cервисы и либы</Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white" textColor="black" align="flex-start flex-start">
          <Text textColor="green" textAlign="left">Qlean</Text>
          <StyledContainer>
            <Heading size={4} lineHeight={1} textColor="black" textAlign="left">GatsbyJS</Heading>
            <StyledLinksContainer>
              <StyledLink href="https://www.gatsbyjs.org/" target="_blank">Site</StyledLink>
              <StyledLink href="https://www.gatsbyjs.org/docs/" target="_blank">Docs</StyledLink>
              <StyledLink href="https://github.com/gatsbyjs/gatsby" target="_blank">Github</StyledLink>
            </StyledLinksContainer>
            <Text margin="0 0 30px 0">Генератор статических сайтов на React.js</Text>
            <YouTube videoId="Gtd-Ht-D0sg"/>
          </StyledContainer>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" align="flex-start flex-start">
          <Text textColor="green" textAlign="left">Qlean</Text>
          <StyledContainer>
            <Heading size={4} lineHeight={1} textColor="black" textAlign="left">React-admin</Heading>
            <StyledLinksContainer>
              <StyledLink href="https://marmelab.com/react-admin/" target="_blank">Docs</StyledLink>
              <StyledLink href="https://github.com/marmelab/react-admin" target="_blank">Github</StyledLink>
            </StyledLinksContainer>
            <Text margin="0 0 30px 0">UI на React под REST/GraphQL сервер</Text>
            <YouTube videoId="vGOdIBDUtvs"/>
          </StyledContainer>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white" align="flex-start flex-start">
          <Text textColor="green" textAlign="left">Qlean</Text>
          <StyledContainer>
            <Heading size={4} lineHeight={1} textColor="black" textAlign="left">Codesandbox</Heading>
            <StyledLinksContainer>
              <StyledLink href="https://codesandbox.io/" target="_blank">Site</StyledLink>
              <StyledLink href="https://github.com/marmelab/react-admin" target="_blank">Github</StyledLink>
              <StyledLink href="https://codesandbox.io/s/new" target="_blank">Sandbox</StyledLink>
            </StyledLinksContainer>
            <Text margin="0 0 30px 0">Онлайн редактор кода с зависимостями</Text>
            <YouTube videoId="qURPenhndYA"/>
          </StyledContainer>
        </Slide>
        <Slide transition={["zoom"]} bgColor="green">
          <Heading fit lineHeight={2} textColor="white">Доклады</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" align="flex-start flex-start">
          <Text textColor="green" textAlign="left">Qlean</Text>
          <StyledContainer>
            <Heading margin="30px 0 0 0" size={3} lineHeight={1} textColor="black" textAlign="left">Lee Byron</Heading>
            <Text margin="20px 0 30px 0">Иммутабельная архитектура приложения</Text>
            <YouTube videoId="oTcDmnAXZ4E"/>
          </StyledContainer>
        </Slide>
        <Slide bgColor="white" align="flex-start flex-start">
          <Text textColor="green" textAlign="left">Qlean</Text>
          <StyledContainer>
            <Heading margin="30px 0 0 0" size={3} lineHeight={1} textColor="black" textAlign="left">Ken Wheeler</Heading>
            <Text margin="20px 0 30px 0">Текущее состояние React</Text>
            <YouTube videoId="QFk6YwMz8nc"/>
          </StyledContainer>
        </Slide>
        <Slide transition={["zoom"]} bgColor="green">
          <Heading fit lineHeight={2} textColor="white">Context</Heading>
        </Slide>
        <Slide bgColor="white" align="flex-start flex-start">
          <Text margin="0 0 30px 0" textColor="green" textAlign="left">Qlean</Text>
          <StyledContainer>
            <iframe
              src="https://codesandbox.io/embed/new"
              style={{ width: "1200px", height: "600px", border: 0, "border-radius": "4px", overflow: "hidden" }}
              sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
            />
          </StyledContainer>
        </Slide>
        <Slide transition={["zoom"]} bgColor="green">
          <Heading fit lineHeight={2} textColor="white">Suspence</Heading>
        </Slide>
        <Slide bgColor="white" align="flex-start flex-start">
          <Text textColor="green" textAlign="left">Qlean</Text>
          <StyledContainer>
            <Heading margin="30px 0 0 0" size={3} lineHeight={1} textColor="black" textAlign="left">Peggy Rayzis</Heading>
            <Text margin="20px 0 30px 0">Путешествие через React Apollo</Text>
            <YouTube videoId="fCXYA3lZTbo"/>
          </StyledContainer>
        </Slide>
        <Slide transition={["zoom"]} bgColor="green">
          <Heading fit lineHeight={2} textColor="white">React Apollo + Suspence</Heading>
        </Slide>
        <Slide bgColor="white" align="flex-start flex-start">
          <Text textColor="green" textAlign="left">Qlean</Text>
          <StyledContainer>
            <Heading margin="30px 0 0 0" size={3} lineHeight={1} textColor="black" textAlign="left">Michael Jackson</Heading>
            <Text margin="20px 0 30px 0">Не пишите следующий HOC</Text>
            <YouTube videoId="BcVAq3YFiuc"/>
          </StyledContainer>
        </Slide>
        <Slide transition={["zoom"]} bgColor="green">
          <Heading fit lineHeight={2} textColor="white">HOC vs Render Props</Heading>
        </Slide>
      </Deck>
    );
  }
}
