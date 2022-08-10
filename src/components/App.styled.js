import styled from 'styled-components';

export const Title = styled.h1`
  color: ${p => p.theme.colors.black};
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.l};
`;

export const TitleContact = styled.h2`
color: ${p => p.theme.colors.text}; 
margin-bottom:${p => p.theme.space[4]}px;
}`;

export const Section = styled.section`
  width: 480px;
  margin: 0 auto;
  padding: ${p => p.theme.space[4]}px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  cursor: pointer;
  width: 150px;
  height: 40px;
  background-color: ${p => p.theme.colors.black};
  color: ${p => p.theme.colors.white};
  font-family: inherit;
  font-weight: ${p => p.theme.fontWeights.bold};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.black}`};
  border-radius: ${p => p.theme.radii.sm};

  &:hover,
  :focus {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 25%),
      0px 4px 5px 0px rgb(0 0 0 / 18%), 0px 1px 10px 0px rgb(0 0 0 / 15%);
  }

  &:active {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.black};
    border-radius: ${p => p.theme.radii.sm};
  }
`;
