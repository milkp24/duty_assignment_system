import { create } from "zustand";
import { api } from "../lib/api";


const dutyStore = (set ,get) => ({
  personnel: [],
  locations: [],
  assignments: [],
  selectedLocationId: null,

  fetchAll: async () => {
    try {
      // const personnel = await api.get("/personnel");
      // const locations = await api.get("/locations")
      // const assignments = await api.get("/locationPersonnel")

      const [personnel,locations,assignments] = await Promise.all([
        api.get("/personnel"),
        api.get("/locations"),
        api.get("/locationPersonnel")
      ])
      // console.log('kaika',personnel)

      set({
        personnel: personnel,
        locations: locations,
        assignments:assignments
      });
    } catch (error) {
      console.log(error);
    }
  },
  AddLocation:async(lat,lng,name)=>{
    // fn body
    try{
      const res = await api.post('/locations',
        {
          name:name,
          lat:Number(lat),
          lng:Number(lng),
          maxCapacity:5
        }
      )
      await get().fetchAll()
    }catch (error){
      console.log("Add Location Err",error)
    }
  },
  assignPerson: async(personId,LocationId)=>{
    // fn body 
    try {
      console.log(personId,LocationId)
      const res = await api.post('/locationPersonnel'
        ,{
          personId:personId,
          LocationId:LocationId,
    
        })
    } catch (error) {
      console.log(error);
    }
    
  }
});

const useDutyStore = create(dutyStore);

export default useDutyStore;