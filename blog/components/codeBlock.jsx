// components/CodeBlock.js
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeBlock = ({ children, language }) => (
  <SyntaxHighlighter language={language} style={dracula} >
    {children}
  </SyntaxHighlighter>
);
