import { ReactNode } from "react";

interface GlowingCardProps {
  children: ReactNode;
  color?: string
}

export default function GlowingCard({ children, color = 'var(--primary)' }: GlowingCardProps) {


  return (
    <div className="container glowing-container" style={{ height: '100%', boxShadow: `0px 0px 10vw 2vw ${color}10`, borderRadius: '20px' }}>
      <div className="container glowing-card" style={{ height: '100%', '--clr': ` ${color}60` } as React.CSSProperties}>
        <div className="container" style={{ position: 'relative', zIndex: 9, alignContent: 'center' }}>
          {children}
        </div>
      </div>
    </div>
  )
}