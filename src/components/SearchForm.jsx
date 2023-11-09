import React, { useState } from "react";
import styled from "styled-components";
import JSONDATA from "../assets/data-set.json";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  all: unset;
  font-size: 25px;
  color: #000;
  height: 100%;
  width: 100%;
  padding-left: 5%;
  padding-top: 0.5%;
  text-align: center;
  &::placeholder {
    color: #000;
    opacity: 0.7;
    font-size: 25px;
    text-align: center;
  }
`;
const SearchRes = styled.div`
  margin-top: 1%;
  display: flex;
  flex-direction: column;
`;

const ResText = styled.p`
  font-size: 120%;
`;

const Form = styled.form`
  margin-top: 1%;
  width: 80%;
  height: 5%;
  background-color: whitesmoke;
  border-radius: 25px;
  border: violet 2px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Section>
      <Container>
        <Form role="search" id="form">
          <Input
            type="text"
            id="query"
            name="q"
            placeholder="Search query"
            onChange={(ev) => {
              setSearchTerm(ev.target.value);
            }}
          />
          {JSONDATA.filter((val) => {
            if (searchTerm == "") {
              return val
            } else if ((val.author.toLowerCase().includes(searchTerm.toLowerCase())) || (val.book.toLowerCase().includes(searchTerm.toLowerCase())) || (val.publisher.toLowerCase().includes(searchTerm.toLowerCase())) || (val.year.toString().includes(searchTerm))) {
              return val
            }
          }).map((val, key) => {
            return (
              <SearchRes className="Results" key={key}>
                {" "}
                <ResText>
                  {val.id} :: {val.author} // {val.book} // {val.publisher} //   {val.year}
                </ResText>
              </SearchRes>
            );
          })}
        </Form>
      </Container>
    </Section>
  );
};

export default SearchForm;
