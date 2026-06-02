import {Header, Body,Navbar, Body_post} from '../components/groups/common'

export default function Page ({header}){
    return(
      
        <div className='min-w-full '>
           
        <div className='  m-2 pb-0 pl-40 text-white text-2xl font-lmao text-left' 
          
        >collection</div>
        <div className='ml-2 mr-2'>
          <div className='md:ml-20 md:mr-20 mx-auto lg:grid lg:grid-cols-8 grid-cols-4 gap-4'>

<div className='m-auto col-span-2 row-span-1'>
        <Body_post date="02.06.2026"
      
            
              head="Angel"
              image="Posts/Images/angel.png"
            
         />
        </div>

        <div className='m-auto col-span-4 row-span-2'>
        <Body_post date="02.06.2026"
      
            
              head="Sailors Poem"
              image="Posts/Images/sand.png"     
            
         />
        </div>

<div className='m-auto col-span-2 row-span-1'>
        <Body_post date="02.06.2026"
      
            
              head="PicMix"
              image="Posts/Gifs/wishuwerehere.gif"     
            
         />
        </div>


<div className='m-auto col-span-2 row-span-1'>
        <Body_post date="02.06.2026"
      
            
              head="Fallen of the White Dragon"
              image="Posts/Images/albaz.png"     
            
         />
        </div>
        <div className='m-auto col-span-2 row-span-1'>
           <Body_post  date="02.06.2026"
              head="Smile"
              image="Posts/Images/smile.png"         />
</div>
        


<div className='m-auto col-span-4 col-span-8 row-span-1'>
        <Body_post date="02.06.2026"
      
            
              head="Kassadin"
              image="Posts/Images/kassa2.png"     
            
         />
        </div>
        

              </div>
        </div>
     </div>
 
    );
}