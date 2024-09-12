import top_cont_img from "../public/top_cont_img.png";
import shopify_logo from "../public/shopify_logo.png";
const Top_container=()=>{
    return(
    <div className="top_container">
      <div className="top-cont-left" style={{fontFamily:"Helvetica Neue",marginLeft:"250px "}}>
        <h1 style={{fontSize:"80px"}}>Print on demand for your ecommerce business</h1>
        <h2 style={{fontSize:"30px"}}>Sign up for free and only pay for what you sell</h2>
        <h3 style={{fontSize:"20px"}}>Turn your passion into profit with the world's largest print on demand network.</h3>
        
        <div  style={{display:"flex"}}>

          <div style={{justifyContent:"center",marginRight:"10px",backgroundColor:"black",color:"white",paddingLeft:"20px",paddingRight:"20px",width:"auto",height:"auto",borderRadius:"50px"}}>
            <h3>Get started for free</h3>
          </div>
          <div className="see_our_prod_btn"
          style={{justifyContent:"center",marginLeft:"10px"}}>
            <h3>see our products</h3>
          </div>
        </div>
        <img src={shopify_logo} style={{height :"200px",width:"350px"}}/>
      </div>
      <div className="top-cont-right" style={{marginRight:"200px ",justifyContent:"center"}}>
        <img src={top_cont_img} style={{width:"750px",height:"600px"}}/>
      </div>
    </div>
    );

}
export default Top_container;