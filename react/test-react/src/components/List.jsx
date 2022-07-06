import Card from "./Card";

const List = () => {
    return ( 
        <div className="list-container">
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
            <Card 
                cardTitle = "visharad" 
                content = "this is some content that is not that important for use he he"
            />
        </div>
    );
}
 
export default List;
