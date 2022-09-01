import React, { useState, useEffect, SyntheticEvent, FC } from "react";
import { Layout } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { Divider, Typography } from "antd";
import useBoolean from "./hooks/useBoolean";
import useFetch from "./hooks/useFetch";
import { Card } from "antd";
import { Col, Row } from "antd";
import { Space, Spin } from "antd";
import { json } from "stream/consumers";
import Logo from "./components/logo/Logo";
import Header from "./components/header/Header";

const { Meta } = Card;
const { Title, Paragraph, Text, Link } = Typography;
const { Footer, Sider, Content } = Layout;

const API_KEY = "9625d5db";
const storage = window.localStorage;

interface MovieData {
  [key: string]: string;
}

const App: FC = () => {
  const [formInputValue, setFormValue] = useState("");
  const [movieData, setMovieData] = useState<MovieData | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean | null>(null);
  const [moviesArray, setMoviesArray] = useState<object[]>([]);

  console.log(moviesArray);

	const getItemFromLS = () => {

		try{
			const item = storage.getItem("movies");
			return item
		} catch(error) {
			console.error(error)
		}
	}

	console.log(getItemFromLS())

  const handleChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setFormValue(target.value);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log("hey");
    setIsLoaded(true);

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${formInputValue}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoaded(false);
        setMovieData(data);
      });
  };

  useEffect(() => {
    if (movieData && movieData.Response !== "False") {
      moviesArray.push(movieData);
    }
    console.log(moviesArray);

    window.localStorage.setItem("movies", JSON.stringify(moviesArray))
  }, [movieData]);


  return (
    <div className="App">
			<Header handleSubmit={handleSubmit} />
      <Layout
        style={{
          paddingLeft: "35px",
          paddingRight: "35px",
          height: "100vh",
        }}
      >
        <Content>
          {/*<Form
            style={{
              display: "flex",
              margin: "20px 0 20px 0",
            }}
            onSubmitCapture={handleSubmit}
          >
            <Input value={formInputValue} onChange={handleChange} />
            <Button type="primary">Find</Button>
          </Form>*/}
          <Row>
            <Col span={12}>
              {isLoaded && (
                <Space>
                  <Spin size="large" />
                </Space>
              )}
              {!isLoaded && movieData && (
                <Card
                  //loading={true}
                  style={{ width: 240 }}
                  hoverable
                  title={movieData.Title}
                  cover={<img alt="poster" src={movieData.Poster} />}
                >
                  <Meta title="test" description="description" />
                </Card>
              )}
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
