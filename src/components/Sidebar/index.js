import React from 'react'
import {  SidebarContainer, Icon,CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

function Sidebar({isOpen,toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper >
                <SidebarMenu>
                    <SidebarLink to='principal' onClick={toggle}>Principal</SidebarLink>
                    <SidebarLink to='servicios' onClick={toggle}>Servicios</SidebarLink>
                    <SidebarLink to='cursos' onClick={toggle}>Cursos</SidebarLink>
                    <SidebarLink to='equipo' onClick={toggle}>Equipo</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/blog">Blog</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
            
       
    )
}

export default Sidebar
