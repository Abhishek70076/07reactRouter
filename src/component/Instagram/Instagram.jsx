import React, { useEffect, useState } from 'react';

function Instagram() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstagramData = async () => {
      const accessToken = 'YOUR_ACCESS_TOKEN'; // Replace with your Instagram Access Token
      const apiUrl = `https://graph.instagram.com/abhishek.singh1000?fields=username,account_type,media_count&access_token=${accessToken}`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result); // Debugging: Log data to console
        setData(result);
      } catch (err) {
        console.error(err);
        // Extract specific error message from response (if available)
        const errorMessage = err.message || 'Failed to fetch Instagram data';
        setError(errorMessage);
      } finally {
        setLoading(false); // Ensure loading stops regardless of success or failure
      }
    };

    fetchInstagramData();
  }, []);

  // Conditional rendering
  if (loading) return <p className="text-center m-4">Loading...</p>;

  if (error) return <p className="text-center m-4 text-red-600">{error}</p>;

  return (
    <div className="text-center m-4 bg-gray-300 text-blue-600 p-4 text-3xl">
      {data && (
        <>
          <p>Username: {data.abhishek.singh1000}</p>
          <p>Account Type: {data.account_type}</p>
          <p>Media Count: {data.media_count}</p>
        </>
      )}
    </div>
  );
}

export default Instagram;