import { Layout, Row, Col } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Market from "../containers/Market";
import Account from "../components/Account";
import logo from "../images/bayc.jpg";
import { Route, Routes } from "react-router-dom";
import web3 from "../web3/connection/web3";
import Web3Context from "../web3/store/web3-context";
import { useContext } from "react";
import WrongNetwork from "../containers/WrongNetwork";

const AppLayout = () => {
  const web3Ctx = useContext(Web3Context);
  const isConnected = web3 && web3Ctx.account;

  return (
    <Row>
      <Col span={24}>
        <Layout style={{ minHeight: "100vh" }}>
          <Header>
            <Row align="stretch" gutter={20}>
              <Col>
                <img src={logo} width={40} height={40} />
              </Col>
              <Col>
                <h1>
                  <font color="white">Bored Ape Yacht Club</font>
                </h1>
              </Col>
              <Col flex="auto"></Col>
              <Col span={1} style={{ marginRight: 10 }}>
                <Account />
              </Col>
            </Row>
          </Header>
          <Content>
            {web3Ctx.networkId == 1 ? (
              <Routes>
                <Route path="/" element={<Market />} />
                <Route path="/market" element={<Market />} />
              </Routes>
            ) : (
              <WrongNetwork />
            )}
          </Content>
          <Footer
            style={{
              position: "sticky",
              bottom: 0,
            }}
          >
            © 2022 All rights reserved by Daniel Armstrong.
          </Footer>
        </Layout>
      </Col>
    </Row>
  );
};

export default AppLayout;
