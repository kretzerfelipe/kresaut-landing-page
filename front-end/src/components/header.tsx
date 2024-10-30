export default function Header() {
	return (
		<div className='container' style={{ justifyContent: "center" }}>
			<div className='container extra-small-padding-y full-border-radius primary-extra-dark-border' style={{ width: "35%", backgroundColor: "var(--white-50)", justifyContent: "space-around", boxShadow: '0 0 60px 10px #fafafa40' }}>
				<div className='container' style={{ width: "auto" }}>
					<p style={{ color: 'var(--primary-extra-dark)', fontWeight: 500 }}>Sobre</p>
				</div>
				<div className='container' style={{ width: "auto" }}>
					<p style={{ color: 'var(--primary-extra-dark)', fontWeight: 500 }}>Serviços</p>
				</div>
				<div className='container' style={{ width: "auto" }}>
					<p style={{ color: 'var(--primary-extra-dark)', fontWeight: 500 }}>Contatos</p>
				</div>
			</div>
		</div>
	);
}
