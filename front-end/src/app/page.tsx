import SloganLogo from "@/assets/svg/slogan-logo";
import Header from "@/components/header/header";
import TopBgLights from "@/assets/svg/main-page/bg/top-bg-lights";
import Footer from "@/components/footer/footer"
import GlowingCard from "@/components/glowing-card/glowing-card";
import InteractiveCards from "@/components/glowing-card/animation";
import { Discover, DiscoverSide } from "@/animations/discover";
import Photographer from "@/assets/svg/main-page/photographer";
import Star from "@/assets/svg/star";
import StarsAnimation from "@/animations/home/starsAnimation";
import NewsForm from "@/components/news-form";

export default function Home() {
  return (
    <div className="container small-padding-y" style={{ backgroundColor: 'var(--primary-extra-dark)', overflow: 'hidden' }}>
      <Discover className="discover-bottom" startPosition="bottom" startScroll={100} />
      <Discover className="discover-text" />
      <DiscoverSide side="left" className="discover-left" />
      <DiscoverSide side="right" className="discover-right" />
      <InteractiveCards />
      <StarsAnimation />
      <div className="container" style={{ position: 'absolute', top: 0, backgroundColor: 'var(--primary-extra-dark)' }}>
				<TopBgLights />
			</div>
      <div className="container" style={{ alignContent: 'start', rowGap: 'var(--large-spacing)', position: 'relative' }}>
        <Header />
        <div className="container sobre-menu">
          <div className="container" style={{ justifyContent: 'center' }}>
            <div className="container" style={{ width: '20%' }}>
              <SloganLogo />
            </div>
          </div>
          <div className="container" style={{ justifyContent: 'center' }}>
            <div className="container w75" style={{ position: "relative", alignItems: 'center' }}>
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
        <div className="container servicos-menu" style={{ justifyContent: 'center' }}>
          <div className="container w75" style={{ gap: '2%' }}>
            <div className="container fill fill-mobile-fix">
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
            <div className="container fill fill-mobile-fix">
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
            <div className="container fill fill-mobile-fix">
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
        <div className="container contatos-menu">
          <NewsForm />
        </div>
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
}
