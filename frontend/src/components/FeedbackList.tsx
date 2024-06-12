import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Feedback {
  name: string;
  feedback: string;
}

const FeedbackList: React.FC<{ refresh: boolean }> = ({ refresh }) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get<Feedback[]>('http://localhost:3001/feedback');
      setFeedbacks(response.data);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, [refresh]); // Fetch feedbacks whenever 'refresh' changes

  return (
    <div>
        <center>
      <h2>Feedback List</h2></center>
      <ul>
        {feedbacks.map((feedback, index) => (
          <li key={index}>
            <strong>{feedback.name}</strong>: {feedback.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
