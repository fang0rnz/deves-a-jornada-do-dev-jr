// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  Appear,
  Notes,
  Image
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            A jornada do desenvolvedor júnior
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Como sobreviver na indústria moderna de tecnologia
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Notes>
            <ul>
              <li>Aprenda em público. Networking.</li>
              <li>Qual a realidade do mercado de ti hoje em dia?</li>
              <li>Existe realmente mais gente MUITO experiente que gente inexperiente?</li>
              <li>Terminar falando sobre o mercado de trabalho e suas mudanças</li>
            </ul>
          </Notes>
          <Heading size={1} textColor="primary" caps>
            🤔
          </Heading>
          <Appear>
            <Text>Como começar a sua carreira de desenvolvedor?</Text>
          </Appear>
          <Appear>
            <Text>Como utilizar novos desenvolvedores ao seu máximo potencial?</Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Notes>
            <li>Contar história de como fui rejeitado</li>
            <li>O mercado antigo nunca se preparou para a profissão de programador</li>
            <li> Mão de obra qualificada NECESSITAVA de ensino formal por boas razões</li>
            <li> O cenário mudou, visto que o conhecimento é acessível</li>
            <li> A maioria dos métodos de seleção está defasado</li>
            <li> Isso impacta diretamente no financeito de qualquer empresa</li>
            <li> Caixa de skinner de devs para resolverem um problema, o que leva a um problema</li>
          </Notes>

          <Heading size={6} textColor="secondary" caps>
            👩🏿‍🏭 🏭 🏭 👨‍🏭
          </Heading>
          <Appear>
            <Heading size={5}>👩💻 👨‍💻</Heading>
          </Appear>
          <Appear>
            <Heading size={5}>☕☕☕</Heading>
          </Appear>

        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Notes>
            <li>Resultado de se ver gente com 10 anos de experiência</li>
            <li>Não se sentir suficiente</li>
            <li>Medo de tentar</li>
          </Notes>
          <Heading size={4} textColor="primary">
            Síndrome do impostor 😞
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Notes>
            <li> Paciência</li>
            <li> Pair programming entre juniors</li>
            <li> Pair programming com seniors</li>
            <li> Nem sempre a pessoa mais experiente é a mais apta a ajudar um desenvolvedor junior</li>
          </Notes>
          <Image width="100%" src="lotr.gif" />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Image width="100%" src="smith.gif" />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={1}>
            💭
          </Heading>
          <Appear>
            <li>Estratégias de ensino</li>
          </Appear>
          <Appear>
            <li>Cultura de tutoria</li>
          </Appear>
          <Appear>
            <li>Escolha minuciosa de tarefas que edifiquem os conhecimentos </li>
          </Appear>
          <Appear>
            <li>Processo mais visual </li>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Image width="100%" src="kungfu.gif"></Image>
        </Slide>


        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Image width="100%" src="junior.gif"></Image>
        </Slide>

      </Deck>
    );
  }
}
