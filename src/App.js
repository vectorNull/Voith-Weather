import { useEffect, useState } from "react";
import getFormattedWeatherData from "./API/WeatherService";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";

const App = () => {
    const [query, setQuery] = useState({ q: "Heidenheim" });
    const [units, setUnits] = useState("metric");
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({ ...query, units }).then((data) => {
                setWeather(data);
            });
        };

        fetchWeather();
    }, [query, units]);

    return (
        <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-black to-green-400 h-fit shadow-xl shadow-gray-400'>
            <TopButtons setQuery={setQuery} />
            <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
            {weather && (
                <>
                    <TimeAndLocation weather={weather} />
                    <TempAndDetails weather={weather} />
                    <Forecast title='Hourly Forecast' items={weather.hourly} />
                    <Forecast title='Daily Forecast' items={weather.daily} />
                </>
            )}
        </div>
    );
};

export default App;
