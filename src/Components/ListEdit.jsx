import share from "../images/share.svg";
import pen from "../images/pen.svg";
import wastebasket from "../images/wastebasket.svg";
import styled from "styled-components";

const ListEditContainer = styled.div`
  display: flex;
  width: 1060px;
  margin: 24px auto;
  justify-content: space-between;
  align-items: center;
  span {
    color: var(--black);
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.2px;
  }
`;
const EditField = styled.div`
  color: var(--Linkbrary-gray60, #9fa6b2);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  div {
    display: flex;
    justify-content: center;
  }
`;

function ListEdit({ title }) {
  return (
    <ListEditContainer>
      <div>
        <span>{title ? `${title}` : "전체"}</span>
      </div>
      <EditField>
        <div>
          <img src={share} alt="공유" />
          공유
        </div>
        <div>
          <img src={pen} alt="연필" />
          이름
        </div>
        <div>
          <img src={wastebasket} alt="휴지통" />
          변경
        </div>
      </EditField>
    </ListEditContainer>
  );
}
export default ListEdit;
