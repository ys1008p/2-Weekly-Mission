import styled from "styled-components";

const Div = styled.div`
  display: flex;
  column-gap: 1.2rem;
  height: 2rem;
`;

const badges = [
  {
    name: "facebook",
    href: "https://www.facebook.com/",
    src: "./images/facebook.svg",
  },
  {
    name: "twitter",
    href: "https://twitter.com/",
    src: "./images/twitter.svg",
  },
  {
    name: "youtube",
    href: "https://www.youtube.com/",
    src: "./images/youtube.svg",
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/",
    src: "./images/instagram.svg",
  },
]


const SnsBadges = () => {
  return (
    <Div>
      {badges.map(({name, href, src})=>(
        <a key={name} href={href} target="_blank" rel="noopener noreferrer">
          <img src={src} alt={`${name} 홈페이지로 연결된 ${name} 로고`}></img>
        </a>
      ))}
    </Div>
  )
}

export default SnsBadges