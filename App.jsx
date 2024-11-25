import { useEffect, useState } from "react";

import Highlights from "./Components/Highlights";
import Temp from "./Components/Temp";


function App() {

  let [city, setcity] = useState("New Delhi");
  let [weatherData, setweatherData] = useState(null);

  const apiURL=`https://api.weatherapi.com/v1/current.json?key=9143c5e37cdd4d50b40112608242909&q=${city}&aqi=yes`;
 
  useEffect(()=>{
    fetch(apiURL)
  .then((response)=>{
    if(! response.ok)
    {
      throw new Error("Error");
      
    }
     return response.json();
  })
  .then((data)=>{
      console.log(data);
      setweatherData(data);
  })
  .catch((e)=>{
    console.log(e);
  })
  },[city])
   
  
  return (
    <>
      <div className="bg-[#1F213A] h-screen flex justify-center">
        <div className="left mt-40 h-1/2 w-1/5">
         {weatherData && <Temp 
           setcity={setcity}
           stats={{
             temp:weatherData?.current?.temp_c||0,
             condition:weatherData?.current?.condition.text||'unknown',
             location:weatherData?.location?.name||'unknown',
             time:weatherData?.location?.localtime||0,
             isday:weatherData.current.is_day,


           }}
          />}
        </div>

        <div className="right mt-40 h-1/2 w-1/3 p-10 grid grid-cols-2 gap-4 ">
          {" "}
          <h2 className="text-slate-200 text-2xl col-span-2">Today's Highlights</h2>
          {weatherData && 
          <>
            <Highlights
            
            stats={{
              title:'Wind Speed',
              value:weatherData?.current?.wind_mph||0,
              unit:'mph',
              direction:weatherData?.current?.wind_dir||0,

            }}
            
            />
            <Highlights
                stats={{
                  title:'Humidity',
                  value:weatherData.current.humidity,
                  unit:'%',
                
    
                }}
            />
            <Highlights
                  stats={{
                    title:'Visibility',
                    value:weatherData?.current?.vis_miles||0,
                    unit:'miles',
                   
      
                  }}
            />
            <Highlights
                  stats={{
                    title:'Pressure',
                    value:weatherData?.current?.pressure_mb||0,
                    unit:'mb',
                   
      
                  }}
            
            />
          </>
          }
          
        </div>
      </div>
    </>
  );
}

export default App;
