import { TextAreaProps } from '../../textAnalyzerTypes';
import './index.scss'

const TextArea: React.FC<TextAreaProps> = ({value, onChange}) => {
  return <textarea value={value} onChange={(e)=> onChange(e.target.value)} className="text-area" placeholder="Paste your text here..." />
}

export default TextArea
