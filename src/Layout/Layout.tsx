import Modal from '@/Components/Modal/Modal'
import Footer from '@/Layout/Footer/Footer'
import Header from '@/Layout/Header/Header'
import Main from '@/Layout/Main/Main'

const Layout = (): JSX.Element => {
  return (
    <>
      <div>
        <Header />
        <Main />
        <Footer />
        <Modal />
      </div>
    </>
  )
}

export default Layout
