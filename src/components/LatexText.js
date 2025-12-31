import React from 'react';
import Latex from 'react-latex-next';

export default function LatexText({ children }) {
  return (
    <span className="latex-container">
      <Latex>{children}</Latex>
    </span>
  );
}