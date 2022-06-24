import styled from 'styled-components';

export function getRandomHexColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  const lightDimmer = 0.75; //maximum lightness limit
  if (r + g + b > 256 * 3 * lightDimmer) {
    r = Math.floor(r * lightDimmer);
    g = Math.floor(g * lightDimmer);
    b = Math.floor(b * lightDimmer);
  }
  return `#${(256 * 256 * r + 256 * g + b).toString(16).padStart(6, 0)}`;
}

export const Section = styled.div`
  margin: 8px;
  width: 360px;
  text-align: center;
  color: var(--mid-text-color);
  background-color: var(--light-back-color);
`;

export const Title = styled.h2`
  display: block;
  margin: 0 auto;
  padding: 25px;
  font-family: Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  justify-content: baseline;
  align-content: space-between;
`;

export const StatItem = styled.li`
  flex-grow: 1;
  display: block;
  color: var(--light-text-color);
  background-color: ${props => props.generatedColor};
  padding: 16px 5px;
  border-top: 1px var(--mid-back-color) solid;

  .label {
    display: block;
    font-size: 14px;
  }

  .percentage {
    display: block;
    font-size: 24px;
  }
`;
