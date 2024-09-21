import styled from 'styled-components'
import data from '../api/netflixData.json'


export default function styleComponent() {
    const {rating} = data[0]
    
    const Mybtn = styled.button`
        color: white;
        background: ${(props) => props.rating >= 10 ? "yellow" : "cyan"};
        font-size:24px;
        border:none;
    `
  
    return (
      <>
          <div>styleComponent</div>
          <Mybtn rating={rating}>hello</Mybtn>
      </>
  )
}
