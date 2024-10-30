export default function WhatsApp({color = 'var(--white)'}: {color?: string, secondaryColor?: string}) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="auto"
      fill="none"
      viewBox="0 0 2400 2400"
    >
      <path
        stroke={color}
        strokeWidth="60"
        d="m203.796 1835.5 5.136-13.68-7.603-12.47c-111.615-183.17-170.968-395-170.968-609.26C30.361 562.791 562.198 30.353 1199.56 30 1837.62 29.647 2370 563.146 2370 1200.09c0 637.44-532.33 1169.18-1170.44 1168.83h-.04a1172.75 1172.75 0 0 1-486.254-105.11l-8.531-3.88-9.221 1.67-594.158 107.43a60.5 60.5 0 0 1-31.462-2.67 60.65 60.65 0 0 1-25.842-18.14 60.592 60.592 0 0 1-10.176-60.13l.005-.02z"
      ></path>
      <path
        stroke={color}
        strokeWidth="60"
        d="m1669.84 1370.98.01.02.02.02 116.62 124.06c54.56 58.27 53.44 145.27-3.49 191.33-132.46 107.13-323.31 203.45-502.75 88.3-255.84-164.44-481.917-380.34-645.802-635.39-42.286-65.88-45.262-154.721-18.6-248.604 26.533-93.428 81.278-187.154 146.873-257.959 40.426-43.635 111.167-40.483 162.472 6.307l18-19.737-18 19.737 125.317 114.289c.01.005.01.009.02.014 24.99 22.882 29.09 67.235 9.35 105.374-38.84 74.891-67.238 185.109-11.84 271.479 29.68 46.33 64.04 94.13 113.95 137.07 50.08 43.09 114.67 80.33 203.97 107.52 59.81 18.26 133.65 9.86 194.73-14.61l.11-.05.11-.04c41.83-17.15 86.22-13.37 108.93 10.87Z"
      ></path>
    </svg>
  )
}