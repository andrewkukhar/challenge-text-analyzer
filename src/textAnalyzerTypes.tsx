export interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
}

export interface ResultValues {
  words: number;
  characters: number;
  sentences: number;
  paragraphs: number;
  pronouns: number;
}

export interface ResultBoxProps {
  values: ResultValues;
}

export interface BottomResultValues {
  averageReadingTime: string | number;
  longestWord: string;
}

export interface BottomResultBoxProps {
  values: BottomResultValues
}