import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "32px 20px", maxWidth: 800, margin: "0 auto" }}>
        <h1>Quiénes Somos</h1>
        <p>
          Somos una empresa comprometida con brindar los mejores servicios de
          fumigación del quindio.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
