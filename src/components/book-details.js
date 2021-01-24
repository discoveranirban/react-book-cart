import React from "react";
import styled from "styled-components";

const Block = styled.div`
  border-style: solid;
  width: 200px;
  height: 60px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function BookDetails({ book, skipCol }) {
  return (
    <Container>
      {Object.keys(book).map((key, i) => {
        if (skipCol.includes(i)) {
          return null;
        }

        return (
          <div id={i}>
            <Block>{book[key]}</Block>
          </div>
        );
      })}
    </Container>
  );
}
