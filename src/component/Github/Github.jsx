import React, { useEffect, useState } from 'react';

function Github() {
  const [data, setData] = useState(null); // State for GitHub data
  const [error, setError] = useState(null); // State for error tracking
  const [loading, setLoading] = useState(true); // State for loading status

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Abhishek70076');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result); // Debugging: Log data to console
        setData(result);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch GitHub data');
      } finally {
        setLoading(false); // Ensure loading stops regardless of success or failure
      }
    };

    fetchGithubData();
  }, []);

  // Conditional rendering
  if (loading) return <p className="text-center m-4">Loading...</p>;

  if (error) return <p className="text-center m-4 text-red-600">{error}</p>;

  return (
    <div className="text-center m-4 bg-gray-300 text-yellow-600 p-4 text-3xl">
      {data && (
        <>
          <p>GitHub Followers: {data.followers}</p>
          <img
            src={data.avatar_url}
            alt={`${data.login}'s avatar`}
            width={300}
            className="rounded-full mt-4"
          />
        </>
      )}
    </div>
  );
}

export default Github;
