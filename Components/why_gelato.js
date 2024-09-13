import top_cont_img from "../public/top_cont_img.png";
import why_gelato from "../public/why_gelato.png";
const WhyGelato=()=>{
    return(
        <div className="why_gelato">
            <div className="why_gelato-cont-right" style={{marginLeft:"200px ",justifyContent:"center"}}>
                <img src={why_gelato} style={{width:"600px",height:"600px"}}/>
            </div>
            
            <div className="why_gelato-cont-left" style={{fontFamily:"Helvetica Neue",marginRight:"250px "}}>
                <h1>▻ World's largest print-on-demand network</h1>
                <h3>140+ print partners in 32 countries. Gelato is a truly global service.</h3>
                <h1>▻ Sell globally, produce locally</h1>
                <h3>Your products are produced close to your customers, wherever they are.</h3>
                <h1>▻ 100% free editing tools</h1>
                <h3>Create your custom products using our suite of free tools.</h3>
                <h1>▻ 60+logistics partners</h1>
                <h3>▻ High-quality products</h3>
                <h1>▻ Endless creativity with Shutterstock Images</h1>
                <h3>Access millions of images and graphics to create unique products you can sell in your store.</h3>
                <h1>▻ 1-click integration to the leading ecommerce platforms</h1>
                <h3>Connect your store to Gelato using our integrations with Shopify, Etsy and more.</h3>
          
            </div>
      
        </div>
    )
}
export default WhyGelato;