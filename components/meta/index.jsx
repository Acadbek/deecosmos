import React from "react";
import Head from "next/head";

const Meta = ({ title, name, content, children }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name={name} content={content} />
      {children}
    </Head>
  );
};

export default Meta;