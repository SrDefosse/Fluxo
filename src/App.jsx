import Hero from './components/Hero'
import Navbar from './components/ui/Navbar'
import ComoFunciona from './components/ComoFunciona'
import Quincena from './components/Quincena'
import UsaFluxo from './components/UsaFluxo'
import Beneficios from './components/Beneficios'
import FAQ from './components/FAQ'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="flex justify-center items-center min-h-screen">
          <Hero/>
        </div>
        <div className="flex justify-center items-center min-h-screen">
          <ComoFunciona/>
        </div>
        <div className="flex justify-center items-center min-h-screen">
          <Quincena/>
        </div>
        <div className="flex justify-center items-center min-h-screen">
          <UsaFluxo/>
        </div>
        <div className="flex justify-center items-center min-h-screen">
          <Beneficios/>
        </div>
        <div className="flex justify-center items-center min-h-screen">
          <FAQ/>
        </div>
      </main>
    </>
  )
}

export default App
