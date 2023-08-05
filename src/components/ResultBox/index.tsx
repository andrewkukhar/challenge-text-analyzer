import { ResultBoxProps } from '../../textAnalyzerTypes';
import './index.scss'


const ResultBox: React.FC<ResultBoxProps> = ({ values }) => {
  const resultBar = [
    {
      title: 'Words',
      value: values.words,
    },
    {
      title: 'Characters',
      value: values.characters,
    },
    {
      title: 'Sentences',
      value: values.sentences,
    },
    {
      title: 'Paragraphs ',
      value: values.paragraphs,
    },
    {
      title: 'Pronouns',
      value: values.pronouns,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span> 
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
