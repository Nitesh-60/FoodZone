import { useEffect, useState } from "react";
import Shimer from "./Shimer";
import { Link } from "react-router-dom";

const Github = () =>{

    const [profile,setProfile] = useState("");
    const [repository,setRepository] = useState("");

    useEffect(()=>{
        getGithubData();
    },[]);

    const getGithubData = async ()=>{
        const data = await fetch("https://api.github.com/users/Nitesh-60");
        const data2 = await fetch("https://api.github.com/users/Nitesh-60/repos");
        const json = await data.json();
        const json2 = await data2.json();
        setProfile(json);
        setRepository(json2);
    }
    const {avatar_url, id, public_repos,name,followers,following,login} = profile;

    return(
        <>
            <div key={id}>
                <h1 className="github-header">Github Profile</h1>
                <img src={avatar_url} />
                <h2 className="profile-name">{name}</h2>
                <p className="username">@{login}</p>
                <p className="github-follower">followers: {followers}</p>
                <p className="github-following">following: {following}</p>
                <h3 className="repository"> Repository : {public_repos}</h3>
            </div>
            <div>
                <h2 className="repo-header">Repositories</h2>
                {repository.length === 0 ? (<Shimer /> ):
                    <div className="repo-main-container">
                        {repository.map((repo) => (
                        <Link key = {repo?.id} to={repo.clone_url}><div className="repo-box">
                            <p className="repo-name">{repo?.name}</p>
                            <p className="repo-full-name">{repo?.full_name}</p>
                            <p className="repo-status">{repo?.visibility}</p>
                        </div></Link>
                    ))}
                    </div>
                }
                
            </div>
        </>
    )
}

export default Github;