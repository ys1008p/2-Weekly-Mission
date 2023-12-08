import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0 0;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 16px;
  border: 1px solid var(--box-border-color);
  background-color: var(--sns-bg-color);

  p {
    font-size: 14px;
    line-height: 16px;
    color: var(--black-color);
  }

  ul {
    overflow: hidden;
    list-style-type: none;

    li {
      float: left;
      margin: 0 16px 0 0;

      &:last-child {
        margin: 0;
      }

      a {
        display: block;
        overflow: hidden;
        width: 42px;
        height: 42px;
        text-indent: 100%;
        white-space: nowrap;
      }
    }
  }
`;

function JoinSns() {
  return (
    <Container>
      <p>다른 방식으로 가입하기</p>
      <div>
        <ul>
          <li>
            <a href="https://www.google.com/">구글</a>
          </li>
          <li>
            <a href="https://www.kakaocorp.com/page/">카카오톡</a>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default JoinSns;
