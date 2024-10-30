"use client";

import { useEffect } from "react";

export default function InteractiveCards() {
  useEffect(() => {
    const cards: NodeListOf<HTMLElement> = document.querySelectorAll('.glowing-card');
    cards.forEach(card => {
      card.onmousemove = function (e: MouseEvent) {
        const x = e.pageX - card.offsetLeft;
        const y = e.pageY - card.offsetTop;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
      };
    });
  }, []);

  return null;
}
