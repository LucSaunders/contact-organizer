import React from 'react';

export default () => {
  return (
    <div>
      <h1 className="display-4">About</h1>
      <p className="lead">
        Contact Organizer is a fully responsive app for managing contact
        information, built with React, Context API, React-Router-DOM, and Axios.
        For demo purposes only.
      </p>
      <p className="lead">
        Data is populated using https://jsonplaceholder.typicode.com. Please
        demo at will and check out all the features. Be aware: any user-entered
        data will not persist after the website is refreshed or closed.
      </p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
};
