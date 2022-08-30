import React, { useEffect, useState } from "react";
import "./UlubioneList.css";

const UlubioneStaticList = (props) => {
    const [stats, setStats] = useState(null);

    let content = null;

    const URL = `https://pokeapi.co/api/v2/pokemon/${props.name}`;

    useEffect(() => {
        fetch(URL)
            .then(response => {
                if(response.ok) {
                    return response
                }
                throw Error("Nie udało się")
            })
            .then(response => response.json())
            .then(data => {
                setStats(data.stats);
            })
            .catch(err => {
                console.log(err);
            })
    }, [URL])

    if (stats !== null) {
        content = ( //icons are from https://www.iconfinder.com/
            <div className={`statsU`}>
                <div className="statsUColumn">
                    <div className="imgdiv"><img src={require('../../../images/favourite/iconsStat/299063_heart_icon.png')} alt="iconStat" /></div><p>{stats[0].base_stat}</p>
                    <div className="imgdiv"><img src={require('../../../images/favourite/iconsStat/7000046_antique_weapons_swords_war_fight_icon.png')}alt="iconStat" /></div><p>{stats[1].base_stat}</p>
                    <div className="imgdiv"><img src={require('../../../images/favourite/iconsStat/299070_shield_icon.png')} alt="iconStat" /></div><p>{stats[2].base_stat}</p>
                </div>
                <div className="statsUColumn">
                    <div className="imgdiv"><img src={require('../../../images/favourite/iconsStat/3289577_fast_run_running_icon.png')} alt="iconStat" /></div><p>{stats[5].base_stat}</p>
                    <div className="imgdiv"><img src={require('../../../images/favourite/iconsStat/2995002_flash_light_power_storm_charge_icon.png')} alt="iconStat" /></div><p>{stats[3].base_stat}</p>
                    <div className="imgdiv"><img src={require('../../../images/favourite/iconsStat/34245_shield_icon.png')} alt="iconStat" /></div><p>{stats[4].base_stat}</p>
                </div>
            </div>
        )    
    }
    
    return (
        <div className="statsUDiv">
            {content}
        </div>
    )
}

export default UlubioneStaticList;
