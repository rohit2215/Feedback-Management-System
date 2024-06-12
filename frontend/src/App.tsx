import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

const App: React.FC = () => {
  const [refresh, setRefresh] = useState(false);

  const handleFeedbackSubmit = () => {
    setRefresh(!refresh); // Toggle refresh state to trigger re-render
  };

  return (
    <div>
      <center>
      <h1>Feedback Application</h1></center>
      <FeedbackForm onFeedbackSubmit={handleFeedbackSubmit} />
      <FeedbackList refresh={refresh} /> {/* Pass refresh state to trigger re-fetch */}
    </div>
  );
};

export default App;
