import React from 'react';
import * as PhoneBarElements from './PhoneBarElements';
import { checkStorage } from '../helperMethods';
const Sidebar = ({ isOpen, toggle }) => {
   const logout = (e) => {
      localStorage.clear();
      window.location.reload(false);
   }
   return (
      <PhoneBarElements.SidebarContainer isOpen={isOpen} onClick={toggle}>
         <PhoneBarElements.Icon onClick={toggle}>
            <PhoneBarElements.CloseIcon />
         </PhoneBarElements.Icon>
         <PhoneBarElements.SidebarWrapper>
            <PhoneBarElements.SidebarMenu>
               <PhoneBarElements.SidebarLink to="/About" onClick={toggle} >About</PhoneBarElements.SidebarLink>
               <PhoneBarElements.SidebarLink to="/Plans" onClick={toggle}>Plans</PhoneBarElements.SidebarLink>
            </PhoneBarElements.SidebarMenu>
            <PhoneBarElements.SideBtnWrap>
               {checkStorage() !== null ?
                  <PhoneBarElements.SidebarRoute onClick={e => logout(e)}>Logout</PhoneBarElements.SidebarRoute>
                  :
                  <PhoneBarElements.SidebarRoute to="/SignIn">SignIn</PhoneBarElements.SidebarRoute>
               }
            </PhoneBarElements.SideBtnWrap>
         </PhoneBarElements.SidebarWrapper>
      </PhoneBarElements.SidebarContainer>
   )
}
export default Sidebar

