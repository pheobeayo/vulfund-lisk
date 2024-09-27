import AllRoutes from "./config/AllRoutes"
import { configWeb3Modal } from "./connection"

configWeb3Modal();

function App() {


  return (
   
      <div>
        <AllRoutes/>

        </div>
        
  )
}

export default App
