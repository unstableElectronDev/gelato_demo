import ProdData from "./prod_data_cont";
import Top_container from "./Top_container";
import ProdData from "./prod_data_cont";
import WhyGelato from "./why_gelato";
import DemandSelling from "./demand_selling";
import GelatoConnect from "./GrlatoConnect";
import BookMeeting from "./BookMeeting";
import Footer from "./footer";
const Body=()=>{
  return(
    <div>
    <div>
    <Top_container/>
    <ProdData/>
    
    <h1 style={{fontSize:"80px",textAlign:"center",fontFamily:"Helvetica Neue"}}>Why choose Gelato</h1>
    <WhyGelato/>
    
    <DemandSelling/>
    <GelatoConnect/>
    <BookMeeting/>
    <Footer/>
    </div>
    

    <div class="floating-text">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7zUTEpNU1WndlpmAlVUWMcymjlXF-YnVaNR2ksIKYFPrtbzwHo21WjKvzg0pBDL3LKKY&usqp=CAU" style={{width:"40px",height:"40px",padding:"10px"}}/>
            <h2>  Contact us</h2>
    </div>
    
    </div>
  );
}
export default Body;