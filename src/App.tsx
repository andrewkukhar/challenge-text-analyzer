import { useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { ResultValues, BottomResultValues } from './textAnalyzerTypes'
import { pronouns } from './data/pronouns'

const App = () => {
  const [text, setText] = useState<string>('');
  const [metrics, setMetrics] = useState<ResultValues & BottomResultValues>({
    words: 0,
    characters: 0,
    sentences: 0,
    paragraphs: 0,
    pronouns: 0,
    averageReadingTime: '0',
    longestWord: ""
  })
  const calculateMetrics = (text: string) => {
    const words = text.trim().split(/\s+/).length;
    const characters = text.length;
    const sentences = text.split(/[.!?]|\n/).filter(sentence => sentence.trim() !== '').length;
    const paragraphs = text.split('\n').filter(para => para.trim() !== '').length;
    const wordsArray = text.toLowerCase().trim().split(/\s+/);
    const pronounCount = wordsArray.filter(word => pronouns.includes(word)).length;
    const averageReadingTime = (words / 225).toFixed(2);
    const longestWord = wordsArray.reduce((longest, word) => word.length > longest.length ? word : longest, "");
    setMetrics({
      words, characters, sentences, paragraphs, pronouns: pronounCount, averageReadingTime, longestWord
    });
  }

  const handleTextChange = (value: string) => {
    setText(value);
    calculateMetrics(value);
  }

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox values={{
            words: metrics.words, 
            characters: metrics.characters, 
            sentences: metrics.sentences, 
            paragraphs:  metrics.paragraphs, 
            pronouns: metrics.pronouns
          }}/>
          <TextArea value={text} onChange={handleTextChange}/>
          <BottomResultBox values={{averageReadingTime: metrics.averageReadingTime, longestWord: metrics.longestWord}}/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
