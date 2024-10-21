import Logo from "@/assets/svg/logo";
import Header from "@/components/header";
import Image from "next/image";
import img from '../assets/img/photographer.png'

export default function Home() {
  return (
    <div className="container" style={{ height: '100vh', backgroundColor: 'var(--primary-extra-dark)', alignContent: 'start' }}>
      <Header />
      <div className="container" style={{ justifyContent: 'center' }}>
        <div className="container" style={{ width: '20%' }}>
          <Logo />
        </div>
      </div>
      <div className="container" style={{ justifyContent: 'center' }}>
        <div className="container" style={{ position: "relative", width: '60%', aspectRatio: "4.16184971098" }}>
          <Image src={img} alt={""} fill className='img-cover' />
        </div>
      </div>
    </div>
  );
}
