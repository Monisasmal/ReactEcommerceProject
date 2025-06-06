import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from "../styles/button";
import styled from 'styled-components'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => (
  <Wrapper>
    <section className='contact-short'>
      <div className='grid grid-two-column'>
        <div>
          <h3>Ready to Get  Started?</h3>
          <h3>Talk to us Today</h3>
        </div>
        <div>
          <Button className="btn hireme-btn">
            <NavLink to="/contact">Get Started</NavLink>
          </Button>
        </div>
      </div>
    </section>

    {/* Main Footer */}
    <footer>
      <div className='container grid grid-four-column'>
        <div className='footer-about'>
          <h3>Manaswini Store</h3>
          <p>😊Be Happy with US😊</p>
        </div>
        <div className='footer-subscribe'>
          <h3>Subscribe to get important updates</h3>
          <form action='#'>
            <input className="input" type='email' name='email' placeholder='Your E-Mail' />
            <input className="input" type='submit' value='subscribe' />
          </form>
        </div>
        <div className='footer-social'>
          <h3>Follow Us</h3>
          <div className='footer-social-icons'>
            <div>
              <FaFacebook className="icons" />
            </div>
            <div>
              <FaInstagram className="icons" />
            </div>
            <div>
              <FaTwitter className="icons" />
            </div>
          </div>
        </div>
        <div className='footer-contact'>
          <h3>Call Us</h3>
          <h3>+91 6370094643</h3>
        </div>
      </div>
      <div className='footer-bottom-section'>
        <hr />
        <div className='container grid grid-two-column'>
          <p>
            @{new Date().getFullYear()} ManaswiniStore. All Rights Reserved
          </p>
          <div>
            <p>PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
          </div>
        </div>
      </div>
    </footer>
  </Wrapper>
)

const Wrapper = styled.section`
 
 .contact-short{
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
     
    .grid div:last-child {
        justify-self: end;
        align-self: center;
      }
    }
    .input{
        padding: 1rem;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
    }
    

    footer{
        padding: 14rem 8rem 9rem 10rem;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    
    h3 {
        color: ${({ theme }) => theme.colors.white};
        margin-bottom: 2.4rem;
      }
      p {
        color: ${({ theme }) => theme.colors.white};
      }
      .footer-social-icons {
        display: flex;
        gap: 2rem;
      
        div {
            padding: 1rem;
            border-radius: 50%;
            border: 2px solid ${({ theme }) => theme.colors.white};
    
            .icons {
              color: ${({ theme }) => theme.colors.white};
              font-size: 2.4rem;
              position: relative;
              cursor: pointer;
            }
          }
        }
      }

   .footer-bottom-section{
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom-section {
      padding-top: 4.8rem;
    }
   }
`;

 export default Footer;


