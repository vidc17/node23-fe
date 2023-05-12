import Header from "../components/Header.tsx";
import Welcome from "../components/Welcome.tsx";
import Album from "../components/Album.tsx";
import Footer from "../components/Footer.tsx";

const Home = () => {
  return(
      <>
          <Header/>

          <main>

              <Welcome/>

              <Album/>


          </main>
          <Footer/>
      </>
  )
}
export default Home;