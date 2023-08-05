import { BottomResultBoxProps } from '../../textAnalyzerTypes';

import './index.scss'

const BottomResultBox: React.FC<BottomResultBoxProps> = ({values}) => {
  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: values.averageReadingTime,
    },
    {
      title: 'Longest word:',
      value: values.longestWord,
    },
  ]

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
