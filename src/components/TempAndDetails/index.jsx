import {
    Wrapper,
    SkyConditionsDiv,
    TemperatureP,
    WeatherImage,
    DetailsDiv,
} from "./TempAndDetails.styles";
import { UilTemperature, UilTear } from "@iconscout/react-unicons";
import { iconUrl } from "../../API/WeatherService";

const TempAndDetails = ({ weather: { details, icon, temp, humidity, feels_like }}) => {
    return (
        <div>
            <SkyConditionsDiv>{details}</SkyConditionsDiv>
            <Wrapper>
                <WeatherImage src={iconUrl(icon)} />
                <TemperatureP>{temp.toFixed()}&deg;</TemperatureP>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "0.5rem",
                    }}
                >
                    <DetailsDiv>
                        <UilTemperature size={18} />
                        Feels like: {feels_like.toFixed()}&deg;
                        <UilTear size={18} />
                        Humidity: {humidity}%
                    </DetailsDiv>
                </div>
            </Wrapper>
        </div>
    );
};

export default TempAndDetails;
