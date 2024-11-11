"use client"

import GlowingCard from "../glowing-card/glowing-card";

export default function Header() {

	function scrollToElement(className: string) {
		const element = document.querySelector(`.${className}`);
		if (element) {
			const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - (window.innerHeight * 0.02); // Subtrai 2vh
			window.scrollTo({ top: elementPosition, behavior: 'smooth' });
		}
	}

	return (
		<div className='container' style={{ justifyContent: "center" }}>
			<div className='container' style={{ gap: "2%", width: "35%" }}>
				<div className='container'>
					<GlowingCard color='#2988cc'>
						<div className='container extra-small-padding-y primary-extra-dark-border' style={{ justifyContent: "space-around", boxShadow: "0 0 60px 10px #fafafa40", borderRadius: '20px' }}>
							<div className='container' style={{ width: "auto", userSelect: 'none' }}>
								<p style={{ color: "var(--white)", cursor: 'pointer' }} onClick={() => scrollToElement('sobre-menu')}>Sobre</p>
							</div>
							<div className='container' style={{ width: "auto", userSelect: 'none' }}>
								<p style={{ color: "var(--white)", cursor: 'pointer' }} onClick={() => scrollToElement('servicos-menu')}>Serviços</p>
							</div>
							<div className='container' style={{ width: "auto", userSelect: 'none' }}>
								<p style={{ color: "var(--white)", cursor: 'pointer' }} onClick={() => scrollToElement('contatos-menu')}>Contatos</p>
							</div>
						</div>
					</GlowingCard>
				</div>
			</div>
		</div>
	);
}
