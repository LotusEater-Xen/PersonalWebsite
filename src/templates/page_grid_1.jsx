import {Header, Body,Navbar} from '../components/groups/common'

export default function Page ({header}){
    return(
      
        <div>
           

        <div className='lg:p-20 lg:pt-0 p-2 mx-auto md:grid grid-cols-2 lg:grid-cols-4 gap-4'>
        <Body date="26.05.2026"
      
            
              head=" First Initialization"
              text="    
          Today marks the first day on which Echo has been active. 
            It is still undergoing heavy maintanance but soon it will be released."
              />
         <Body date="{body_date}"
              head="body_head}"
              text=""              />
         <Body date=""
              head=""
              text=""
              />

         <Body date=""
              head=""
              text=""
              />
        </div>
     </div>
 
    );
}