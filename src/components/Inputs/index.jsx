import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import { Wrapper, SearchAndLocation, Input, FarenheitAndCelciusDiv, TempButtons } from './Inputs.styles';

const Inputs = () => {
  return (
    <Wrapper>
        <SearchAndLocation>
            <Input type="text" placeholder='Search...' className='space-x-4' />
            <UilSearch  color="white" size={25} style={{ cursor: "pointer" }} />
            <UilLocationPoint color="white" size={25} style={{ cursor: "pointer" }} />
            <FarenheitAndCelciusDiv>
                <TempButtons name="Celcius">C&deg;</TempButtons>
                    <p style={{ color: "white"}}>|</p>
                <TempButtons name="Farenheit">F&deg;</TempButtons>
            </FarenheitAndCelciusDiv>
        </SearchAndLocation>
    </Wrapper>
  )
}

export default Inputs;