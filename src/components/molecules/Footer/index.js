import React from "react"
import * as S from './style'
import SnsBadges from "../../atoms/SnsBadges"

const Footer = () => {


  return (
    <S.Footer>
      <S.FooterBox>
        <S.Copyright className="pc-p">&copy;codeit - 2023</S.Copyright>
        <S.LinksBox>
          <S.Link href="privacy.html">Privacy Policy</S.Link>
          <S.Link href="faq.html">FAQ</S.Link>
          <S.Copyright className="mobile-p">&copy;codeit - 2023</S.Copyright>
        </S.LinksBox>
        <SnsBadges></SnsBadges>
      </S.FooterBox>
    </S.Footer>
  )
}

export default Footer;