import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import classes from './MarkdownDisplay.module.css';

const MarkdownDisplay = ({ markdownContent }) => {
  return (
    <div className={classes.markdown}>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default MarkdownDisplay; 