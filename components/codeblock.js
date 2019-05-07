import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/styles/hljs";

const CodeBlock = ({language = 'javascript', value}) => {
  // static propTypes = {
  //   value: PropTypes.string.isRequired,
  //   language: PropTypes.string
  // };

  // static defaultProps = {
  //   language: null
  // };

  return (
    <SyntaxHighlighter language={language} style={atomOneDark}>
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock;