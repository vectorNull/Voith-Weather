import { Wrapper, Button } from "./TopButtons.styles";

const TopButtons = ({ setQuery }) => {
    const cities = [
        {
            id: 1,
            title: "Heidenheim",
        },
        {
            id: 2,
            title: "Vista",
        },
        {
            id: 3,
            title: "Bangkok",
        },
    ];
    return (
        <Wrapper>
            {cities.map((city) => (
                <Button
                    key={city.id}
                    onClick={() => setQuery({ q: city.title })}
                >
                    {city.title}
                </Button>
            ))}
        </Wrapper>
    );
};

export default TopButtons;
