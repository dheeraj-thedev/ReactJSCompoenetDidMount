import React , {useState, useEffect} from "react"


const FunctionalApp = (props)=>{

    // as states are always immutable so useState is giving you the state Variable 
    // as you can not modify the state directly it will give you set{STateName}
    const [myState,setMyState] = useState({
        userName:props.name,
        data: [],
    })
    const renderTableData=()=>{
        return myState.data.map((item,ctr)=>{
          const {login,
        id,
        node_id,
        avatar_url,
        gravatar_id,
        url,
        html_url}=item;
    
        return(
          <tr key={ctr}>
    
            <td>{id}</td>
            <td>{login}</td>
            <td>{node_id}</td>
            <td>{avatar_url}</td>
            <td>{gravatar_id}</td>
            <td>{url}</td>
            <td>{html_url}</td>
          </tr>
        )
        // "followers_url": "https://api.github.com/users/SIKANDERKHAN002/followers",
        // "following_url": "https://api.github.com/users/SIKANDERKHAN002/following{/other_user}",
        // "gists_url": "https://api.github.com/users/SIKANDERKHAN002/gists{/gist_id}",
        // "starred_url": "https://api.github.com/users/SIKANDERKHAN002/starred{/owner}{/repo}",
        // "subscriptions_url": "https://api.github.com/users/SIKANDERKHAN002/subscriptions",
        // "organizations_url": "https://api.github.com/users/SIKANDERKHAN002/orgs",
        // "repos_url": "https://api.github.com/users/SIKANDERKHAN002/repos",
        // "events_url": "https://api.github.com/users/SIKANDERKHAN002/events{/privacy}",
        // "received_events_url": "https://api.github.com/users/SIKANDERKHAN002/received_events",
        // "type": "User",
        // "site_admin": false
        })
      }
    
    useEffect(()=>{
        console.log("component did mount")
        if(myState.userName){
          fetch('https://api.github.com/users/'+myState?.userName+'/followers')
          .then(response=>response.json())
          .then(dataFromAPI=>{
          setMyState({data:dataFromAPI});
        })
          .catch(error=>console.log(error))
        } 
    },[])



    return(
        <div>
        <button > Refresh</button>
         <div> These {myState.userName} 's Followers</div>
         <table>
           <tbody>
             {renderTableData()}
           </tbody>
         </table>
 
        
     </div>
    );
}

export default FunctionalApp

