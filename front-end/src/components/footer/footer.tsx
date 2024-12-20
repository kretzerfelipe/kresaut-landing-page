import GlowingCard from '../glowing-card/glowing-card';
import WhatsAppIcon from './socialMedia/whatsAppIcon';
import InstagramIcon from './socialMedia/instagramIcon';
import LinkedinIcon from './socialMedia/linkedinIcon';
import Logo from '@/assets/svg/logo';

export default function Footer() {
  return (
    <div className="container" style={{ justifyContent: 'center' }}>
      <div className="container w75" style={{ gap: '2%' }}>
        <div className="container">
          <GlowingCard color="#2988cc">
            <div className="container" style={{ justifyContent: 'center' }}>
              <div className="container extra-small-padding-y primary-extra-dark-border" style={{ justifyContent: 'center', boxShadow: '0 0 60px 10px #fafafa40', borderRadius: '18px' }}>
                <div className="container discover-bottom" style={{ justifyContent: 'center', width: '90%', gap: '5%' }}>
                  <div className="container slogan-logo" style={{ gap: 'var(--extra-small-spacing)', justifyContent: 'center' }}>
                    <div className="container">
                      <Logo color={'var(--white)'} />
                    </div>
                    <div className="container" style={{ width: '80%', gap: '5%' }}>
                      <InstagramIcon />
                      <WhatsAppIcon />
                      <LinkedinIcon />
                    </div>
                  </div>
                  <div className="container" style={{ gap: 'var(--mini-spacing)' }}>
                    <div className="container" style={{ justifyContent: 'center' }}>
                      <p style={{ color: 'var(--white)', fontSize: 'var(--mini-font-size)' }}>Email: kresaut.contato@gmail.com</p>
                    </div>
                    <div className="container" style={{ justifyContent: 'center' }}>
                      <p style={{ color: 'var(--white)', fontSize: 'var(--mini-font-size)' }}>Telefone: (47)98959-2850</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlowingCard>
        </div>
      </div>
    </div>
  );
}
