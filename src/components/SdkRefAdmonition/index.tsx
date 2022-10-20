/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  useVersions,
  // @ts-ignore eslint-ignore
} from '@docusaurus/plugin-content-docs/client';
// @ts-ignore
import Admonition from './_admonition.mdx';

const SdkRefAdmonition = ({ sdkId, children }) => {
  const version = useVersions(`${sdkId}`)[0].name;
  const sdkName = sdkId.substring(5);
  const link = `sdk-references/${sdkName}/${version}`;

  const childrenWithPath = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        mainPath: link,
      });
    }
    return child;
  });

  return <Admonition>{childrenWithPath}</Admonition>;
};

export default SdkRefAdmonition;
