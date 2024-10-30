export default function Instagram({color = 'var(--white)', secondaryColor = '#011533'}: {color?: string, secondaryColor?: string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="auto"
      fill="none"
      viewBox="0 0 41 41"
    >
      <path
        stroke={color}
        d="M1 8.93a7.707 7.707 0 0 1 7.707-7.708h23.22a7.707 7.707 0 0 1 7.707 7.708v23.22a7.707 7.707 0 0 1-7.707 7.707H8.707A7.707 7.707 0 0 1 1 32.149z"
      ></path>
      <path
        stroke={color}
        d="M33.546 8.804a1.615 1.615 0 1 1-3.23 0 1.615 1.615 0 0 1 3.23 0ZM10.517 20.54c0-5.413 4.388-9.801 9.8-9.801s9.8 4.388 9.8 9.8-4.387 9.8-9.8 9.8c-5.412 0-9.8-4.387-9.8-9.8Z"
      ></path>
    </svg>
  );
}