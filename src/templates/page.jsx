import {Header, Body} from '../components/groups/common'

export default function Page ({header,body_date,body_head,body_text}){
    return(
      
        <div>
        <Header text={header}/>
        <div className='pt-20 max-w-7xl mx-auto'>
        <Body date={body_date}
              head={body_head}
              text={body_text}
              />
        </div>
     </div>
 
    );
}