'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function StarsAnimation() {
  
  useGSAP(() => {
    gsap.to('.star-01', {
      rotate: '+=720deg',
      duration: 2.5,
      ease: 'power3.inOut',
      repeat: Infinity,
      repeatDelay: 3.5
    })

    gsap.to('.star-02', {
      rotate: '-=360deg',
      duration: 1.5,
      ease: 'power3.inOut',
      repeat: Infinity,
      repeatDelay: 2
    })
  })

  return (
    <div>

    </div>
  )
}