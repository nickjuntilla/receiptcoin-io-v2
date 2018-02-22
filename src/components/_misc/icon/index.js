// Library imports
import React from 'react';

// Relative Imports
import { Image, Link } from './styles';

const Icon = ({ src, url }) => {
  return (
    <Link href={url} target="_blank">
      <Image src={src} />
    </Link>
  );
};

export default Icon;
