import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid';


const App = () => {
  const asyncGetData = async () => {
    const response = await fetch("https://dh6u6ywby23iqgc-tutorial.adb.us-ashburn-1.oraclecloudapps.com/ords/test/emp/hol/")
    const data = response.json()
    return data
  }
  const [data, setData] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      const data = await asyncGetData()
      setData(data)
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>Employee #</Col>
          <Col>Name</Col>
          <Col>Job Title</Col>
          <Col>Mgr Emp #</Col>
          <Col>Hire Date</Col>
          <Col>Salary</Col>
          <Col>Comm</Col>
          <Col>Dept #</Col>
        </Row>
        {data ? data.items.map((item, i) => (
          <Row key={i}>
            <Col>{item.empno}</Col>
            <Col>{item.ename}</Col>
            <Col>{item.job}</Col>
            <Col>{item.mgr ? item.mgr : "No Manager"}</Col>
            <Col>{item.hiredate}</Col>
            <Col>${item.sal}.00</Col>
            <Col>{item.comm ? `${item.comm}.00` : "No Commission"}</Col>
            <Col>{item.deptno}</Col>
          </Row>
        )) : <Row>Loading...</Row>}
      </Container>
    </div>
  );
}

export default App;
