import Logo from "@/assets/svg/logo";
import Instagram from "@/assets/svg/social-media/instagram";
import Linkedin from "@/assets/svg/social-media/linkedin";
import WhatsApp from "@/assets/svg/social-media/whatsapp";
import GlowingCard from "./glowing-card/glowing-card";
import OutlinedLogo from "@/assets/svg/outlined-logo";

export default function Footer() {
	return (
		<div className='container' style={{ justifyContent: "center" }}>
			<div className='container' style={{ gap: "2%", width: '75%' }}>
				<div className='container'>
					<GlowingCard color='#2988cc'>
						<div className='container' style={{ justifyContent: "center" }}>
							<div className='container extra-small-padding-y primary-extra-dark-border' style={{ justifyContent: "center", boxShadow: "0 0 60px 10px #fafafa40", borderRadius: '20px' }}>
								<div className='container' style={{ justifyContent: "space-between", width: "90%" }}>
									<div className='container' style={{ width: "20%", gap: "var(--extra-small-spacing)" }}>
										<div className='container'>
											<OutlinedLogo />
										</div>
										<div className='container' style={{ width: "80%", gap: "5%" }}>
											<div className='container fill'>
												<Instagram />
											</div>
											<div className='container fill' style={{ cursor: "pointer" }}>
												<a href='https://wa.link/vqekdq' target='_blank'>
													<WhatsApp />
												</a>
											</div>
											<div className='container fill'>
												<Linkedin />
											</div>
										</div>
									</div>
									<div></div>
								</div>
							</div>
						</div>
					</GlowingCard>
				</div>
			</div>
		</div>
	);
}
