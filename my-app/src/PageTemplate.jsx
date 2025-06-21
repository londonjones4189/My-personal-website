
//want to have header (keep in mind there is a sidebar so it doesnt go over this)
//undereath the header a lsit of cards

import Card from "./Card"; // Import the Card component

function PageTemplate(props){ 
    return(
        <div> 
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>

        </div>
    )
}
export default PageTemplate; 