import { useContext } from "react"
import { MoviesContext } from "../../Contaxts/MoveiApi/MoveApi"
import WatchListCard from "../../Components/WathListCard/WatchListCard"

export default function WatchList() {
  const { watchlist, toggleWatchlist } = useContext(MoviesContext)

  if (watchlist.length === 0) {
    return <h2>No Movies in watch list</h2>
  }

  return (
<div style={{
  display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
gap: "30px",
  padding: "20px"
}}>
  {watchlist.map((item) => (
    <WatchListCard key={item.id} item={item} onRemove={toggleWatchlist} />
  ))}
</div>
  )
}