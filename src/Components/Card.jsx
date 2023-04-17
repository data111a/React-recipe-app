import styled from "styled-components"



export const Card = ({imageUrl, title}) =>{
  return (
    <StyledCard>
        <div className="img-container">
            <img src={imageUrl} alt="" />
        </div>
        <div className="title-container">
            <p>{title}</p>
        </div>
    </StyledCard>
  )
}


const StyledCard = styled.div
`
    display:flex;
    flex-direction:column;
    border-radius: 15px;
    padding-bottom: 15px;
    box-shadow: 4px 6px 10px rgb(99, 99, 99);
    height: 100%;
    aling-items:center;
    max-height: 300px;
    :hover .img-container img{
        transform: scale(1.2); 
    }
    .img-container {
        border-radius: 15px;
        width: 100%;
        overflow: hidden;
    }
    .img-container img {
        transition: transform 0.3s ease;
        border-radius: 15px;
        width: 100%;
    }
    .title-container {
        overflow:hidden;
        margin-left: 10px;
        margin-right: 10px;
        display:flex;
        aline-items:center;
        justify-content:center;
        margin-top: 10px;
        color : rgb(39, 39, 39);
    }
    .title-container p {
        underline: none;
    }
    @media screen and (max-width:1024px){
        :hover .img-container img{
            transform: scale(1); 
        }
    }
      
    
`
export default Card
