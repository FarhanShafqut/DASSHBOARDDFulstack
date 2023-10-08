import Image from 'next/image'
import ThemeButton from './(component)/themeButton/page'
import NavBar from './(component)/NavBar/page'

export default function Home() {
  return (
    <div>
      <NavBar/>
      <h1>hello world</h1>
      <ThemeButton/>
    </div>
  )
}
