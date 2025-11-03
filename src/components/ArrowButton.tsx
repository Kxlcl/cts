import './ArrowButton.css'

interface ArrowButtonProps {
  onClick?: () => void;
}

function ArrowButton({ onClick }: ArrowButtonProps) {
  return (
    <button className="arrow-button" onClick={onClick}>
      <img src="/images/down_arrow.png" alt="Arrow" />
    </button>
  )
}

export default ArrowButton
