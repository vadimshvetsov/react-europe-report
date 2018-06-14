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
  Image,
  ListItem,
  List,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import fonts
import "normalize.css";
import "../styles/fonts";

// Import images
import ReactEuropeBanner from "../assets/images/reacteurope.png";
import HOCRenderProps from "../assets/images/hocrenderprops.png";

// Import code examples
import createContextExample from "../assets/code/createContext.example";
import providerConsumerExample from "../assets/code/providerConsumer.example";
import simpleCacheProviderExample from "../assets/code/simpleCacheProvider.example";
import timeoutExample from "../assets/code/timeout.example";
import suspenseExample from "../assets/code/suspense.example";
import mixinsExample from "../assets/code/mixins.example";
import renderPropsExample from "../assets/code/renderProps.example";

// Custom components
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

const StyledLogo = styled.div`
  position: absolute;
  color: ${({ textColor }) => colors[textColor || "green"]};
  left: 50%;
  top: 50%;
  margin: -350px 0 0 -650px;
`;


const theme = createTheme({
  ...colors
}, {
  primary: "MuseoSans",
  code: "Monaco"
});

const customTheme = {
  ...theme,
  screen: {
    ...theme.screen,
    components: {
      ...theme.screen.components,
      syntax: {
        ...theme.screen.components.syntax,
        fontSize: "1.3rem",
        padding: "30px"
      }
    }
  }
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={customTheme} >
        <Slide transition={["zoom"]} bgImage={ReactEuropeBanner} bgDarken="0.7" textColor="white">
          <Heading fit lineHeight={2}>Qlean на React Europe</Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white" textColor="black" progressColor="green" controlColor="green">
          <StyledLogo>Qlean</StyledLogo>
          <Heading size={3} lineHeight={2}>Минусы конференции</Heading>
          <StyledList>
            <ListItem>Не было докладов core разработчиков React</ListItem>
            <ListItem>Не самый релеватный Workshop</ListItem>
            <ListItem>Очень много участников</ListItem>
          </StyledList>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="black" progressColor="green" controlColor="green">
          <StyledLogo>Qlean</StyledLogo>
          <Heading size={3} lineHeight={2}>Плюсы конференции</Heading>
          <StyledList>
            <ListItem>Несколько известных спикеров</ListItem>
            <ListItem>Ряд открытий, которые прошли бы мимо</ListItem>
            <ListItem>Были очень крутыe доклады</ListItem>
          </StyledList>
        </Slide>
        <Slide transition={["zoom"]} bgColor="green" textColor="white">
          <StyledLogo textColor="white">Qlean</StyledLogo>
          <Heading fit>Полезности</Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white" textColor="black" progressColor="green" controlColor="green">
          <StyledLogo>Qlean</StyledLogo>
          <Heading size={4} lineHeight={1}>GatsbyJS</Heading>
          <StyledLinksContainer>
            <StyledLink href="https://www.gatsbyjs.org/" target="_blank">Site</StyledLink>
            <StyledLink href="https://www.gatsbyjs.org/docs/" target="_blank">Docs</StyledLink>
            <StyledLink href="https://github.com/gatsbyjs/gatsby" target="_blank">Github</StyledLink>
          </StyledLinksContainer>
          <Text margin="0 0 30px 0">Генератор статических сайтов на React</Text>
          <YouTube videoId="Gtd-Ht-D0sg"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="black" progressColor="green" controlColor="green">
          <StyledLogo>Qlean</StyledLogo>
          <Heading size={4} lineHeight={1}>React-admin</Heading>
          <StyledLinksContainer>
            <StyledLink href="https://marmelab.com/react-admin/" target="_blank">Docs</StyledLink>
            <StyledLink href="https://github.com/marmelab/react-admin" target="_blank">Github</StyledLink>
          </StyledLinksContainer>
          <Text margin="0 0 30px 0">UI на React под REST/GraphQL сервер</Text>
          <YouTube videoId="vGOdIBDUtvs"/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white" textColor="black" progressColor="green" controlColor="green">
          <StyledLogo>Qlean</StyledLogo>
          <Heading size={4} lineHeight={1}>Codesandbox</Heading>
          <StyledLinksContainer>
            <StyledLink href="https://codesandbox.io/" target="_blank">Site</StyledLink>
            <StyledLink href="https://github.com/marmelab/react-admin" target="_blank">Github</StyledLink>
            <StyledLink href="https://codesandbox.io/s/new" target="_blank">Sandbox</StyledLink>
          </StyledLinksContainer>
          <Text textSize={40} margin="0 0 30px 0">Онлайн редактор с установкой зависимостей</Text>
          <YouTube videoId="qURPenhndYA"/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="green" textColor="white">
          <StyledLogo textColor="white">Qlean</StyledLogo>
          <Heading fit>Доклады</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="black" progressColor="green" controlColor="green">
          <StyledLogo>Qlean</StyledLogo>
          <Heading margin="30px 0 0 0" size={3} lineHeight={1}>Lee Byron</Heading>
          <Text margin="20px 0 30px 0">Иммутабельная архитектура приложения</Text>
          <YouTube videoId="oTcDmnAXZ4E"/>
        </Slide>
        <Slide bgColor="white" textColor="black" progressColor="green" controlColor="green">
          <StyledLogo>Qlean</StyledLogo>
          <Heading margin="30px 0 0 0" size={3} lineHeight={1}>Ken Wheeler</Heading>
          <Text margin="20px 0 30px 0">Текущее состояние React</Text>
          <YouTube videoId="QFk6YwMz8nc"/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="green" textColor="white">
          <StyledLogo textColor="white">Qlean</StyledLogo>
          <Heading fit>Context</Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white" textColor="black" progressColor="green" controlColor="green"
          notes="Раньше API Context было мистическим и нерекомендовалось к юзанию, но сейчас оно стабильно. Видимо Дэн всем напомнил как Редакс шарит стейт"
        >
          <StyledLogo>Qlean</StyledLogo>
          <Heading fit size={3} lineHeight={2}>Context решает следующие задачи</Heading>
          <StyledList>
            <ListItem>Переиспользование общего функционала</ListItem>
            <ListItem>Избавление от проброса props</ListItem>
            <ListItem>Инкапсуляция логики в библиотеку</ListItem>
          </StyledList>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="black" progressColor="green" controlColor="green">
          <StyledLogo>Qlean</StyledLogo>
          <Heading size={3} lineHeight={1}>Создание Context</Heading>
          <CodePane margin="50px 0 0" lang="jsx" source={createContextExample}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="black" progressColor="green" controlColor="green">
          <StyledLogo>Qlean</StyledLogo>
          <Heading fit size={3} lineHeight={1}>Использование Provider и Consumer</Heading>
          <CodePane margin="20px 0 20px" lang="jsx" source={providerConsumerExample}/>
          <StyledLink href="https://codesandbox.io/s/4wm9m0lxz0" target="_blank">
            <Image src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
          </StyledLink>
        </Slide>
        <Slide transition={["zoom"]} bgColor="green" textColor="white">
          <StyledLogo textColor="white">Qlean</StyledLogo>
          <Heading fit>Suspence</Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white" textColor="black" progressColor="green" controlColor="green"
          notes="Главная проблема, что данных нету сразу, из этого вытекают все следующие пункты"
        >
          <StyledLogo>Qlean</StyledLogo>
          <Heading fit size={3} lineHeight={2}>Проблемы при получении данных</Heading>
          <StyledList>
            <ListItem>Нужно вернуть null если данных нет</ListItem>
            <ListItem>Спиннер во время выполнения запроса</ListItem>
            <ListItem>Обработка error</ListItem>
            <ListItem>Несколько запросов в одном компоненте</ListItem>
          </StyledList>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="black" progressColor="green" controlColor="green">
          <StyledLogo>Qlean</StyledLogo>
          <Heading fit size={6} lineHeight={1}>Создание объекта Cache и Resource</Heading>
          <CodePane margin="50px 0 0" lang="jsx" source={simpleCacheProviderExample}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="black" progressColor="green" controlColor="green">
          <StyledLogo>Qlean</StyledLogo>
          <Heading fit size={3} lineHeight={1}>Создание компонента Timeout</Heading>
          <CodePane margin="50px 0 0" lang="jsx" source={timeoutExample}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="black" progressColor="green" controlColor="green">
          <StyledLogo>Qlean</StyledLogo>
          <Heading fit size={3} lineHeight={1}>Создание компонента с данными</Heading>
          <CodePane margin="50px 0 20px" lang="jsx" source={suspenseExample}/>
          <StyledLink href="https://codesandbox.io/s/4wm9m0lxz0" target="_blank">
            <Image src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
          </StyledLink>
        </Slide>
        <Slide bgColor="white" textColor="black" progressColor="green" controlColor="green">
          <StyledLogo>Qlean</StyledLogo>
          <Heading size={3} lineHeight={1}>Peggy Rayzis</Heading>
          <Text margin="20px 0 30px 0">Путешествие в React Apollo</Text>
          <YouTube videoId="fCXYA3lZTbo"/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white" textColor="black">
          <StyledLogo>Qlean</StyledLogo>
          <Heading fit size={3} lineHeight={1}>HOC - 2016, Render props - 2018</Heading>
          <Image margin="40px 0 0" fit src={HOCRenderProps}/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="green" textColor="white">
          <StyledLogo textColor="white">Qlean</StyledLogo>
          <Heading fit>HOC vs Render Props</Heading>
        </Slide>
        <Slide bgColor="white" textColor="black" progressColor="green" controlColor="green">
          <StyledLogo>Qlean</StyledLogo>
          <Heading size={3} lineHeight={1}>Michael Jackson</Heading>
          <Text margin="20px 0 30px 0">Не пишите следующий HOC</Text>
          <YouTube videoId="BcVAq3YFiuc"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="black" progressColor="green" controlColor="green">
          <StyledLogo>Qlean</StyledLogo>
          <Heading fit size={3} lineHeight={1}>HOCs пришли на замену Mixins</Heading>
          <CodePane margin="20px 0 20px" lang="jsx" source={mixinsExample}/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white" textColor="black" progressColor="green" controlColor="green"
          notes="У миксинов при колизии нейминга был ворнинг. Статическая композиция, а не динамическая, как у Render Props, допустим"
        >
          <StyledLogo>Qlean</StyledLogo>
          <Heading size={3} lineHeight={2}>Минусы HOCs</Heading>
          <StyledList>
            <ListItem>Мы не знаем откуда приходят props</ListItem>
            <ListItem>Коллизии нейминга</ListItem>
            <ListItem>Статическая композиция</ListItem>
            <ListItem>Пробрасывание props и refs</ListItem>
          </StyledList>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="black" progressColor="green" controlColor="green"
          notes="Из минусов только, что функция inline, но как MJ сказал - это premature оптимизация и это дешевле оборота в HOC"
        >
          <StyledLogo>Qlean</StyledLogo>
          <Heading fit size={3} lineHeight={1}>Получение данных с помощью Render Props</Heading>
          <CodePane margin="20px 0 20px" lang="jsx" source={renderPropsExample}/>
          <StyledLink href="https://codesandbox.io/s/4wm9m0lxz0" target="_blank">
            <Image src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
          </StyledLink>
        </Slide>
        <Slide transition={["zoom"]} bgColor="green" textColor="white">
          <StyledLogo textColor="white">Qlean</StyledLogo>
          <Heading fit>Спасибо</Heading>
        </Slide>
      </Deck>
    );
  }
}
