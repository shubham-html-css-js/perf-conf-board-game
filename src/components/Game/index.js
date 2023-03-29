import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import * as Realm from "realm-web";
const app = new Realm.App({ id: `${process.env.REACT_APP_GAME_ID}` });
const Game = () => {
  const [data, setData] = useState({});
  const [isCoordinate, setIsCoordinate] = useState(false);
  const [isTrap, setIsTrap] = useState(false);
  const [isSuperTrap, setIsSuperTrap] = useState(false);
  const [isReveal, setIsReveal] = useState(false);
  const [coordinates, setCoordinates] = useState(new Set());
  const [isCoordinateVisible, setIsCoordinateVisible] = useState(true);
  const [isRevealVisible, setIsRevealVisible] = useState(false);
  const [user, setUser] = useState();
  let teamArray=["uperf","latency","input","output","team5","team6"]

  let points = [];

  useEffect(() => {
    const login = async () => {
      const user = await app.logIn(Realm.Credentials.anonymous());
      setUser(user);
      const mongodb = app.currentUser.mongoClient("mongodb-atlas");
      const collection = mongodb.db("test").collection("team_info");
      const collectionTurn=mongodb.db("test").collection("turn_info")
      for  await (const  change  of  collection.watch()) {
      if(change.updateDescription.updatedFields.coordinates!==undefined&&change.updateDescription.updatedFields.coordinates.length===0)
      {
        alert(`${change.fullDocument.teamName} knocked out`)        
      }
      if(change.updateDescription.updatedFields.revealed!==undefined||((Object.keys(change.updateDescription.updatedFields))[0]===`revealed.${change.fullDocument.revealed.length-1}`)||(Object.keys(change.updateDescription.updatedFields)).length>1)
      {
      if(((Object.keys(change.updateDescription.updatedFields).length===1)&&((Object.keys(change.updateDescription.updatedFields))[0]===`revealed.${change.fullDocument.revealed.length-1}`))||change.updateDescription?.updatedFields?.revealed?.length===1)
      {

        let revealLength=change.fullDocument.revealed.length
        if(document.getElementById(change.fullDocument.revealed[revealLength-1]).classList.contains('gold'))
        document.getElementById(change.fullDocument.revealed[revealLength-1]).classList.remove('gold')
        document.getElementById(change.fullDocument.revealed[revealLength-1]).classList.add(`${change.fullDocument.color}`)
        if(!document.getElementById(change.fullDocument.revealed[revealLength-1]).classList.contains('permanent'))
        document.getElementById(change.fullDocument.revealed[revealLength-1]).classList.add(`permanent`)
      }
      else if((Object.keys(change.updateDescription.updatedFields)).length>1||change.updateDescription.updatedFields.revealed.length>1)
      { 
        let revealLength=change.fullDocument.revealed.length

        if(document.getElementById(change.fullDocument.revealed[revealLength-1]).classList.contains('gold'))
        document.getElementById(change.fullDocument.revealed[revealLength-1]).classList.remove('gold')
        if(document.getElementById(change.fullDocument.revealed[revealLength-2]).classList.contains('gold'))
        document.getElementById(change.fullDocument.revealed[revealLength-2]).classList.remove('gold')
        document.getElementById(change.fullDocument.revealed[revealLength-1]).classList.add(`${change.fullDocument.color}`)
        document.getElementById(change.fullDocument.revealed[revealLength-2]).classList.add(`${change.fullDocument.color}`)
        if(!document.getElementById(change.fullDocument.revealed[revealLength-1]).classList.contains('permanent'))
        document.getElementById(change.fullDocument.revealed[revealLength-1]).classList.add(`permanent`)
        if(!document.getElementById(change.fullDocument.revealed[revealLength-2]).classList.contains('permanent'))
        document.getElementById(change.fullDocument.revealed[revealLength-2]).classList.add(`permanent`)
      }
    }
    else if(Object.keys(change.updateDescription.updatedFields)[0].includes('missed')===true)
    { let missedLength=change.fullDocument.missed.length
      if(!document.getElementById(change.fullDocument.missed[missedLength-1]).classList.contains('permanent'))
      document.getElementById(change.fullDocument.missed[missedLength-1]).classList.add('permanent')
    }
      if(change.updateDescription.updatedFields.readyToStart===6)
      {setIsRevealVisible(true)
        alert('Game Started!! Its uperf team turn')
      }
      if(change.updateDescription.updatedFields.counter%2===0)
      {
        const coll=await collectionTurn.findOne({})
        alert(`Its ${teamArray[coll.rem_teams[(coll.currIndex)]-1]} turn`)
      }
        }
    };
    login();
    axios
      .post(
        "http://localhost:4000/findTeam",
        {
          teamName: sessionStorage.getItem("teamName"),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {

        setData(res.data.res);
      })
      .catch((e) => console.log(e));
  }, []);
  let startPoint = data === {} ? -1 : data.allowedRange;
  let initialPoint = data === {} ? -1 : data.allowedRange;
  const colorDiv = (idx) => {
    const el =
      document.getElementById(idx).classList.contains("colored") &&
      !document.getElementById(idx).classList.contains("permanent");
    if (el) {
      if (isCoordinate === true) {
        if (document.getElementById(idx).classList.contains("grey") === false) {
          document.getElementById(idx).classList.add("grey");
          points.push(idx);
        } else {
          document.getElementById(idx).classList.remove("grey");
          const index = points.indexOf(idx);
          points.splice(index, 1);
        }
      } else if (isTrap === true) {
        if (
          document.getElementById(idx).classList.contains("violet") === false
        ) {
          document.getElementById(idx).classList.add("violet");
          points.push(idx);
        } else {
          document.getElementById(idx).classList.remove("violet");
          const index = points.indexOf(idx);
          points.splice(index, 1);
        }
      } else if (isSuperTrap === true) {
        if (
          document.getElementById(idx).classList.contains("brown") === false
        ) {
          document.getElementById(idx).classList.add("brown");
          points.push(idx);
        } else {
          document.getElementById(idx).classList.remove("brown");
          const index = points.indexOf(idx);
          points.splice(index, 1);
        }
      }
    } else if (
      !document.getElementById(idx).classList.contains("colored") &&
      !document.getElementById(idx).classList.contains("permanent")
    ) {
      if (isReveal === true) {
        if (document.getElementById(idx).classList.contains("gold") === false) {
          document.getElementById(idx).classList.add("gold");
          points.push(idx);
        } else {
          document.getElementById(idx).classList.remove("gold");
          const index = points.indexOf(idx);
          points.splice(index, 1);
        }
      }
    }
  };

  const uncolorDiv = (choiceName) => {
    if (choiceName === "coordinates" && isCoordinate === false) {
      if (isTrap === true) {
        let x = Array.from(document.getElementsByClassName("violet"));
        for (let i = 0; i < x.length; i++) {
          if (!document.getElementById(x[i].id).classList.contains("permanent"))
            x[i].classList.remove("violet");
        }
      } else if (isSuperTrap === true) {
        let x = Array.from(document.getElementsByClassName("brown"));
        for (let i = 0; i < x.length; i++)
          if (!document.getElementById(x[i].id).classList.contains("permanent"))
            x[i].classList.remove("brown");
      }
      points = [];
      setIsCoordinate(true);
      setIsSuperTrap(false);
      setIsTrap(false);
    } else if (choiceName === "trap" && isTrap === false) {
      if (isCoordinate === true) {
        let x = Array.from(document.getElementsByClassName("grey"));
        for (let i = 0; i < x.length; i++)
          if (
            document.getElementById(x[i].id).classList.contains("permanent") ===
            false
          ) {
            x[i].classList.remove("grey");
          }
      } else if (isSuperTrap === true) {
        let x = Array.from(document.getElementsByClassName("brown"));
        for (let i = 0; i < x.length; i++)
          if (!document.getElementById(x[i].id).classList.contains("permanent"))
            x[i].classList.remove("brown");
      } else if (isReveal === true) {
        let x = Array.from(document.getElementsByClassName("gold"));
        for (let i = 0; i < x.length; i++)
          if (!document.getElementById(x[i].id).classList.contains("permanent"))
            x[i].classList.remove("gold");
      }
      points = [];
      setIsCoordinate(false);
      setIsSuperTrap(false);
      setIsTrap(true);
      setIsReveal(false)
    } else if (choiceName === "super trap" && isSuperTrap === false) {
      if (isCoordinate === true) {
        let x = Array.from(document.getElementsByClassName("grey"));
        for (let i = 0; i < x.length; i++)
          if (!document.getElementById(x[i].id).classList.contains("permanent"))
            x[i].classList.remove("grey");
      } else if (isTrap === true) {
        let x = Array.from(document.getElementsByClassName("violet"));
        for (let i = 0; i < x.length; i++)
          if (!document.getElementById(x[i].id).classList.contains("permanent"))
            x[i].classList.remove("violet");
      } else if (isReveal === true) {
        let x = Array.from(document.getElementsByClassName("gold"));
        for (let i = 0; i < x.length; i++)
          if (!document.getElementById(x[i].id).classList.contains("permanent"))
            x[i].classList.remove("gold");
      }
      points = [];
      setIsCoordinate(false);
      setIsSuperTrap(true);
      setIsTrap(false);
      setIsReveal(false)
    } else if (choiceName === "reveal" && isReveal === false) {
      if (isTrap === true) {
        let x = Array.from(document.getElementsByClassName("violet"));
        for (let i = 0; i < x.length; i++)
          if (!document.getElementById(x[i].id).classList.contains("permanent"))
            x[i].classList.remove("violet");
      } else if (isSuperTrap === true) {
        let x = Array.from(document.getElementsByClassName("brown"));
        for (let i = 0; i < x.length; i++)
          if (!document.getElementById(x[i].id).classList.contains("permanent"))
            x[i].classList.remove("brown");
      }
      points = [];
      setIsReveal(true);
      setIsTrap(false);
      setIsSuperTrap(false);
    }
  };
  const submitCoordinates = () => {
    axios
      .post(
        "http://localhost:4000/submit",
        {
          selectedCoordinates: points,
          isCoordinate,
          isTrap,
          isSuperTrap,
          isReveal,
          teamName: sessionStorage.getItem("teamName"),
          teamTurn: isRevealVisible?'latency':""
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {

        if (res.data.status === 404) {
          alert(`${res.data.msg}`);
          if(res.data.msg==='Empty try')
          {
            if(isCoordinate===true)
          setIsCoordinateVisible(false);
          setIsCoordinate(false);
          setIsTrap(false);
          setIsSuperTrap(false);
          setIsReveal(false);
          }
        }
        else if (res.data.status === 200) {
          for (let i = 0; i < points.length; i++) {
            document.getElementById(points[i]).classList.add("permanent");
          }
          if(isCoordinate===true)
          setIsCoordinateVisible(false);
          setIsCoordinate(false);
          setIsTrap(false);
          setIsSuperTrap(false);
          setIsReveal(false);
        }
        else
        console.log(res)
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="main-container">
      <div className="game-container">
        {startPoint > -1
          ? Array.from(Array(1820).keys()).map((val, i) => {

              if (startPoint + 17 < i) {
                startPoint = startPoint + 52;

              }
              if (initialPoint + 52 * 16 + 18 === i) startPoint = 1821;

              return (
                <div
                  id={i}
                  className={`block ${
                    i >= startPoint && i < startPoint + 17 ? "colored" : ""
                  }`}
                  onClick={() => colorDiv(i)}
                ></div>
              );
            })
          : ""}
      </div>
      <div className="btn-container">
        <div>
          <button
            onClick={() => uncolorDiv("coordinates")}
            style={{ display: `${isCoordinateVisible ? "" : "none"}` }}
          >
            Select Coordinates
          </button>
        </div>
        <div>
          <button onClick={() => uncolorDiv("trap")}>Trap</button>
        </div>
        <div>
          <button onClick={() => uncolorDiv("super trap")}>Super Trap</button>
        </div>
        <div>
          <button
            onClick={() => uncolorDiv("reveal")}
            style={{ display: `${isRevealVisible ? "" : "none"}` }}
          >
            Reveal
          </button>
        </div>
        <div>
          <button onClick={submitCoordinates}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Game;
