// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck, Heading, Slide, Text, Appear, Notes, Image } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import './styles.css';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
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
              <li>
                Existe realmente mais gente MUITO experiente que gente
                inexperiente?
              </li>
              <li>
                Terminar falando sobre o mercado de trabalho e suas mudanças
              </li>
            </ul>
          </Notes>
          <Heading padding={50} size={1} textColor="primary" caps>
            🤔
          </Heading>
          <Appear>
            <li>Como começar a sua carreira de desenvolvedor?</li>
          </Appear>
          <Appear>
            <li>Como atenuar a curva de adaptação de um desenvolvedor?</li>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Notes>
            <li>Contar história de como fui rejeitado</li>
            <li>
              O mercado antigo nunca se preparou para a profissão de programador
            </li>
            <li>
              Mão de obra qualificada NECESSITAVA de ensino formal por boas
              razões
            </li>
            <li> O cenário mudou, visto que o conhecimento é acessível</li>
            <li> A maioria dos métodos de seleção está defasado</li>
            <li> Isso impacta diretamente no financeito de qualquer empresa</li>
            <li>
              Caixa de skinner de devs para resolverem um problema, o que leva a
              um problema
            </li>
          </Notes>

          <Heading textColor="secondary" caps>
            👩🏿‍🏭 🏭 👨‍🏭
          </Heading>
        </Slide>

        <Slide bgColor="secondary" transition={['slide']}>
          <Image width="50%" src="dan.jpg" />
        </Slide>
        <Slide transition={['slide']} bgColor="primary" textColor="tertiary">
          <Heading style={{ marginTop: '50px' }}>👩💻 👨‍💻</Heading>
          <Appear>
            <Heading style={{ marginTop: '50px' }}>☕</Heading>
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
            <li> Estrutura de pair programming</li>
            <li>
              Nem sempre a pessoa mais experiente é a mais apta a ajudar um
              desenvolvedor junior
            </li>
          </Notes>
          <Image width="100%" src="lotr.gif" />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Notes>
            <li> Paciência</li>
            <li> Estrutura de pair programming</li>
            <li>
              Nem sempre a pessoa mais experiente é a mais apta a ajudar um
              desenvolvedor junior
            </li>
          </Notes>
          <Image width="100%" src="smith.gif" />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={1}>💭</Heading>
          <Appear>
            <li style={{ paddingTop: '60px' }}>Estratégias de ensino</li>
          </Appear>
          <Appear>
            <li>
              Cultura de tutoria - é ok e esperado não entender algo de primeira
            </li>
          </Appear>
          <Appear>
            <li>Escolha de tarefas apropriadas para o nível de conhecimento</li>
          </Appear>
          <Appear>
            <li>Processo mais visual </li>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Image width="100%" src="kungfu.gif" />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>Desafio para o coffee break</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={5}>💡</Heading>
          <Appear>
            <li>
              <strong>Compartilhe</strong> experiências de tutoria
            </li>
          </Appear>
          <Appear>
            <li>
              <strong>Discuta</strong> como você e seu time podem rever
              processos defasados
            </li>
          </Appear>
          <Appear>
            <li>
              <strong>Ache</strong> alguém com vontade de aprender / entrar na
              indústria e tente ajudar.{' '}
              <em>Especialmente se você for júnior</em>
            </li>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Image width="100%" src="junior.gif" />
        </Slide>
      </Deck>
    );
  }
}
