import {
    Wrapper,
    SkyConditionsDiv,
    TemperatureP,
    WeatherImage,
    DetailsDiv,
} from "./TempAndDetails.styles";
import { UilTemperature, UilTear } from "@iconscout/react-unicons";

const TempAndDetails = () => {
    return (
        <div>
            <SkyConditionsDiv>Cloudy</SkyConditionsDiv>
            <Wrapper>
                <WeatherImage src='http://openweathermap.org/img/wn/01d@2x.png' />
                <TemperatureP>34&deg;</TemperatureP>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "-0.5rem",
                    }}
                >
                    <DetailsDiv>
                        <UilTemperature size={18} />
                        Feels like:
                        <span>34</span>
                        <UilTear size={18} />
                        Humidity:
                        <span>45%</span>
                    </DetailsDiv>
                </div>
            </Wrapper>
        </div>
    );
};

export default TempAndDetails;
