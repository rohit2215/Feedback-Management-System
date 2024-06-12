import React, { useState } from 'react';
import axios from 'axios';
import './FeedbackForm.css'; // Import CSS file for styling

interface FeedbackFormProps {
  onFeedbackSubmit: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onFeedbackSubmit }) => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3001/feedback', { name, feedback });
      setName('');
      setFeedback('');
      onFeedbackSubmit(); // Notify parent component about the new feedback
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="feedback-form-container">
      <h1>Feedback Management System</h1>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">Submit Feedback</button>
      </form>
    </div>
  );

};

export default FeedbackForm;
