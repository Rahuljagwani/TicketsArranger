import MainContent from '@/components/MainContent'
import NavigationBar from '@/components/navBar'

export default function Home() {
  return (
    <>
      <div className='text-dark-text bg-dark-mainbg'></div>
      <div className='bg-dark-navbg'></div>
      <NavigationBar />
      <MainContent />
    </>
  )
}
