import * as S from "./Footer.styled";
const Footer = () => {
  return (
    <>
      <S.Container>
        <div className="w-25">
          <p>Categorie</p>
          <p>Accesoires</p>
          <p>Clothes</p>
          <p>Chaussures</p>
          <p>Robes</p>
        </div>
        <div>
          <p>Services</p>
          <p>Contact us</p>
          <p>About</p>
        </div>
      </S.Container>
      <S.Copyright>&copy;2022 Skitina & Machi</S.Copyright>
    </>
  );
};

export default Footer;
