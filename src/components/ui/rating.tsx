import { Star, StarHalf, StarOff } from "lucide-react";

export  function RatingStars({ rating = 4.5 }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />);
    } else if (i - rating < 1) {
      stars.push(<StarHalf key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />);
    } else {
      stars.push(<Star key={i} className="w-5 h-5 text-gray-300" />);
    }
  }

  return <div className="flex">{stars}</div>;
}
