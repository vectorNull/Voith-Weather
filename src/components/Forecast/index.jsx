import {
    ForecastDiv,
    ForecastLabelP,
    ForecastWrapper,
    LabelWrapper,
} from "./Forecast.styles";

const Forecast = ({ title }) => {
    return (
        <div>
            <LabelWrapper>
                <ForecastLabelP>{title}</ForecastLabelP>
            </LabelWrapper>
            <hr style={{ marginTop: "3px", marginBottom: "15px" }} />
            <ForecastWrapper>
                <ForecastDiv>
                    <p
                        style={{
                            fontWeight: "lighter",
                            fontSize: "small",
                            color: "white",
                        }}
                    >
                        4:30pm
                    </p>
                    <img
                        src='http://openweathermap.org/img/wn/01d@2x.png'
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
                        22&deg;
                    </p>
                </ForecastDiv>
                <ForecastDiv>
                    <p
                        style={{
                            fontWeight: "lighter",
                            fontSize: "small",
                            color: "white",
                        }}
                    >
                        4:30pm
                    </p>
                    <img
                        src='http://openweathermap.org/img/wn/01d@2x.png'
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
                        22&deg;
                    </p>
                </ForecastDiv>
                <ForecastDiv>
                    <p
                        style={{
                            fontWeight: "lighter",
                            fontSize: "small",
                            color: "white",
                        }}
                    >
                        4:30pm
                    </p>
                    <img
                        src='http://openweathermap.org/img/wn/01d@2x.png'
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
                        22&deg;
                    </p>
                </ForecastDiv>
                <ForecastDiv>
                    <p
                        style={{
                            fontWeight: "lighter",
                            fontSize: "small",
                            color: "white",
                        }}
                    >
                        4:30pm
                    </p>
                    <img
                        src='http://openweathermap.org/img/wn/01d@2x.png'
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
                        22&deg;
                    </p>
                </ForecastDiv>
                <ForecastDiv>
                    <p
                        style={{
                            fontWeight: "lighter",
                            fontSize: "small",
                            color: "white",
                        }}
                    >
                        4:30pm
                    </p>
                    <img
                        src='http://openweathermap.org/img/wn/01d@2x.png'
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
                        22&deg;
                    </p>
                </ForecastDiv>
            </ForecastWrapper>
        </div>
    );
};

export default Forecast;
