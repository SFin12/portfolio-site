import React, { useEffect } from 'react';

const CredlyBadge = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;

    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div
    className='outline-shadow'
      data-iframe-width="150"
      data-iframe-height="270"
      data-share-badge-id="dd8f2c74-c8d8-43c0-b105-6daeb4e1c2c0"
      data-share-badge-host="https://www.credly.com">
    </div>
  );
};

export default CredlyBadge;
