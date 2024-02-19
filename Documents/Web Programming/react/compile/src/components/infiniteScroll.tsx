import React, { useState, useEffect } from 'react'; // Import necessary hooks

// Ensure InfiniteScroll component is imported correctly
import InfiniteScroll from 'react-infinite-scroll-component';
import { Grid } from '@mui/material';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark, atomDark, coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


import { Outlet, Link } from "react-router-dom";

function InfiniteScrollComponent() { // Use a descriptive name
  const [items, setItems] = useState(Array.from({ length: 20 })); // Use useState hook

  const fetchMoreData = () => {
    setTimeout(() => {
      setItems((prevItems) => [...prevItems, ...Array.from({ length: 10 })]); // Update state immutably
    }, 1500);
  };
  const CodeString = 'let x=9;';
  
  return (
    <div>
      <h1>demo: react-infinite-scroll-component</h1>
      <Link to="/bogos"> Redirect</Link>
      <hr />
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {items.map((i, index) => (
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <div className='videoBlock' key={index}>
                Video Area
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className='codeBlock' key={index}>
              <SyntaxHighlighter language="javascript" className='innerCode' style={coldarkDark}>
                {CodeString}
              </SyntaxHighlighter>
              </div>
            </Grid>
          </Grid>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default InfiniteScrollComponent; // Export the component
