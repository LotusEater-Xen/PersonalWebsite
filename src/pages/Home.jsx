import Page from '../templates/page'
import peng  from '../images/pengu.jpg';
export default function Home (){
    return(
      <div className=' w-full h-screen bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%'>
        <Page 
            header="echo"
            
            body_date="26.05.2026"
            body_head="First Initialization"
            body_text="Today marks the first day on which Echo has been active. 
            It is still undergoing heavy maintanance but soon it will be released."
           />
         </div>
    );
}
