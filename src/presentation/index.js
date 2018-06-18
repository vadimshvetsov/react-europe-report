import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";

import { colors } from "@qlean/york-core";

// Import Spectacle Core tags
import {
  Appear,
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
import FightMe from "../assets/images/fightme.png";

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
        <Slide transition={["zoom"]} bgColor="white" textColor="black" progressColor="green" controlColor="green"
          notes="1. Не было core, 2. Нерелеватный Workshope, 3. Много людей"
        >
          <StyledLogo>Qlean</StyledLogo>
          <Heading size={3} lineHeight={2}>Минусы конференции</Heading>
          <StyledList>
            <Appear><ListItem>Не было докладов core разработчиков React</ListItem></Appear>
            <Appear><ListItem>Не самый релеватный Workshop</ListItem></Appear>
            <Appear><ListItem>Очень много участников</ListItem></Appear>
          </StyledList>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="black" progressColor="green" controlColor="green"
          notes="1. Несколько известных спикеров, 2. Ряд открытий, 3. Интересные доклады"
        >
          <StyledLogo>Qlean</StyledLogo>
          <Heading size={3} lineHeight={2}>Плюсы конференции</Heading>
          <StyledList>
            <Appear><ListItem>Несколько известных спикеров</ListItem></Appear>
            <Appear><ListItem>Ряд открытий, которые могли бы пройти мимо</ListItem></Appear>
            <Appear><ListItem>Были интересные доклады</ListItem></Appear>
          </StyledList>
        </Slide>
        <Slide transition={["zoom"]} bgColor="green" textColor="white"
          notes="Я выделил несколько полезных трудов, которые могли бы быть интересны любому JS-разработчику. Помимо доклада будет ссылка на документацию, гитхаб и сайт, если есть"
        >
          <StyledLogo textColor="white">Qlean</StyledLogo>
          <Heading fit>Полезности</Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white" textColor="black" progressColor="green" controlColor="green"
          notes="Участовал в lighting session talks, но доклад слабый очень, пытался уложить полчаса в 10 минут, поэтому ссылка на другой. Можно сохранять посты в markdown, не нужна бд, главный нацел - скорость. Reactjs.org на нем"
        >
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
        <Slide transition={["fade"]} bgColor="white" textColor="black" progressColor="green" controlColor="green"
          notes="Админка по REST/GraphQL, нужно добавить ссылку на API, на бэке описать роуты, он сам знает как ходить"
        >
          <StyledLogo>Qlean</StyledLogo>
          <Heading size={4} lineHeight={1}>React-admin</Heading>
          <StyledLinksContainer>
            <StyledLink href="https://marmelab.com/react-admin/" target="_blank">Docs</StyledLink>
            <StyledLink href="https://github.com/marmelab/react-admin" target="_blank">Github</StyledLink>
          </StyledLinksContainer>
          <Text margin="0 0 30px 0">UI на React под REST/GraphQL сервер</Text>
          <YouTube videoId="vGOdIBDUtvs"/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white" textColor="black" progressColor="green" controlColor="green"
          notes="Кодовая песочница с предустановленными проектами на React, Angular, Vue, Preact и прочим. Можно сразу начать писать код, можно ставить зависимости из npm, можно писать код онлайн c другими людьми (пока бесплатно, но в будущем по подписке), пет проджект когда-то, сейчас все для своих демок используют именно его. Можно комитить в гитхаб и сохранять там свои песочницы."
        >
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
        <Slide transition={["zoom"]} bgColor="green" textColor="white"
          notes="Я выделил для себя несколько интересных докладов, которые рекомендую к ознакомлению. Позже я скину ссылку на презентацию и вы можете прямо в ней все их посмотреть все доклады"
        >
          <StyledLogo textColor="white">Qlean</StyledLogo>
          <Heading fit>Доклады</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="black" progressColor="green" controlColor="green"
          notes="Рассказывал про архитектуру приложений с использованием GraphQL, про то, как менеджерить оптимистичные апдейты, а затем сверять с ответом сервера - данные приложения никогда не подлежат мутации и заменяются в порядке очереди. Когда перейдём на GraphQL - обязательно к просмотру"
        >
          <StyledLogo>Qlean</StyledLogo>
          <Heading margin="30px 0 0 0" size={3} lineHeight={1}>Lee Byron</Heading>
          <Text margin="20px 0 30px 0">Иммутабельная архитектура приложения</Text>
          <YouTube videoId="oTcDmnAXZ4E"/>
        </Slide>
        <Slide bgColor="white" textColor="black" progressColor="green" controlColor="green"
          notes="Это был открывающий конференцию доклад, Ken Wheeler директор open source в Formidable. Его доклад был очень качественным, с точки зрения подачи материала интересно, с юмором и при этом не без экспертности. Рассказывал про новые фичи реакта. Ко всему прочему он автор Spectacle, библиотеки, которая помогает делает презентации на React"
        >
          <StyledLogo>Qlean</StyledLogo>
          <Heading margin="30px 0 0 0" size={3} lineHeight={1}>Ken Wheeler</Heading>
          <Text margin="20px 0 30px 0">Текущее состояние React</Text>
          <YouTube videoId="QFk6YwMz8nc"/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="green" textColor="white"
          notes="Раньше API Context было мистическим и нерекомендовалось к юзанию, но сейчас оно стабильно. Видимо Дэн всем напомнил как Редакс шарит стейт"
        >
          <StyledLogo textColor="white">Qlean</StyledLogo>
          <Heading fit>Context</Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white" textColor="black" progressColor="green" controlColor="green"
          notes="1. Переиспользование функционала, 2. Избавление от проброса, 3. Инкапсуляция логики в библиотеку"
        >
          <StyledLogo>Qlean</StyledLogo>
          <Heading fit size={3} lineHeight={2}>Context решает следующие задачи</Heading>
          <StyledList>
            <Appear><ListItem>Переиспользование общего функционала</ListItem></Appear>
            <Appear><ListItem>Избавление от проброса props</ListItem></Appear>
            <Appear><ListItem>Инкапсуляция логики в библиотеку</ListItem></Appear>
          </StyledList>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="black" progressColor="green" controlColor="green">
          <StyledLogo>Qlean</StyledLogo>
          <Heading size={3} lineHeight={1}>Создание Context</Heading>
          <CodePane margin="50px 0 0" lang="jsx" source={createContextExample}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="black" progressColor="green" controlColor="green"
          notes="Переход в демо"
        >
          <StyledLogo>Qlean</StyledLogo>
          <Heading fit size={3} lineHeight={1}>Использование Provider и Consumer</Heading>
          <CodePane margin="20px 0 20px" lang="jsx" source={providerConsumerExample}/>
          <StyledLink href="https://codesandbox.io/s/4wm9m0lxz0" target="_blank">
            <Image src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
          </StyledLink>
        </Slide>
        <Slide transition={["zoom"]} bgColor="green" textColor="white"
          notes="Дэн Абрамов на JSConf Iceland впервые показал миру демо Suspense 5 апреля 2018. Кстати мне кажется что Исландией что-то не так, у них всего 320 тысяч человек, а они играют в ничью с Аргентиной Месси, у них выступает Дэн с культовым докладом про Suspence и Async Render"
        >
          <StyledLogo textColor="white">Qlean</StyledLogo>
          <Heading fit>Suspence</Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white" textColor="black" progressColor="green" controlColor="green"
          notes="Главная проблема, что данных нету сразу, из этого вытекают все следующие пункты: 1. Null вернуть если нет данных, 2. Спиннер, 3. Error - рассказать немного про ErrorBoundaries, 4. Несколько запросов в одном компоненте"
        >
          <StyledLogo>Qlean</StyledLogo>
          <Heading fit size={3} lineHeight={2}>Проблемы при получении данных</Heading>
          <StyledList>
            <Appear><ListItem>Нужно вернуть null если данных нет</ListItem></Appear>
            <Appear><ListItem>Спиннер во время выполнения запроса</ListItem></Appear>
            <Appear><ListItem>Обработка error</ListItem></Appear>
            <Appear><ListItem>Несколько запросов в одном компоненте</ListItem></Appear>
          </StyledList>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="black" progressColor="green" controlColor="green"
          notes="API WILL CHANGE"
        >
          <StyledLogo>Qlean</StyledLogo>
          <Heading fit size={6} lineHeight={1}>Создание объекта Cache и Resource</Heading>
          <CodePane margin="50px 0 0" lang="jsx" source={simpleCacheProviderExample}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="black" progressColor="green" controlColor="green"
          notes="Непонятно пока как они хотят показывать Error fallback вместе c Timeout. Сейчас компонент Timeout это обычный компонент, который показывает fallback до того, как прошел таймаут или появились данные, а если нет данных - показывает fallback, если я не ошибаюсь - через Error Boundaries"
        >
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
        <Slide bgColor="white" textColor="black" progressColor="green" controlColor="green"
          notes="Отличный доклад о том, как будет работать Appolo GraphQL вместе с Suspence. Это невероятно крутой доклад, все с GraphQL работает классно, декларативно описал данные и вперед, остальное делается за тебя"
        >
          <StyledLogo>Qlean</StyledLogo>
          <Heading size={3} lineHeight={1}>Peggy Rayzis</Heading>
          <Text margin="20px 0 30px 0">Путешествие в React Apollo</Text>
          <YouTube videoId="fCXYA3lZTbo"/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white" textColor="black"
          notes="Ещё в ее докладе увидел интересный слайд, которые не давал мне покоя. Почему сейчас 2018 и я не знаю что такое Render Props и почему он стал заменой HOCs"
        >
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
          <StyledLink href="https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce" target="_blank">Отличная статья про Render Props</StyledLink>
          <br/><br/>
          <StyledLink href="https://reactjs.org/docs/render-props.html" target="_blank">Новая страница в документации</StyledLink>
          <StyledLink href="https://twitter.com/mjackson/status/885910701520207872" target="_blank">
            <Image margin="40px 0 0" fit src={FightMe}/>
          </StyledLink>
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
          notes="1. Откуда пропсы непонятно. 2. Коллизии нэйминга, у миксинов при колизии нейминга был ворнинг. 3. Статическая композиция у HOC, а не динамическая, как у Render Props, допустим. 4. Приходится пробрасывать пропсы и рефы внутрь компонентов"
        >
          <StyledLogo>Qlean</StyledLogo>
          <Heading size={3} lineHeight={2}>Минусы HOCs</Heading>
          <StyledList>
            <Appear><ListItem>Мы не знаем откуда приходят props</ListItem></Appear>
            <Appear><ListItem>Коллизии нейминга</ListItem></Appear>
            <Appear><ListItem>Статическая композиция</ListItem></Appear>
            <Appear><ListItem>Пробрасывание props и refs</ListItem></Appear>
          </StyledList>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="black" progressColor="green" controlColor="green"
          notes="Из минусов только, что функция inline, но как MJ сказал - возможно это premature оптимизация и это дешевле оборота в HOC"
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
