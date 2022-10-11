import propTypes from 'prop-types'


const Profile = (props) => {

    const ProfileStyle = {
    }
    const ProfileText = {
        paddingLeft: "15px",
        paddingTop: "15px",
        fontSize: "19px"
    }
    const BioStyle = {
        paddingLeft: "16px",
        fontSize: "18px",
        marginTop: "-13px"
    }
    const profilelogo = {
        width: "90px",
        height: "90px",
        marginTop: "-11%",
        paddingLeft: "84%"
    }

    return (
        <>
            <div style={ ProfileStyle }> 
                <h2 style={ ProfileText }>Profile FullName: {props.name} </h2>
                <p style={ BioStyle }>Bio: {props.bio}</p>
                <img style={ profilelogo } src={props.img} alt="" />
                <button onClick={()=>{
                    alert(`logged on as : ${props.name}`)
                }}>Whoami</button>
            </div>
        </>
    )
}

Profile.defaultProps = {
    name: "Failed To Load Content !",
    bio: "Failed To Load Content !",
    img: "Failed To Load Content !",
    
}

Profile.propTypes = {
    name : propTypes.string,
    bio : propTypes.string
}

export default Profile
