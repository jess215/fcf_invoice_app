import { useState } from "react";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";


function App() {
  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [website, setWebsite] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")

  const handlePrint = () => {
    window.print()
  }

  return (
    <>
     <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
       {showInvoice ? <div>
        <Header handlePrint={handlePrint} />

        <MainDetails />

        <ClientDetails />

        <Dates />

        <Table />

        <Notes />

        <Footer />

        <button onClick={() => setShowInvoice(false)} className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
          Edit Invoice
        </button>

       </div> : (
         <>
         {/* name, address, email, phone, website, client name, client address, invoice number, invoice date, due date, notes  */}
          <div className="flex flex-col justify-center">
            <label htmlForm="name">Enter your name</label>
            <input 
              type="text" 
              name="text" 
              id="text" 
              placeholder="enter your name" 
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlForm="name">Enter your address</label>
            <input 
              type="text" 
              name="text" 
              id="text" 
              placeholder="enter your address" 
              autoComplete="off"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <label htmlForm="name">Enter your email</label>
            <input 
              type="text" 
              name="text" 
              id="text" 
              placeholder="enter your email" 
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlForm="name">Enter your phone</label>
            <input 
              type="text" 
              name="text" 
              id="text" 
              placeholder="enter your phone" 
              autoComplete="off"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <label htmlForm="name">Enter Customer Name</label>
            <input 
              type="text" 
              name="text" 
              id="text" 
              placeholder="Customer Name" 
              autoComplete="off"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />

            <label htmlForm="name">Enter Customer Address</label>
            <input 
              type="text" 
              name="text" 
              id="text" 
              placeholder="Customer Address" 
              autoComplete="off"
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
            />

            <label htmlForm="name">Enter your website</label>
            <input 
              type="text" 
              name="text" 
              id="text" 
              placeholder="enter your website" 
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />

            <label htmlForm="name">Enter your website</label>
            <input 
              type="text" 
              name="text" 
              id="text" 
              placeholder="enter your website" 
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />

            <label htmlForm="name">Enter your website</label>
            <input 
              type="text" 
              name="text" 
              id="text" 
              placeholder="enter your website" 
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />

            <label htmlForm="name">Enter your website</label>
            <input 
              type="text" 
              name="text" 
              id="text" 
              placeholder="enter your website" 
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />

            <label htmlForm="name">Enter your website</label>
            <input 
              type="text" 
              name="text" 
              id="text" 
              placeholder="enter your website" 
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />

            <button onClick={() => setShowInvoice(true)}  className="bg-blue-500 text-white font-bold py-2 px-8 rounded  shadow border-2 border-blue-500 hover:bg-transparent   hover:text-blue-500 transition-all duration-300">
              Preview Invoice
            </button>
          </div>
         </>
       ) }
     </main>
    </>
  );
}

export default App;
