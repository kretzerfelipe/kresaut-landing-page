import GlowingCard from "../glowing-card/glowing-card";
import OutlinedLogo from "@/assets/svg/outlined-logo";
import WhatsAppIcon from "./socialMedia/whatsAppIcon";
import InstagramIcon from "./socialMedia/instagramIcon";
import LinkedinIcon from "./socialMedia/linkedinIcon";

export default function Footer() {
	return (
		<div className='container' style={{ justifyContent: "center" }}>
			<div className='container' style={{ gap: "2%", width: '75%' }}>
				<div className='container'>
					<GlowingCard color='#2988cc'>
						<div className='container' style={{ justifyContent: "center" }}>
							<div className='container extra-small-padding-y primary-extra-dark-border' style={{ justifyContent: "center", boxShadow: "0 0 60px 10px #fafafa40", borderRadius: '18px' }}>
								<div className='container' style={{ justifyContent: "space-between", width: "90%" }}>
									<div className='container' style={{ width: "20%", gap: "var(--extra-small-spacing)" }}>
										<div className='container'>
											<OutlinedLogo />
										</div>
										<div className='container' style={{ width: "80%", gap: "5%" }}>
											<InstagramIcon />
											<WhatsAppIcon />
											<LinkedinIcon />
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
