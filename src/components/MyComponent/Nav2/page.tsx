'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


const Nav = () => {
  return (
    <div className="flex justify-between padding">
      <div> TACCOM </div>
      <div> 
        <ul className="flex flex-grow justify-end gap-6">
          <li>HOME</li> 
          <li>Dự án </li>  
          <li>Dịch vụ</li>  
          <li>Liên hệ</li>  
          <li>Tuyển dụng</li>   
          <li>Blogs</li>   
        </ul>   
      </div>
    </div>
  )
}

export default Nav