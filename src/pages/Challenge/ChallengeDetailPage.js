import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from 'API';
import ChallengeDetail from './components/ChallengeItems/ChallengeDetail';

const ChallengeDetailPage = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const response = await API.get(`/api/challenge/${id}`);
        setChallenge(response.data.data[0]);
      } catch (error) {
        console.log('Error selecting data:', error);
      }
    };
    fetchChallenge();
  }, [id]);

  if (challenge === null) return <div>Loading...</div>;

  return (
    <div>
      <ChallengeDetail {...challenge} />
    </div>
  );
};

export default ChallengeDetailPage;
