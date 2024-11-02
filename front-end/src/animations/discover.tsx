"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function Discover({ y = 50, className, startScroll = 95, startPosition = "bottom", delay = 0 }: { y?: number; className: string; startScroll?: number; startPosition?: string; delay?: number }) {
	useGSAP(() => {
		const discoverElements: NodeListOf<HTMLElement> = document.querySelectorAll(`.${className}`);

		discoverElements.forEach((element, index) => {
			gsap.set(element, { y: y, opacity: 0 });
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: element,
					start: `${startPosition} ${startScroll}%`,
					end: `${startPosition} ${startScroll}%`,
					toggleActions: "play none none none",
				},
			});

			tl.to(element, {
				y: 0,
				opacity: 1,
				duration: 2,
				ease: "power3.out",
				delay: delay * index,
			});
		});
	}, []);

  return (
    <></>
  )
}

export function DiscoverSide({ side, className, startScroll = 95, delay = 0 }: { side: "left" | "right"; className: string; startScroll?: number; delay?: number }) {
	useGSAP(() => {
    const discoverElements: NodeListOf<HTMLElement> = document.querySelectorAll(`.${className}`);

    function getAmount() {
      return side === 'right' ? window.innerWidth : -window.innerWidth;
    }

    discoverElements.forEach((element) => {
      gsap.set(element, { x: getAmount() });
      setTimeout(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: `${startScroll}% 100%`,
            end: `${startScroll}% 100%`,
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
          },
        });

        tl.to(element, {
          x: 0,
          duration: 2,
          ease: "power4.out",
        });
      }, delay);
    });
  }, {});

  return (
    <></>
  )
}