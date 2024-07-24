import Image from 'next/image'
import Link from 'next/link'
import Logo from '../components/stem logo.jpg'

export default function Navbar() {
  return (
    <div>

        <nav>
          <Image
          src={Logo}
          alt='Franks helpdesk logo'
          width={70}
          quality={100}
          placeholder='blur'
         
         


          
          />
          <h1> Ollie's Helpdesk </h1>
          <Link href="/">Dashborard</Link>
          <Link href="/tickets">Tickets</Link>
        </nav>
    </div>
  )
}
