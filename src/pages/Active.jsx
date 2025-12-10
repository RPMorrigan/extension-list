// Active

function Active(data) {
    [data.map((item) => {
        item.isActive ? (
            <Card />
        ) :
            null
    })]
}

export default Active;