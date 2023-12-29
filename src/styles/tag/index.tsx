import styled from "styled-components";

interface TagProps {
  selected: boolean;
}

const TageList = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 12px;
  padding: 0;
  margin: 0;
  overflow-x: auto;

  @media (min-width: ${(props) => props.theme.deviceSizes.mobile}) {
    justify-content: flex-start;
  }
`;

const Tag = styled.li<TagProps>`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 400;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.primary};
  background: ${(props) => (props.selected ? props.theme.primary : "transparent")};
  color: ${(props) => (props.selected ? props.theme.white : props.theme.primary)};
  cursor: pointer;

  flex-shrink: 0;
  min-width: 50px;

  @media (min-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: 1.4rem;
    padding: 6px 10px;
  }
`;

export const tagComponent = { TageList, Tag };
