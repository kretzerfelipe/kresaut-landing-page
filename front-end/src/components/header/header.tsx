import GlowingCard from "../glowing-card/glowing-card";

export default function Header() {
	return (
		<div className='container' style={{ justifyContent: "center" }}>
			<div className='container' style={{ gap: "2%", width: "35%" }}>
				<div className='container'>
					<GlowingCard color='#2988cc'>
						<div className='container extra-small-padding-y primary-extra-dark-border' style={{ justifyContent: "space-around", boxShadow: "0 0 60px 10px #fafafa40", borderRadius: '20px' }}>
							<div className='container' style={{ width: "auto" }}>
								<p style={{ color: "var(--white)", cursor: 'pointer' }}>Sobre</p>
							</div>
							<div className='container' style={{ width: "auto" }}>
								<p style={{ color: "var(--white)", cursor: 'pointer' }}>Serviços</p>
							</div>
							<div className='container' style={{ width: "auto" }}>
								<p style={{ color: "var(--white)", cursor: 'pointer' }}>Contatos</p>
							</div>
						</div>
					</GlowingCard>
				</div>
			</div>
		</div>
	);
}
