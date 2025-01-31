import React from "react"; 
import { FaEdit } from "react-icons/fa";
import { IoMdArrowBack, IoMdSend } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiInboxArchiveFill } from "react-icons/ri";
export const ReactIcons={
    InboxIcon:({size=18, color='red',onClick,className})=><RiInboxArchiveFill size={size} color={color} onClick={onClick} 
    className={`${className}cursor-pointer`}/>,
    SendIcon:({size=18, color='red',onClick,className})=><IoMdSend size={size} color={color} onClick={onClick} className={`${className} cursor-pointer`}/>,
    EditIcon:({size=18, color='red',onClick,className})=><FaEdit size={size} color={color} onClick={onClick} className={`${className} cursor-pointer`}/>,
    EmailIcon:({size=18, color='red',onClick,className})=><MdEmail size={size} color={color} onClick={onClick} className={`${className} cursor-pointer`}/>,
    BackIcon:({size=18, color='red',onClick,className})=><IoMdArrowBack size={size} color={color} onClick={onClick} className={`${className} cursor-pointer`}/>,
}