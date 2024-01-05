import Image from 'next/image'
import {NavBar} from '@/app/components/nav-bar/nav'
import { ScrollingText } from './components/scrolling-text/scrolling-text'
import Navigation from './components/navigation/navigation'
import {ButtonEclair} from '@/app/components/bouttons/button-eclair/button-eclair'

export default function Home() {
  return (
    <>

      <Navigation/>
      <ScrollingText/> 
    </>
  )
}
