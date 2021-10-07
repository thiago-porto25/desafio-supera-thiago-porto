import styled from 'styled-components'

const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 7rem);

  .spinner {
    background: transparent;
    width: 40px;
    height: 40px;
    border-top: 5px solid rgba(255, 255, 255, 0.3);
    border-right: 5px solid rgba(255, 255, 255, 0.3);
    border-bottom: 5px solid rgba(255, 255, 255, 0.3);
    border-left: 5px solid #fff;
    border-radius: 50%;
    animation: spin 1s ease infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`

export default function Fallback() {
  return (
    <Container>
      <div className="spinner"></div>
    </Container>
  )
}
