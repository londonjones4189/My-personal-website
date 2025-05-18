
//Creates sidebar component with links to other pages
function SideBar(){
    return(
        <div className="sidebar">
            <ul>
                <li><a href="#education">Developer</a></li>
                <li><a href="#experience">Writer</a></li>
                <li><a href="#skills">Designer</a></li>
                <li><a href="#projects">Contact me</a></li>
            </ul>
        </div>
    )

}
export default SideBar;