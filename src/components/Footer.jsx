import React from 'react'
import { styled } from 'styled-components'
// import Newsletter from './components/Newsletter'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import { mobile } from '../responsive';

const Container=styled.div`
    width: 100%;
    height: 25vh;
    background-color: #080808;
    color: whitesmoke;
    /* margin-top: 2em; */
    /* display: flex;       do flex
    flex-direction: row; */
`
const Left=styled.div`
    width:45%;
    float: left;
    padding:1em 2em;
    ${mobile({padding:"1em"})};
    line-height: 25px;
`
const Title=styled.div`
    font-weight:bolder;
    font-size: 30px;
    margin-bottom: 10px;
`
const Location=styled.div`
    display: flex;
    font-size: 1.2em;
    margin-bottom: 20px;
`
const Contact=styled.div`
    font-size: 1.2em;
`
const SocailMediaLinks=styled.div`
    display: flex;
    flex-direction: row;
    width: 15%;
    justify-content: space-between;
    ${mobile({width:"60%"})};
`
const Link=styled.a`
    /* width: 25px; */
    text-decoration: none;
    color:inherit;
    &:hover{
        /* background-color: #053865; */
        cursor: pointer;
        /* border-radius:75% ; */
    }
`
const Right=styled.div`
    
    padding:2em;
    font-size: 1.2em;
`
const Mail=styled.a`
    margin-top: 10px;
    text-decoration: none;
    display: flex;
    justify-content: baseline;
    color:blueviolet;
`
const Footer = () => {
    const email = 'assadiharsha@gmail.com';
    const subject = 'Regarding Your Website';
    const body = 'Hello,';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return (
    <Container>
        <Left>
            <Title>HARSHA.</Title>
            <Location>
                <LocationOnIcon/>Tirupati
            </Location>
            <Contact>
                Reach out through
                <SocailMediaLinks>
                    <Link href="https://www.linkedin.com/in/harshavardhan-asadi-b71898220/"><LinkedInIcon/></Link>
                    <Link href="https://www.instagram.com/_ha.r.sha"><InstagramIcon/></Link>
                    <Link href="https://github.com/Harsha335"><GitHubIcon/></Link>
                </SocailMediaLinks>
            </Contact>
        </Left>
        <Right>
                Lets know any suggestion!!!
                <Mail href={mailtoLink}>
                    Send Mail <MailIcon/>
                </Mail>
        </Right>
      </Container>
  )
}

export default Footer
