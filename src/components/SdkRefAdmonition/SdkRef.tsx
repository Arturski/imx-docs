import React from 'react';

const SdkRef = ({ mainPath, pathAfterVersion, method }) => {
  const link = `../../${mainPath}/${pathAfterVersion}`;

  return (
    <li>
      <a href={link}>{method}</a>
    </li>
  );
};

export default SdkRef;
