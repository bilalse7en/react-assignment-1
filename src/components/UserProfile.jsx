function UserProfile({title, src, desig, bgColor}){
    return (
        <div className={`my-3 p-4 flex ${bgColor ? bgColor : "bg-gray-600 text-white hover:bg-gray-300 hover:text-black"} rounded-full items-center`}>
            <div className="me-2">
                <img className="rounded-full w-20 h-20" src={src} alt="" />
            </div>
            <div>
                <div className="text-2xl">{title}</div>
                <div className="text-2xl">{desig}</div>
            </div>
        </div>
        
    )
}
export default UserProfile;