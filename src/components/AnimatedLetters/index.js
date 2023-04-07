import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, delay }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + delay}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters