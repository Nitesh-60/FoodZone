import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const Shimer = ({
  name,
  cuisines,
  cloudinaryImageId,
  totalRatingsString,
}) => {
  return (
    <div className="RestruantList">
      <div className="cards">
          <div ><Skeleton className="img-shimmer" /></div>
          <h2><Skeleton /></h2>
          <h3><Skeleton /></h3>
          <h4><Skeleton /></h4>
      </div>
      <div className="cards">
          <div ><Skeleton className="img-shimmer" /></div>
          <h2><Skeleton /></h2>
          <h3><Skeleton /></h3>
          <h4><Skeleton /></h4>
      </div>
      <div className="cards">
          <div ><Skeleton className="img-shimmer" /></div>
          <h2><Skeleton /></h2>
          <h3><Skeleton /></h3>
          <h4><Skeleton /></h4>
      </div>
      <div className="cards">
          <div ><Skeleton className="img-shimmer" /></div>
          <h2><Skeleton /></h2>
          <h3><Skeleton /></h3>
          <h4><Skeleton /></h4>
      </div>
      <div className="cards">
          <div ><Skeleton className="img-shimmer" /></div>
          <h2><Skeleton /></h2>
          <h3><Skeleton /></h3>
          <h4><Skeleton /></h4>
      </div>
      <div className="cards">
          <div ><Skeleton className="img-shimmer" /></div>
          <h2><Skeleton /></h2>
          <h3><Skeleton /></h3>
          <h4><Skeleton /></h4>
      </div>
      <div className="cards">
          <div ><Skeleton className="img-shimmer" /></div>
          <h2><Skeleton /></h2>
          <h3><Skeleton /></h3>
          <h4><Skeleton /></h4>
      </div>
      <div className="cards">
          <div ><Skeleton className="img-shimmer" /></div>
          <h2><Skeleton /></h2>
          <h3><Skeleton /></h3>
          <h4><Skeleton /></h4>
      </div>
      <div className="cards">
          <div ><Skeleton className="img-shimmer" /></div>
          <h2><Skeleton /></h2>
          <h3><Skeleton /></h3>
          <h4><Skeleton /></h4>
      </div>
      <div className="cards">
          <div ><Skeleton className="img-shimmer" /></div>
          <h2><Skeleton /></h2>
          <h3><Skeleton /></h3>
          <h4><Skeleton /></h4>
      </div>
    </div>
  );
}

export default Shimer;
