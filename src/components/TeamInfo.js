import React from 'react';
// import teams from'..teams.json';


class TeamInfo extends React.Component{
    render(){
        const{shortName,crestUrl,address,email,phone, founded}= this.props.team
        return(
            <div class="container h-25 w-25 shadow p-3 mb-5 bg-white rounded bg-secondary">
                <img src={crestUrl} height= "100px" width="200px"/>
                <h2>{shortName}</h2>
                <p  class="small">{address}</p>
                <p class="small">{email}</p>
                <p class="small">{phone}</p>
                <h4>{founded}</h4>

            </div>
        )
    }
}

export default TeamInfo
