// rafce 
import PersonelList from "./components/people/PersonelList"
import Mapview from "./components/map/Mapview"
import LocationsList from "./components/locations/LocationsList"
import Header from "./components/layout/Header"
import axios from "axios"
import { useEffect, useState } from "react"
import useDutyStore from "./store/useDutyStore"
import AddLocationModal from "./components/locations/AddLocationModal"

const App = () => {
  //JS


  const [adding,setAdding] = useState(false)
  const [pending,setPending] = useState(null)
  const fetchAll = useDutyStore((state) => state.fetchAll)




    useEffect(() =>{
      // fn body
      fetchAll()




    },[])
   
    const onPick = (lat,lng) => {
      // fn body
      console.log(lat,lng)
        setPending({ lat , lng })
    }
    console.log(pending)


  return (
    < div className = "flex h-screen bg-gray-100">
      <PersonelList />

      <div className="flex flex-col flex-1">
        <Header adding={adding} 
                setAdding={setAdding} />
        
        <div className="flex flex-1 overflow-hidden">
          <Mapview adding={adding} onPick={onPick}    />
          <LocationsList />
        </div>
      </div>
          {
            pending && (
            <AddLocationModal 
              lat = {pending.lat}
              lng = {pending.lng}
              setAdding = {setAdding}
              setPending = {setAdding}
            
            
            />
         )}
    </div>
 )     
}
export default App