import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { useState } from "react";
import {
    Wrapper,
    SearchAndLocation,
    Input,
    FarenheitAndCelciusDiv,
    TempButtons,
} from "./Inputs.styles";

const Inputs = ({ setQuery, units, setUnits }) => {
    const [city, setCity] = useState("");

    const handleSearchClick = () => {
        if (city !== "") setQuery({ q: city });
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({ lat, lon });
            });
        }
    };

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if (units !== selectedUnit) setUnits(selectedUnit);
    };

    return (
        <Wrapper>
            <SearchAndLocation>
                <Input
                    type='text'
                    placeholder='Search...'
                    className='space-x-4'
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                />
                <UilSearch
                    color='white'
                    size={25}
                    style={{ cursor: "pointer" }}
                    onClick={handleSearchClick}
                />
                <UilLocationPoint
                    color='white'
                    size={25}
                    style={{ cursor: "pointer" }}
                    onClick={handleLocationClick}
                />
                <FarenheitAndCelciusDiv>
                    <TempButtons name='metric' onClick={handleUnitsChange}>
                        C&deg;
                    </TempButtons>
                    <p style={{ color: "white" }}>|</p>
                    <TempButtons name='imperial' onClick={handleUnitsChange}>
                        F&deg;
                    </TempButtons>
                </FarenheitAndCelciusDiv>
            </SearchAndLocation>
        </Wrapper>
    );
};

export default Inputs;
