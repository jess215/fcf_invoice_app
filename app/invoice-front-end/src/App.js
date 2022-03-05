import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Table from "./components/Table";


function App() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <>
     <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
      {/* Header */}
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div>
          <h1 className="font-bold uppercase tracking-wide text-3xl mb-3">FCF Invoice</h1>
        </div>

        <div>
          <ul className="flex items-center justify-between flex-wrap">
            <li>
              <button onClick={handlePrint} className="bt btn-print">Print</button>
            </li>
            <li>
              <button className="bt btn-download">Download</button>
            </li>
            <li>
              <button className="bt btn-send">Send</button>
            </li>
          </ul>
        </div>
      </header>
      {/* End of Header */}

      {/* FCF details */}
      <section className="flex flex-col items-end justify-end">
        <h2 className="text-xl uppercase">Fillmore Country Floral</h2>
        <p>280 W 500 S</p>
        <p>Fillmore, UT 84631</p>
      </section>
      {/* End of your details */}

      <ClientDetails />

      <Dates />

      <Table />
    
      <Notes />
    
      <Footer />

     </main>
    </>
  );
}

export default App;
