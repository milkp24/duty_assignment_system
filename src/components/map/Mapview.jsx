// rafce
import { 
        MapContainer,
        useMapEvents,
        Marker,
        Popup,
        Tooltip
       } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import Layers from "./Layers"
// leaflet functions not needed here
import useDutyStore from '../../store/useDutyStore'

const ClickToAdd = ({adding ,onPick}) =>{
  // fn body
  useMapEvents({
    click(e){
        // console.log(e.latlng)
        // map.flyTo(e.latlng)
        if(adding)
          onPick(e.latlng.lat,e.latlng.lng)

    }
  })
  return null
}

const Mapview = ({ adding, onPick }) => {

  const location = useDutyStore((s) => s.locations)
   


  const center = [13,100]
  console.log(adding)
  return (
    <div className="flex-1">
      <MapContainer 
      className='h-full'
      center={center} 
      zoom={7}
      scrollWheelZoom={true}
      >
        <Layers />

        <ClickToAdd adding={adding} onPick={onPick} />

        {
          location.map((item) => {
            return <Marker
            key={item.id}
            position ={[item.lat, item.lng]}>
                   <Popup>
                    <div className="text-sm">
                      {item.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {item.lat},{item.lng}
                    </div>
                   </Popup>
                   <Tooltip direction ="center">
                    {item.name}
                   </Tooltip>
            </Marker>
         
         })}

      </MapContainer>
    </div>
  )
}

export default Mapview