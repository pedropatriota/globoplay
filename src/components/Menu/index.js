import React, {useRef} from 'react';
import * as S from './style'
import { Search } from '@styled-icons/boxicons-regular/Search'
import { Home }  from '@styled-icons/boxicons-solid/Home'
import { UserCircle } from '@styled-icons/boxicons-solid/UserCircle'
import { Station } from '@styled-icons/boxicons-regular/Station'
import { Drawer } from '@styled-icons/icomoon/Drawer'
 
export default React.forwardRef((props, ref)=>{ 
  const itemRef= useRef(null)
  // utilizar nesse componente o useFocus

  return(     
    <>
      {(props.focus) ?(
      <S.MenuWrapper tabIndex="-1" ref={ref}>
        <button><Search />Busca</button>
        <button><Home />Início</button>
        <button><Station />Agora na Globo</button>
        <button><Drawer />Categorias</button>
        <button><UserCircle />Minha conta</button>
      </S.MenuWrapper> 
      ):(
      <S.MenuWrapper tabIndex="0" ref={ref}>
        <button ref={itemRef} tabIndex="0"><Search focusable={true}/></button>
        <button tabIndex="-1"><Home focusable={true}/></button>
        <button tabIndex="-1"><Station focusable={true}/></button>
        <button tabIndex="-1"><Drawer focusable={true}/></button>
        <button tabIndex="-1"><UserCircle focusable={true}/></button>
      </S.MenuWrapper> 
      )}      
    </>        
  )
})