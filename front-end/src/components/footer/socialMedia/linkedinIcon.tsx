"use client";

import Linkedin from "@/assets/svg/social-media/linkedin";
import { useState } from "react";

export default function LinkedinIcon() {
	const [isHover, setIsHover] = useState<boolean>(false);

	return (
		<div className='container fill' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} style={{ cursor: "pointer" }}>
			<a href='https://wa.link/vqekdq' target='_blank'>
				<Linkedin isHover={isHover} />
			</a>
		</div>
	);
}
