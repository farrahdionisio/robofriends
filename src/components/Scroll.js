const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll', border: '3px solid white', height: '900px' }}>
            {props.children}
        </div>
    )
}

export default Scroll;