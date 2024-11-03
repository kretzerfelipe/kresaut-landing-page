import SloganLogo from "@/assets/svg/slogan-logo";
import Header from "@/components/header/header";
import Image from "next/image";
import img from '../assets/img/photographer.png'
import Screens from "@/assets/svg/main-page/screens";
import TopBgLights from "@/assets/svg/main-page/bg/top-bg-lights";
import Footer from "@/components/footer/footer"
import GlowingCard from "@/components/glowing-card/glowing-card";
import InteractiveCards from "@/components/glowing-card/animation";
import { Discover, DiscoverSide } from "@/animations/discover";
import Photographer from "@/assets/svg/main-page/photographer";
import Star from "@/assets/svg/star";
import StarsAnimation from "@/animations/home/starsAnimation";

export default function Home() {
  return (
    <div className="container small-padding-y" style={{ backgroundColor: 'var(--primary-extra-dark)', overflow: 'hidden' }}>
      <InteractiveCards />
      <Discover className="discover-text" startScroll={85} />
      <Discover className="discover-footer" />
      <DiscoverSide side="left" className="discover-left" />
      <DiscoverSide side="right" className="discover-right" />
      <StarsAnimation />
      <div className="container" style={{ position: 'absolute', top: 0, backgroundColor: 'var(--primary-extra-dark)' }}>
				<TopBgLights />
			</div>
      <div className="container" style={{ alignContent: 'start', rowGap: 'var(--large-spacing)', position: 'relative' }}>
        <Header />
        <div className="container">
          <div className="container" style={{ justifyContent: 'center' }}>
            <div className="container" style={{ width: '20%' }}>
              <SloganLogo />
            </div>
          </div>
          <div className="container" style={{ justifyContent: 'center' }}>
            <div className="container" style={{ position: "relative", width: '75%', aspectRatio: "4.16184971098", alignItems: 'center' }}>
              <Photographer />
              <div className="container star-01" style={{ position: 'absolute', width: '1.5vw', right: '16.5%', top: '35%', rotate: '22deg' }}>
                <Star />
              </div>
              <div className="container star-02" style={{ position: 'absolute', width: '.75vw', right: '16.3%', top: '42.5%', rotate: '-22deg' }}>
                <Star />
              </div>
              <div className="container" style={{ position: 'absolute', left: '2%', width: '35%' }}>
                <p style={{ color: 'var(--white)', fontSize: '1.25vw' }}>
                  Para empreendedores que buscam mais do que um site: nós criamos experiências digitais que refletem a personalidade do seu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container discover-text" style={{ justifyContent: 'center', position: 'relative' }}>
          <div className="container" style={{ width: '75%', gap: 'var(--medium-spacing)' }}>
            <div className="container discover-left" style={{ width: '50%', alignItems: 'center' }}>
              <Screens />
            </div>
            <div className="container discover-right fill very-small-border-radius" style={{ border: '2px solid var(--primary-extra-dark)', background: 'linear-gradient(-45deg, #0A6EB530, #01163830)', justifyContent: 'center', alignContent: 'center' }}>
              <div className="container" style={{ width: '90%', gap: 'var(--extra-small-spacing)' }}>
                <div className="container">
                  <p style={{ textAlign: 'center', color: 'var(--white)' }}>
                    Pronto para levar seu negócio ao próximo nível? A 
                    <strong style={{ color: 'var(--white)' }}> Kresaut </strong>
                    cria sites que combinam design único com a
                    <strong style={{ color: 'var(--white)' }}> a funcionalidade perfeita</strong>
                    .
                  </p>
                </div>
                <div className="container">
                  <p style={{ textAlign: 'center', color: 'var(--white)' }}>
                    <strong style={{ color: 'var(--white)' }}>Não fique para trás na era digital. </strong>
                    Deixe-nos digitalizar o seu negócio com inovação e estilo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container discover-text" style={{ justifyContent: 'center' }}>
          <div className="container" style={{ width: '75%', gap: '2%' }}>
            <div className="container">
              <GlowingCard color="#2988cc">
                <div className="container" style={{ justifyContent: 'center' }}>
                  <div className="container" style={{ width: '90%' }}>
                    <div className="container small-padding-y" style={{ justifyContent: 'center', gap: 'var(--extra-small-spacing)' }}>
    	                <h5 className="discover-left" style={{ textAlign: 'center', color: 'var(--white)' }}>
                        Sites personalizados
                      </h5>
                      <div className="container">
                        <p className="discover-right" style={{ textAlign: 'center', color: 'var(--white)' }}>
                          Transforme sua presença online com um site que reflete a essência do seu negócio. Na Kresaut, criamos sites sob medida, responsivos e visualmente marcantes que se destacam na multidão, atraindo clientes e aumentando sua autoridade no mercado.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowingCard>
            </div>
            <div className="container discover-text">
              <GlowingCard color="#29cccc">
                <div className="container" style={{ justifyContent: 'center' }}>
                  <div className="container" style={{ width: '90%' }}>
                    <div className="container small-padding-y" style={{ justifyContent: 'center', gap: 'var(--extra-small-spacing)' }}>
    	                <h5 className="discover-right" style={{ textAlign: 'center', color: 'var(--white)' }}>
                        Catálogo online
                      </h5>
                      <div className="container">
                        <p className="discover-left" style={{ textAlign: 'center', color: 'var(--white)' }}>
                          Chega de limitações! Com nosso gerador de catálogo, organize e apresente seus produtos de maneira intuitiva e atraente. Compartilhe seu catálogo em segundos, atualize informações em tempo real e leve seu negócio para qualquer lugar com uma ferramenta rápida e funcional.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowingCard>
            </div>
            <div className="container discover-text">
              <GlowingCard color="#29cc88">
               <div className="container" style={{ justifyContent: 'center' }}>
                  <div className="container" style={{ width: '90%' }}>
                    <div className="container small-padding-y" style={{ justifyContent: 'center', gap: 'var(--extra-small-spacing)' }}>
    	                <h5 className="discover-left" style={{ textAlign: 'center', color: 'var(--white)' }}>
                        Sistema que solucionam seus problemas
                      </h5>
                      <div className="container">
                        <p className="discover-right" style={{ textAlign: 'center', color: 'var(--white)' }}>
                          A Kresaut vai além da tecnologia: entregamos soluções digitais que realmente fazem a diferença no dia a dia do seu negócio. De sistemas de agendamento a ferramentas de análise, identificamos suas necessidades e criamos sistemas personalizados para resolver problemas e otimizar processos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowingCard>
            </div>
          </div>
        </div>
        <div className="container discover-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
