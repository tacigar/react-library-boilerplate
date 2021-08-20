/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react';
import React from 'react';

interface HelloWorldProps {
  name: string;
}

const HelloWorld: React.FC<HelloWorldProps> = ({ name }) => (
  <p
    css={css`
      background-color: #fafafa;
      padding: 4px 8px;
      border: 1px #dbdbdb solid;
      border-radius: 4px;
    `}
  >
    Hello, {name}!
  </p>
);

export default HelloWorld;
