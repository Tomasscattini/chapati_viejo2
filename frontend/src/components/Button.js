import styled from 'styled-components';

export const Button = styled.button`
   width: 300px;
   background-color: ${props=>props.theme.color.color2};
   border: none;
   padding: 15px 0;
   color: white;
   font-family: ${props=>props.theme.font.primary};
   border-radius: 1rem;
   cursor: pointer;
   transition: all .3s ease;
   &:hover {
      background-color: ${props=>props.theme.color.color2Dark};
   }
`;