import React, {useState, useEffect, useRef} from 'react';
import Character from './component/Character';
import Background from './component/Background';
import Enemy from './component/Enemy';
import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(() => ({
  root:{

  },
  button: {
    border: '1px solid black',
  	margin: '50px 0 0 50px',
  	position: 'absolute',
  	width: '1000px',
  	height: '500px',
  	fontWeight: 'bold',
  	fontSize: '50px',
  	textTransform: 'initial'
  },
  timer: {
  	position: 'absolute',
  	display: 'flex',
  	left: '50px',
  	top: '570px',
  	fontSize: "20px"
  }
}))

const Main = () => {
  const updateTime = 20;
  const interval = useRef();

  const [isStart, setIsStart] = useState(false);
  const [time, sestTime] = useState(0);
  const [result, setResult] = useState(0);
  const [isMove, setIsMove] = useState(false);

  useEffect(() => {
    if (isStart){
      interval.current = setInterval(() => {
        if (Math.floor(time)%2 ==1){
          setIsMove(true);
        }else{
          setIsMove(false);
        }
        setTime(time + updateTime * 0.001);
        checkConflict();
      }, updateTime)
    }
    return () => {
      clearIntercal(interval.current);
    };
  }, [time, inStart]);
  const classes = useStules();
  const handleClickStartBytton = () =>{
    setIsStart(true);
  }
  const checkConflict = () =>{
    let enemy = document.querySelector('img#enemy');
    let character = document.querySelector('img#character');
    if (enemy !== null && character !== null){
      let dis = Math.pow(enemy.x - character.x, 2)
      + Math.pow(enemy.y - character.y, 2)
      if (dis < 3000){
        alert("Game Over!");
        if (result<time){
          setResult(time);
        }
        setIsStart(false);
        setTime(0);
      }
    }
  }
  return (
    <div>{
      isStart ?
      <div>
        <Background />
        <Character />
        <Enemy isMove={isMove} />
        <div className={classes.timer}>
          <div> React Web Game </div>
          <div style={{ margin: "0 0 0 50px"}}> Time: </div>
          <div style={{ margin: "0 0 0 10px"}}>
            { Math.floor(time) }s
          </div>
        </div>
      </div>
      :
      <div>
        <Button onClick={handleClickStartBytton} className{classes.button}>
        Your Highest Record is {Math.floor(result)} s
        <br />
        Click to Start Game
        </Button>
      </div>
    }
  </div>
  )
}

export default Main;
