import React from "react";
import styled from "styled-components";

const Block = styled.div`
  border-style: solid;
  width: 80px;
  height: 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function TabDetails({ skipCol, colMap, updateVisibleCols }) {
  return (
    <Container>
      {Object.keys(colMap).map((key, i) => {
        if (skipCol.includes(i)) {
          return null;
        }

        return (
          <div id={i} onClick={() => updateVisibleCols(i)}>
            <Block>{key}</Block>
          </div>
        );
      })}
    </Container>
  );
}
