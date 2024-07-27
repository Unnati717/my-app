import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TestCase from './TestCase';

const TestCaseList = () => {
  const [testCases, setTestCases] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/testcases`);
      setTestCases(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const updateTestCase = async (id, updatedTestCase) => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/testcases/${id}`, updatedTestCase);
      fetchData();
    } catch (error) {
      console.error("Error updating test case", error);
    }
  };

  return (
    <div>
      {testCases.map(testCase => (
        <TestCase key={testCase.id} testCase={testCase} updateTestCase={updateTestCase} />
      ))}
    </div>
  );
};

export default TestCaseList;
