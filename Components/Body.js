import ProdData from "./prod_data_cont";
import Top_container from "./Top_container";
import ProdData from "./prod_data_cont";
import WhyGelato from "./why_gelato";
const Body=()=>{
  return(
    <div>
    <Top_container/>
    <ProdData/>
    
    <h1 style={{fontSize:"80px",textAlign:"center",fontFamily:"Helvetica Neue"}}>Why choose Gelato</h1>
    <WhyGelato/>
    </div>
  );
}
export default Body;