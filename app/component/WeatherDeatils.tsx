import React from 'react'

import {BsSunrise, BsSunset} from 'react-icons/bs';
import {GiWindSlap, GiCompass} from 'react-icons/gi';
import {WiHumidity} from 'react-icons/wi';
import {MdAir} from 'react-icons/md';
import {CiTempHigh} from 'react-icons/ci';
import {FaEye} from 'react-icons/fa';


interface WeatherDeatilsProps{
  data: {
    current: {
      wind_kmh: number;
      humidity: number;
      wind_dir: string;
      pressure_mb: number;
      feelslike_c: number;
      vis_km: number;
    };
    forecast: {
      forecastday: {
        astro: {
          sunrise: string;
          sunset: string;
        };
      }[];
    };
  };
}




const WeatherDeatils = ({data}: WeatherDeatilsProps) => {
  return (
    <>
      <div className='p-12'>
        <h1 className='mb-4 text-2xl text-white'>
          Weather Details
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
                <div className="text-2xl">
                    <h3>Wind Speed</h3>
                    <h3>{data.current.wind_kph} kph</h3>
                </div>
                <div className='text-5xl'>
                    <GiWindSlap font-size={40}/>
                </div>
            </div>
            
            <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
                <div className="text-2xl">
                    <h3>Himidity</h3>
                    <h3>{data.current.humidity}%</h3>
                </div>
                <div className='text-5xl'>
                    <WiHumidity font-size={40}/>
                </div>
            </div>

            <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
                <div className="text-2xl">
                    <h3>Wind Direction</h3>
                    <h3>{data.current.wind_dir}</h3>
                </div>
                <div className='text-5xl'>
                    <GiCompass font-size={40}/>
                </div>
            </div>

            <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
                <div className="text-2xl">
                    <h3>Sunrise</h3>
                    <h3>{data.forecast.forecastday[0].astro.sunrise}</h3>
                </div>
                <div className='text-5xl'>
                    <BsSunrise font-size={40}/>
                </div>
            </div>

            <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
                <div className="text-2xl">
                    <h3>Sunset</h3>
                    <h3>{data.forecast.forecastday[0].astro.sunset}</h3>
                </div>
                <div className='text-5xl'>
                    <BsSunset font-size={40}/>
                </div>
            </div>

            <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
                <div className="text-2xl"> 
                    <h3>Air Pressure</h3>
                    <h3>{data.current.pressure_mb}hPa</h3>
                </div>
                <div className='text-5xl'>
                    <MdAir font-size={40}/>
                </div>
            </div>

            <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
                <div className="text-2xl">
                    <h3>Feel Like</h3>
                    <h3>{data.current.feelslike_c}°</h3>
                </div>
                <div className='text-5xl'>
                    <CiTempHigh font-size={40}/>
                </div>
            </div>


            <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
                <div className="text-2xl">
                    <h3>Visibility</h3>
                    <h3>{data.current.vis_km} km</h3>
                </div>
                <div className='text-5xl'>
                    <FaEye font-size={40}/>
                </div>
            </div>

        </div>
      </div>
    </>
  );
}

export default WeatherDeatils