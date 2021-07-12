import styles from 'styles/Home.module.css'
import styled from 'styled-components'
import AnnounceCap from 'components/Home/AnnounceCap'
import Header from 'components/Home/Header'
import HowItWorks from 'components/Home/HowItWorks'
import MoreUtility from 'components/Home/MoreUtility'
import TeamMember from 'components/Home/TeamMember'
import Footer from 'components/Home/Footer'
import {
  dataHowItWorks,
  dataMoreNFTs,
  dataTeam,
} from 'helpers/dummy'
import { useEffect } from 'react'

const Section = styled.div`
  padding: 60px 20%;
  width: 100vw;
  max-width: 100%;

  @media screen and (max-width: 1920px) {
    padding 60px 15%;
  }

  @media screen and (max-width: 1440px) {
    padding 60px;
  }

  @media screen and (max-width: 768px) {
    padding 60px 20px;
  }

  &.section-1 {
    background: url("/static/images/bg/bg-1.png") #FBF9F8;
    background-repeat: no-repeat;
    background-position: top right;
    height: calc(100vh - 156px);
    display: flex;
    flex-direction: column;
    justify-content: center;

    .available-on-icon-header {
      text-transform: none;
      margin-bottom: 0;
    }
  }

  &.section-2 {
    background: url("/static/images/bg/bg-2.png") #FBF9F8;
    background-repeat: no-repeat;
    background-position: bottom left;
    height: 50px;
  }

  &.section-3 {
    background: #FFF;

    .section-3-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }

    .section-3-item {
      width: 30%;

      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }

    .supported-projects {
      margin-top: 60px;

      @media screen and (max-width: 768px) {
        margin-top: 15px;
      }
    }
  }

  &.section-4 {
    background: #FBF9F8;
    padding-bottom: 60px;

    .section-4-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 60px;
      text-align: center;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 28px;

      padding: 0 160px;
      letter-spacing: 0.1em;

      @media screen and (max-width: 768px) {
        flex-direction: column;
        font-size: 14px;
        padding: 0;
      }

      @media screen and (min-width: 769px) and (max-width: 1200px) {
        padding: 0 80px;
      }

      &--first {
        margin-bottom: 20px;
      }
    }

    .section-4-item {
      width: 30%;

      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }

    .supported-projects {
      margin-top: 60px;
    }
  }

  &.section-5 {
    background: url("/static/images/bg/bg-3.png") #FFF;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100%;
    padding-top: 60px;
    padding-bottom: 440px;

    @media screen and (max-width: 1920px) {
      padding-bottom: 240px;
    }

    @media screen and (max-width: 768px) {
      padding-bottom: 120px;
    }

    .section-5-content {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
    }

    .section-5-item {
      width: 45%;
      margin-bottom: 34px;

      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }

  &.section-6 {
    background: #FBF9F8;
    padding-bottom: 60px;

    .section-6-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 60px;

      @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
      }
    }

    .section-6-item {
      width: 18%;
      @media screen and (max-width: 768px) {
        width: 80%;
        margin-bottom: 23px;
      }
    }
  }

  &.section-7 {
    // background: url("/static/images/bg/bg-5.png") #FFF;
    background-repeat: no-repeat;
    background-position: top right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 140px;

    .investor-img {
      margin: 1rem;
    }
  }

  &.section-8 {
    background: url("/static/images/bg/bg-4.png") #FFF;
    background-repeat: no-repeat;
    background-position: bottom left;
    background-size: contain;
    height: 150px;
  }

   &.section-9 {
    background: #FBF9F8;
    display: flex;
    flex-direction: column;
    justify-content: center;  
    padding-top: 140px;

    .partner-img {
      margin: 1rem;
    }
  }

  &.section-10 {
    background: url("/static/images/bg/bg-6.png") #FFF;
    background-repeat: no-repeat;
    background-position: bottom left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 140px;
    padding-bottom: 140px;

    @media screen and (max-width: 768px) {
      padding-top: 130px;
      background: url("/static/images/bg/bg-5.png") #FFF;
      background-repeat: no-repeat;
      background-position: top right;
      background-size: 50%;
      padding-bottom: 0px;
    }

    .subscribe {
      margin-top: 26px;
      display: flex;
      justify-content: center;
    }
  }

  &.section-11 {
    display: none;
    
    @media screen and (max-width: 768px) {
      display: block;
      background: url("/static/images/bg/bg-4.png") #FFF;
      background-repeat: no-repeat;
      background-position: bottom left;
      background-size: contain;
      height: 150px;
    }
  }

  .section-images {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
  }
`

export default function Home() {
  useEffect(() => {
    document.body.classList.add('home')
    return () => document.body.classList.remove('home')
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <AnnounceCap />
        <Header />
        <Section className="section-1">
          <h1 className="font-color-dark font-size-lg text-center">
            Loans for NFT and DeFi assets
          </h1>
          <p className="font-color-dark font-size-xd text-center">
            Get more leverage out of your assets for loans and yield-farming
          </p>
          <div className="d-flex justify-content-center">
            <a
              href="https://drops.co/loans"
              className="link-button  dark m-10 font-button"
              rel="noopener noreferrer"
              style={{ marginTop: 25, marginBottom: 25 }}
            >
              Launch App
            </a>
            {/* <a
              href="https://docsend.com/view/e9nq2waxia63hrq7"
              target="_blank"
              className="link-button  light m-10 font-button"
              rel="noopener noreferrer"
            >
              WHITEPAPER
            </a> */}
          </div>
          <p className="font-color-dark font-size-xd available-on-icon-header text-center">
            Available on
          </p>
          <div className="d-flex justify-content-center" style={{ marginTop: 10 }}>
            <a
              className="social m-10"
              href="https://v2.info.uniswap.org/pair/0x00aa1c57e894c4010fe44cb840ae56432d7ea1d1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width="66"
                height="66"
                src="/static/images/icons/uniswap.png"
                alt=""
              />
            </a>
            <a
              className="social m-10"
              href="https://gate.io/trade/DOP_USDT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width="66"
                height="66"
                src="/static/images/icons/gate.png"
                alt=""
              />
            </a>
            <a
              className="social m-10"
              href="https://www.jbex.cc/exchange/DOP1/USDT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                height="66"
                src="/static/images/icons/jubi.png"
                alt=""
              />
            </a>
          </div>
        </Section>
        <Section className="section-2" />
        <Section className="section-3">
          <h2 className="font-color-dark font-size-lg">What can you do at Drops?</h2>
          <div className="section-3-content">
            {dataHowItWorks.map((d, index) => (
              <HowItWorks
                className="section-3-item"
                key={`how-it-works-${index}`}
                bg={index % 3}
                data={d}
              />
            ))}
          </div>
        </Section>
        <Section className="section-4">
          <h2 className="font-color-dark font-size-lg text-center">
            More Utility For Your NFTs
          </h2>
          <div className="section-4-content section-4-content--first">
            Drops brings DeFi-style infrastructure to NFTs, adding much-needed
            utility to idle NFT assets. Users can leverage their NFTs to obtain
            loans and earn real yield, reducing the opportunity cost of holding
            NFTs long-term.
          </div>
          <div className="section-4-content">
            The Drops infrastructure will become increasingly important as we
            witness the rise of “financial” NFTs - an expansion of the space
            beyond digital artwork into more tangible financial instruments.
          </div>
        </Section>
        <Section className="section-5">
          <h2 className="font-color-dark font-size-lg text-center">
            NFT Lending Pools
          </h2>
          <div className="section-5-content">
            {dataMoreNFTs.map((d, index) => (
              <MoreUtility
                className="section-5-item"
                key={`upcoming-drops-${index}`}
                data={d}
              />
            ))}
          </div>
        </Section>
        {/* <Section className="section-6">
          <h2 className="font-color-dark font-size-lg text-center">Our Team</h2>
          <div className="section-6-content">
            {dataTeam.map((d, index) => (
              <TeamMember
                className="section-6-item"
                bg={index % 5}
                key={`team-member-${index}`}
                data={d}
              />
            ))}
          </div>
        </Section> */}
        {/* <Section className="section-7">
          <h2 className="font-color-dark font-size-lg text-center">Apply as an artist</h2>
          // <p className="font-color-dark font-size-md text-center">Apply  Duis libero elit, pulvinar vitae turpis non,<br/>scelerisque tempus felis</p>
          <div className="d-flex justify-content-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeIu6-kRK_Owq4w5z8OfSz3YMXvlB1A_flAxDyxLJ6PMRaXww/viewform?usp=sf_link"
              target="_blank" className="link-button m-10 font-button" rel="noopener noreferrer">APPLY</a>
          </div>
        </Section> */}
        <Section className="section-7">
          <h2 className="font-color-dark font-size-lg text-center">
            Investors
          </h2>
          <div className="section-images">
            <img
              className="investor-img"
              src="/static/images/investors/investor-1.png"
              alt=""
            />
            <img
              className="investor-img"
              src="/static/images/investors/investor-2.png"
              alt=""
            />
            <img
              className="investor-img"
              src="/static/images/investors/investor-3.png"
              alt=""
            />
            <img
              className="investor-img"
              src="/static/images/investors/investor-4.png"
              alt=""
            />
            <img
              className="investor-img"
              src="/static/images/investors/investor-5.png"
              alt=""
            />
            <img
              className="investor-img"
              src="/static/images/investors/investor-6.png"
              alt=""
            />
            <img
              className="investor-img"
              src="/static/images/investors/investor-7.png"
              alt=""
            />
            <img
              className="investor-img"
              src="/static/images/investors/investor-8.png"
              alt=""
            />
          </div>
        </Section>
        <Section className="section-8" />
        <Section className="section-9">
          <h2 className="font-color-dark font-size-lg text-center">Partners</h2>
          <div className="section-images">
            <img
              className="partner-img"
              src="/static/images/partners/partner-1.png"
              alt=""
            />
            <img
              className="partner-img"
              src="/static/images/partners/partner-2.png"
              alt=""
            />
            <img
              className="partner-img"
              src="/static/images/partners/partner-3.png"
              alt=""
            />
            <img
              className="partner-img"
              src="/static/images/partners/partner-4.png"
              alt=""
            />
            <img
              className="partner-img"
              src="/static/images/partners/partner-5.png"
              alt=""
            />
            <img
              className="partner-img"
              src="/static/images/partners/partner-6.png"
              alt=""
            />
            <img
              className="partner-img"
              src="/static/images/partners/partner-7.png"
              alt=""
            />
          </div>
        </Section>
        <Footer />
      </div>
    </div>
  )
}
