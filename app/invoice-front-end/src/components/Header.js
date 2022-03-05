import React from 'react'

export default function Header() {
  return (
    <>
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
    </>
  )
}
