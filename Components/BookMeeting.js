const BookMeeting=()=>{
    return(
    <div className="Book_meeting"style={{  backgroundColor: "rgb(251,246,239)"
    }} >
      <div className="Book_meeting-cont-left" style={{marginLeft:"250px ",fontFamily:"GelatoSans-Medium, sans-serif"}}>
        <h1 style={{fontSize:"80px"}}>Meet GelatoConnect at Printing United</h1>
        <h5 style={{fontSize:"30px"}}>Meet us at Printing United from September 10-12 in Las Vegas. Book your meeting slot to discover the innovative ways GelatoConnect is transforming the landscape and driving success for businesses like yours.</h5>
        
        <h3 style={{backgroundColor:"black",color:"white",width:"200px",padding :"15px",borderRadius:"30px",textAlign:"center"}}>Book a meeting</h3>
      
      </div>
      
      <div className="Book_meeting-cont-right" style={{marginRight:"200px ",justifyContent:"center"}}>
        <img src="https://a.storyblok.com/f/165154/1280x720/5d47159829/gelato-printing-united-2024.png/m/" style={{width:"700px",height:"400px"}}/>
      </div>
    </div>
    );

}
export default BookMeeting;