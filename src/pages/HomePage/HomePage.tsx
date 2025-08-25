import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <section>
        <h1>Bienvenido a nuestra página</h1>
        <p>
          Soy el ingeniero <b>Edwin Duván Becerra G.</b> con mi grupo de
          colaboradores buscamos dar soluciones en el manejo de plagas brindando
          soluciones efectivas con productos no toxicos pero muy efectivo en el
          control de plagas tanto a nivel de su hogar como en el comercio y en
          la parte rural
        </p>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;