import Logo from "@/assets/svg/logo";
import Header from "@/components/header";
import Image from "next/image";
import img from '../assets/img/photographer.png'
import Screens from "@/assets/svg/main-page/screens";

export default function Home() {
  return (
    <div className="container small-padding-y" style={{ backgroundColor: 'var(--primary-extra-dark)', alignContent: 'start', rowGap: 'var(--small-spacing)' }}>
      <Header />
      <div className="container">
        <div className="container" style={{ justifyContent: 'center' }}>
          <div className="container" style={{ width: '20%' }}>
            <Logo />
          </div>
        </div>
        <div className="container" style={{ justifyContent: 'center' }}>
          <div className="container" style={{ position: "relative", width: '60%', aspectRatio: "4.16184971098", alignItems: 'center' }}>
            <Image src={img} alt={""} fill className='img-cover' />
            <div className="container" style={{ position: 'absolute', left: '2%', width: '35%' }}>
              <p style={{ color: 'var(--white)', fontSize: '1.25vw' }}>
                Para empreendedores que buscam mais do que um site: nós criamos experiências digitais que refletem a personalidade do seu negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ justifyContent: 'center' }}>
        <div className="container" style={{ width: '60%', gap: 'var(--medium-spacing)' }}>
          <div className="container" style={{ width: '50%', alignItems: 'center' }}>
            <Screens />
          </div>
          <div className="container fill very-small-border-radius" style={{ backgroundColor: 'var(--white)', justifyContent: 'center', alignContent: 'center' }}>
            <div className="container" style={{ width: '90%', gap: 'var(--extra-small-spacing)' }}>
              <div className="container">
                <p style={{ textAlign: 'center' }}>
                  Pronto para levar seu negócio ao próximo nível? A 
                  <strong> Kresaut </strong>
                  cria sites que combinam design único com a
                  <strong> a funcionalidade perfeita</strong>
                  .
                </p>
              </div>
              <div className="container">
                <p style={{ textAlign: 'center' }}>
                  <strong>Não fique para trás na era digital. </strong>
                  Deixe-nos digitalizar o seu negócio com inovação e estilo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
