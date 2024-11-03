"use client";

import Instagram from "@/assets/svg/social-media/instagram";
import { useState } from "react";

export default function InstagramIcon() {
	const [isHover, setIsHover] = useState<boolean>(false);

	return (
		<div className='container fill' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} style={{ cursor: "pointer" }}>
			<a href='https://wa.link/vqekdq' target='_blank'>
				<Instagram isHover={isHover} />
			</a>
		</div>
	);
}
