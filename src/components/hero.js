import React ,{useEffect, useState, useRef} from 'react'; 
import styled from 'styled-components/macro'; 
const HeroSection = styled.section` 
    height: 100vh; 
    max-height: ll00px; 
    position: relative; 
    overflow: hidden;
`; 
const HeroWrapper = styled.div`
width: l00%; 
height: 100%; 
display: flex; 
justify—content: center; 
align—items: center; 
overflow: hidden; 
position: relative;
`;
const HeroSlide =styled.div`
    z-index:1;
    width:100%;
    height:100%;
`;
const HeroSlider =styled.div` 
position: absolute; 
top: 0; 
left: 0; 
width: 100%; 
height: 100%; 
display: flex; 
align—items: center; 
justify—content: center; 
`;
const HeroImage=styled.img`
position: absolute; 
top: 0; 
left: 0; 
width: 100vw; 
height: 100vh;
`;



const Hero = ({slides}) =>{ 
    const [current, setCurrent]= useState(0); 
    const length = slides.length;  
    const timeout=useRef(null);
    useEffect (
    () => {
            const nextSlide = () => {
                setCurrent(current => (current === length -1 ? 0: current + 1));
            };
            timeout.current = setTimeout(nextSlide, 5000);
            return function(){
                if(timeout.current){
                    clearTimeout(timeout.current);
                }
            };
        },
        [current , length]
    );
    if(!Array.isArray(slides)||slides.length <= 0){
        return null;
    }
    return ( 
        <HeroSection>
            <HeroWrapper>
            {slides.map((slide,index) =>{
                return ( 
                    <HeroSlide key = {index}>
                    {index === current && (
                        <HeroSlider>
                            <HeroImage src={slide.image} alt={slide.alt}/>
                        </HeroSlider>
                    )}
                    </HeroSlide>
                );
            })} 
            </HeroWrapper>
        </HeroSection>
    );
};
export default Hero; 