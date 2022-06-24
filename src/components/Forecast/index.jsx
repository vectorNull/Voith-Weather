import { iconUrl } from "../../API/WeatherService";
import {
    ForecastDiv,
    ForecastLabelP,
    ForecastWrapper,
    LabelWrapper,
} from "./Forecast.styles";

const Forecast = ({ title, items }) => {
    return (
        <div>
            <LabelWrapper>
                <ForecastLabelP>{title}</ForecastLabelP>
            </LabelWrapper>
            <hr style={{ marginTop: "3px", marginBottom: "15px" }} />
            <ForecastWrapper>
                {items.map((item, index) => (
                <ForecastDiv key={index}>
                    <p
                        style={{
                            fontWeight: "lighter",
                            fontSize: "small",
                            color: "white",
                        }}
                    >
                        {item.title}
                    </p>
                    <img
                        src={iconUrl(item.icon)}
                        alt='weather'
                        style={{
                            width: "7",
                            marginTop: "1px",
                            marginBottom: "1px",
                        }}
                    />
                     <p
                        style={{
                            fontWeight: "lighter",
                            fontSize: "medium",
                            color: "white",
                        }}
                    >
                        {item.temp.toFixed()}&deg;
                    </p>
                </ForecastDiv>
                ))}
            </ForecastWrapper>
        </div>
    );
};

export default Forecast;
