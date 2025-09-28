import "./App.css";

import Countdown from "./components/Countdown";
import logoSmall from "./assets/logo-small.webp";
import logoMedium from "./assets/logo-medium.webp";
import { IoMdCalendar } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";

function App() {
  return (
    <div className="h-screen w-screen bg-dark flex flex-col justify-between items-center">
      <header className="flex flex-col items-center">
        <img src={logoMedium} alt="Logo" className="h-60" />
      </header>
      <section>
        <Countdown />
        <section className="bg-gradient-to-br from-[#D9B37E]/10 to-[#D9B37E]/5 border-2 border-[#D9B37E]/30 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#D9B37E]/30 hover:border-[#D9B37E] cursor-default text-center">
          <div className="flex gap-5 justify-center">
            <div className="flex items-center gap-2">
              <IoMdCalendar className="text-primary" />
              <p className="text-light">Octeber 22, 2025</p>
            </div>
            <div className="flex items-center gap-2">
              <FaRegClock className="text-primary" />
              <p className="text-light">2.00 PM Onwards</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-2">
            <MdOutlineLocationOn className="text-primary" />
            <p className="text-light">
              Art Auditorium, University of Ruhuna, Matara.
            </p>
          </div>
        </section>
        <h2 className="italic  text-primary mt-4 text-center">
          "නෙක විද දස්කම් වලින් සුපෝෂිත කෝඩුකාර විද්‍යාර්ථයින්ගේ පලමු අඩහැරය"
        </h2>
      </section>
      <footer>
        <h1 className="text-light text-center mb-4">
          <span className="font-bold text-primary">
            SAMPRAAPTHI 25 • සම්ප්‍රාප්ති 25
          </span>
          <br />
          Organized by the 47th Batch • Science Faculty • University of Ruhuna
        </h1>
      </footer>
    </div>
  );
}

export default App;
