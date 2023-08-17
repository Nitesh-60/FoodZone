import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const Shimer = () => {
  return (
    <div className="RestruantList">
    
    {Array(12)
    .fill("")
    .map((e,index)=>(
    <div key={index} className="cards">
          <div ><Skeleton className="img-shimmer" /></div>
          <h2><Skeleton /></h2>
          <h3><Skeleton /></h3>
          <h4><Skeleton /></h4>
      </div>
      ))}  
    </div>
  );
}

export default Shimer;
