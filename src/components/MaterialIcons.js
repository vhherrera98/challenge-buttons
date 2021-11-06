const MaterialIcons = ({ icon }) => {
    return (
        icon
            ?
            <span className='material-icons'>{icon}</span>
            :
            ''
    )
}

export default MaterialIcons