import styled from "styled-components"
import SearchForm from "./components/SearchForm"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background-image: url("./img/background.png");
  color: white;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <Container>
      <SearchForm />
    </Container>
  )
}

export default App
