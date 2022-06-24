import { formatToLocalTime } from "../../API/WeatherService";
import { DateTimeP, Wrapper, Location } from "./TimeAndLocation.styles";


const TimeAndLocation = ({weather: { dt, timezone, name, country }}) => {
    return (
        <div>
            <Wrapper>
                <DateTimeP>{formatToLocalTime(dt, timezone)}</DateTimeP>
            </Wrapper>
            <Wrapper>
                <Location>{`${name}, ${country}`}</Location>
            </Wrapper>
        </div>
    )
}

export default TimeAndLocation;