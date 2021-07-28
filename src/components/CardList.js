import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div className="card mh5">
            {
                robots.map((robot, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email} />
                    );
                })
            }
        </div>
    );
}

export default CardList;