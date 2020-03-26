import React from 'react';
import MetaTags from 'react-meta-tags';

class Component1 extends React.Component {
  render() {
    return (
        <div className="wrapper">
          <MetaTags>
            <title>Sweetome Property Management</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="Sweetome" />
            <meta property="og:image" content="./components/images/sweetome.png" />
          </MetaTags>
          <div className="content">Property Management Vancouver</div>
        </div>
      )
  }
}