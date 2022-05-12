import React from 'react';
import { useQuery, gql } from "@apollo/client";
import logo from './logo.svg';
import './App.css';

const FILMS_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`;

interface launchObject { id: React.Key | null | undefined; mission_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }

function App() {
  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) return <div>"Loading..."</div>;
  if (error) return <pre>{error.message}</pre>
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    <h1>SpaceX Launches</h1>
      <ul>
        {data.launchesPast.map((launch: launchObject) => (
          <li key={launch.id}>{launch.mission_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
