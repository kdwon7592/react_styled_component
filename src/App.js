import React, { useState } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import Button from "./components/Button";
import Dialog from "./components/Dialog";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  margin-top: 1rem;
`;


function App() {
  const [dialog, setDialog] = useState(false);

  const onCancel = () => {
    console.log("취소");
    setDialog(false);
  }

  const onConfirm = () => {
    console.log("삭제");
    setDialog(false);
  }

  const openDialog = () => {
    console.log("클릭");
    setDialog(true);
  }

  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595'
        }
      }}
    >
      <>
        <AppBlock>
          <ButtonGroup>
            <Button
              size='large'
              openDialog={openDialog}
            >Button</Button>
            <Button>Button</Button>
            <Button size='small'>Button</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size='large' color='gray'>Button</Button>
            <Button color='gray'>Button</Button>
            <Button size='small' color='gray'>Button</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size='large' color='pink'>Button</Button>
            <Button color='pink'>Button</Button>
            <Button size='small' color='pink'>Button</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size='large' outline>Button</Button>
            <Button color='gray' outline>Button</Button>
            <Button size='small' color='pink' outline>Button</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size='large' fullwidth>Button</Button>
            <Button color='gray' fullwidth>Button</Button>
            <Button size='small' color='pink' fullwidth>Button</Button>
          </ButtonGroup>
        </AppBlock>
        <Dialog
          title="정말로 삭제하시겠습니까"
          onCancel={onCancel}
          onConfirm={onConfirm}
          visible={dialog}
        >데이터를 정말로 삭제하시겠습니까</Dialog>
      </>
    </ThemeProvider>
  );
}

export default App;
