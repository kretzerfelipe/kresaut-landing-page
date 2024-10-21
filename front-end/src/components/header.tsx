export default function Header() {
	return (
		<div className='container large-padding-y' style={{ justifyContent: "center" }}>
			<div className='container mini-padding-y full-border-radius primary-extra-dark-border' style={{ width: "35%", backgroundColor: "var(--white-50)", justifyContent: "space-around", boxShadow: '0 0 60px 10px #fafafa40' }}>
				<div className='container' style={{ width: "auto" }}>
					<p>Sobre</p>
				</div>
				<div className='container' style={{ width: "auto" }}>
					<p>Serviços</p>
				</div>
				<div className='container' style={{ width: "auto" }}>
					<p>Contatos</p>
				</div>
			</div>
		</div>
	);
}
