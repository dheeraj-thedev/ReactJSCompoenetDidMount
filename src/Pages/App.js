
import React, {Component} from 'react';

export class App extends Component{

  constructor(props){
    super(props);

    this.that= this;
    this.state= {
      userName:props.name,
      data: [],
    };
  }

    componentDidMount(){
      if(this.state.userName){
        fetch('https://api.github.com/users/'+this.state?.userName+'/followers')
        .then(response=>response.json())
        .then(dataFromAPI=>{
        this.setState({data:dataFromAPI});
      })
        .catch(error=>console.log(error))
      }
      
    }


  renderTableData(){
    return this.state.data.map((item,ctr)=>{
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

  render (){
    return  <div>
        <div> These {this.state.userName} 's Followers</div>
        <table>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
    </div>;
  }
};


// class CustomRowCompoenet extends Compoenet{

//   constructor(props){
//     super(props);
//   }
//   render(){
//     return <tr>props</tr>
//   }
// }