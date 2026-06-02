import {Header, Body,Navbar} from '../components/groups/common'

export default function Page ({header}){
    return(
      
        <div className='min-w-full '>
           
        <div className=' mt-20 m-2 pb-0 pl-40 text-white text-2xl font-lmao text-left' 
          
        >updates</div>
        <div className='ml-2 mr-2 flex'>
          <div className='mx-auto overflow-x-auto flex'>

           <Body date="02.06.2026"
              head="Most Recent Modification"
              text="Added two new subpages. They are currently not filled. It will take some time until all the content is migrated and the page is tailored to my liking."          />


        <Body date="26.05.2026"
      
            
              head=" First Initialization"
              text="    
          Today marks the first day on which Echo has been active. 
            It is still undergoing heavy maintanance but soon it will be released."
              />
        
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
     </div>
 
    );
}