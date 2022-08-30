import React, { useState, useEffect, SyntheticEvent } from "react";
import { Layout } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { Divider, Typography } from "antd";
import useBoolean from "./hooks/useBoolean";
import useFetch from "./hooks/useFetch";
import { Card } from "antd";
import { Col, Row } from "antd";
const { Title, Paragraph, Text, Link } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const API_KEY = "9625d5db"

function App() {
  const [formInputValue, setFormValue] = useState("");
  const [movieData, setMovieData] = useState({});

  const handleChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setFormValue(target.value);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
		console.log('hey')

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${formInputValue}`)
      .then((response) => response.json())
      .then((data) => setMovieData(data));
  };


  return (
    <div className="App">
      <Layout
        style={{
          paddingLeft: "35px",
          paddingRight: "35px",
          height: "100vh",
        }}
      >
        <Content>
          <Form
            style={{
              display: "flex",
              margin: "20px 0 20px 0",
            }}
            onSubmitCapture={handleSubmit}
          >
            <Input value={formInputValue} onChange={handleChange} />
            <Button type="primary">Find</Button>
          </Form>
          <Row>
            <Col span={24}>
              {movieData && (
                <Card
                  hoverable
									title="tesst"
                  //cover={<img alt="poster" src={movieData.data.Poster}/>}
                />
              )}
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
