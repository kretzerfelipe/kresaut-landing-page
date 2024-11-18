'use client'

import WhatsApp from "@/assets/svg/social-media/whatsapp";
import { useState } from "react";

export default function WhatsAppIcon() {

  const [isHover, setIsHover] = useState<boolean>(false)

	return (
		<div className='container fill' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} style={{ cursor: "pointer" }}>
			<a href='https://wa.link/vqekdq' target='_blank'>
				<WhatsApp isHover={isHover} />
			</a>
		</div>
	);
}
