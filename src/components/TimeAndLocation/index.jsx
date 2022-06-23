import { DateTimeP, Wrapper, Location } from "./TimeAndLocation.styles";


const TimeAndLocation = () => {
    return (
        <div>
            <Wrapper>
                <DateTimeP>Tuesday, 31 May 2022 | Local Time: 12:30pm</DateTimeP>
            </Wrapper>
            <Wrapper>
                <Location>Heidenheim</Location>
            </Wrapper>
        </div>
    )
}

export default TimeAndLocation;