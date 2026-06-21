import { MapPin, Trash2 } from "lucide-react";
import useDutyStore from "../../store/useDutyStore";
// rafce
const LocationsList = () => {
    // JS
    const locations = useDutyStore((s)=>s.locations)
    const assignPerson =useDutyStore((state)=>state.assignPerson)
    const assignments = useDutyStore((state) => state.assignPerson)


    console.log(assignments)
    // console.log(locations)
    
    const onDropToLocation = async (e, LocationId) => {
      const personId = e.dataTransfer.getData('text/plain')
      // console.log(personId, LocationId)
      await assignPerson(personId, LocationId)
    }
  return (
    <div className="w-80 bg-white shadow-lg overflow-y-auto 
    border-l border-gray-200">
      
    <div className="p-6 border-b border-gray-200 bg-purple-100">
      <div className="flex gap-4 items-center">
        <MapPin className="text-pink-500" size={32} />
        <h2 className="text-2xl
        font-semibold"
        > จุดเข้าเวร
        </h2>
      </div>
    </div>

    <div className="p-4 space-y-4">
        {/* {Loop} */}

        {locations.map((item)=>{
    return (
     <div 
     onDragOver={(e)=> e.preventDefault()}
     onDragStart={(e)=> onDropToLocation(e,item.id)}
     key={item.id}
     className="border-2 border-dashed rounded-md 
      border-gray-400 bg-gray-100">
        <div className="flex justify-between p-3">
          
          <div className="flex-1">
            <h3 className="font-semibold text-lg">
              {item.name}
            </h3>
            <p className="text-sm text-gray-500">
              .../ {item.maxCapacity}
            </p>
          </div>

          <button
                 className="text-red-600
                 hover:bg-red-300
                 rounded-md
                 p-2">
                <Trash2 size={32} />
            </button>
        </div>
      </div>


             )})
        }
      

    </div>


    </div>
  );
};
export default LocationsList;