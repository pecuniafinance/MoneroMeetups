import React from "react";
import background from "./imgs/barca.jpg";
import logo from "./imgs/logo_192.png";
import twitter from "./imgs/twitterx_logo.png";
import telegram from "./imgs/telegram_logo.png";
import { ReactComponent as Catalan } from "./imgs/catalonia-flag.svg";
import { styled, css } from "styled-components";

const Container = styled.div`
  display: flex;
  background-image: url(${background});
  background-color: #cccccc;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
  height: 100vh;
  width: 100%;
  gap: 20px;

  span {
    display: flex;
    flex-direction: inherit;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 15px;
    color: #fff;
    padding: 20px 40px;
    margin: 0 20px;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-size: 3rem;
    text-align: center;
  }

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 200px;
    height: 200px;
    margin: 20px;
  }

  .socials {
    flex-direction: row;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;

function App() {
  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="Monero Meetups Logo" />
        <span>
          <h1>Monero Meetups</h1>
          <h2>
            <Catalan />
            BARCELONA
            <Catalan />
          </h2>
          <h3 style={{ textAlign: "center" }}>
            Meetups, Events, Workshops, and P2P Hub for Individuals and Vendors.
          </h3>
          <div className="socials">
            <a
              href="https://twitter.com/MoneroBcn"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="Monero Meetups Twitter Link" />
            </a>
            <a
              href="https://t.me/+qo5KzDis8MI4ZmU8"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="Monero Meetups Telegram Group Link" />
            </a>
          </div>
        </span>
      </Wrapper>
    </Container>
  );
}

export default App;
