
//want to have header (keep in mind there is a sidebar so it doesnt go over this)
//undereath the header a lsit of cards
function PageTemplate(header, cards){ 
    return(
        <div> 
            <header className="text-3xl font-bold mb-4">{header}</header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>

        </div>
    )
}
export default PageTemplate; 