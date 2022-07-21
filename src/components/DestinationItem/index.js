// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <l1 className="card-item">
      <img src={imgUrl} alt={name} className="image" />
      <h1 className="heading-2">{name}</h1>
    </l1>
  )
}

export default DestinationItem
