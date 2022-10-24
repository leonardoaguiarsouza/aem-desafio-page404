import { MapTo } from "@adobe/aem-react-editable-components";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from 'react-router-dom'

import {
  Main,
  Header,
  Content,
  Footer,
  BgImg,
  TextContainer,
  Clock,
  Timer,
  Warning,
  ButtonGroup,
  ContinueButton,
  LogoutButton,
  FooterTextContainer,
  RefreshText
} from "./style";
import bgImg from '../../micro/assets/bgImg.png';

const HomepageEditConfig = {
  emptyLabel: "Preencha os campos necessários",
  
  isEmpty: function (props: any) {
    return !props;
  },
};

const Homepage = (props: any) => {
  const [timer, setTimer] = useState<number>(600);
  const timerRef = useRef<any>();

  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [dayNumber, setDayNumber] = useState(0);
  const [weekDay, setWeekDay] = useState('');
  const [month, setMonth] = useState('');
  const [fullYear, setFullYear] = useState(0);

  const history = useHistory();
  const location = useLocation();

  const [isSessionValid, setIsSessionValid] = useState<boolean>(true);
  const isUserAuthenticated = location.state ? location.state.isUserAuthenticated : false;  
  
  const baseUrl = location.pathname.slice(0, location.pathname.lastIndexOf('/'));

  const resetTimer = (): any => {
    clearTimeout(timerRef.current);
    setTimer(600);
  };

  const logout = (): any => {
    setIsSessionValid(false);
  };

  const formatTime = (time: any) => {
    if (time < 10) {
      return `0${time}`;
    }

    return time;
  };

  // useEffect(() => {
  //   if (!isUserAuthenticated) {
  //     history.push(`${baseUrl}/401.html`);
  //   }
  // }, [isUserAuthenticated]); 

  useEffect(() => {
    if (!isSessionValid) {
      history.push(`${baseUrl}/login.html`);
    }
  }, [isSessionValid]); 

  useEffect(() => {
    timerRef.current = timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);

    if (timer === 0) {
      logout();
    }

    return () => {
      clearTimeout(timerRef.current);
    }
  }, [timer]);

  useEffect(()=> {
    const update = () => {
        const date = new Date();
        setHour(formatTime(date.getHours()));
        setMinute(formatTime(date.getMinutes()));
        setDayNumber(date.getDate());
        setWeekDay(date.toLocaleString('pt-BR', { weekday: 'long' }));
        setMonth(date.toLocaleString('pt-BR', { month: 'long' }));
        setFullYear(date.getFullYear());
    }

    update();

    const interval = setInterval(()=> {
        update();
    }, 1000);

    return () => clearInterval(interval);
  }, []); 

  let fullHour = `${hour}:${minute}`;
  let fullDate = `${weekDay}, ${dayNumber} de ${month} de ${fullYear}`;

  return (
    <Main>
      <Header>
        <img className="logo" src={props.logoImg} />
        <Clock>
          <h1>{fullHour}</h1>
          <p>{fullDate}</p>
        </Clock>
        <p>Passo Fundo</p>  
        {/* <Weather></Weather> */}
      </Header>
      <Content>
        <BgImg>
          <img src={bgImg} />
        </BgImg>
        <TextContainer>
          <h2>{props.enTextBlock1}</h2>
          <p>{props.ptTextBlock1}</p>

          <h1>{props.enTextBlock2}</h1>
          <p>{props.ptTextBlock2}</p>

          <h1>{props.enTextBlock3}</h1>
          <p>{props.ptTextBlock3}</p>

          <h1>{props.enTextBlock4}</h1>
          <p>{props.ptTextBlock4}</p>
        </TextContainer>
      </Content>      
      <Footer>
        <FooterTextContainer>
          <Warning>
            <p>Essa janela do navegador é usada para manter sua sessão de autenticação ativa.<br/>Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
          </Warning>
          <RefreshText>
            <label>Application refresh in</label>
            <Timer>
              <strong>{timer}</strong>
              <p>seconds</p>
            </Timer>
          </RefreshText>
        </FooterTextContainer>
        <ButtonGroup>
          <ContinueButton onClick={() => { resetTimer() }}>Continuar Navegando</ContinueButton>
          <LogoutButton onClick={() => { logout() }}>Logout</LogoutButton>
        </ButtonGroup>
        {/* <Timer></Timer>
        <Buttons></Buttons> */}
      </Footer>
    </Main>
  );
};

export default MapTo("desafio-page404-aem/components/homepage")(
  Homepage,
  HomepageEditConfig
);