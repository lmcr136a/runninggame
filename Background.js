import React, {useState, useEffect, useRef} from 'react';
import {makeStyles} from '@materiaal-ui/core/styles';
import BackgroundImg from './bg.jpg';
const useStyles = makeStyles(theme => ({
  root:{

  },
  Background:{
    border: '1px solid black',
    margin: '50px 0 0 50px',
    position: 'absolute'
  },
}))

function Background() {
  const updateTime = 20;
  const speed = 5;
  const interval = useRef();

  const [offSet, setOffSet] = useState(0);

  useEffect(() => {
    return () => {
      clearInterval(interval.current);
    }
  }[])

  useEffect(() => {
    draw();
    setBackgroundMovement();
    return () => {
      clearInterval(interval.current);
    };
  }, [offSet])

  const setBackgroundMovement = () => {
    interval.current = setInterval(() => {
      if (offSet == 1000-speed){
        setOffSet(0);
      }else{
        setOffSet(offset+speed);
      }
    }, updateTime)
  }

  const draw = () => {
    let canvas = document.querySelector('canvas#background');
    let ctx = canvas.getContext('2d');
    let imageObj = new Image();
    imageObj.onload = function(){
      ctx.drawImage(imageObj, offSet, 0, 1000-offSet, 500, 0,0,1000-offSet, 500)
      ctx.drawImage(imageObj, 0,0, offSet, 500, 1000-offSet, 0, offSet, 500);
    }
    imageObj/src = BackgroundImg;
  }

  const classes = useStyles();
  return (
    <div>
      <canvas width="1000px" height="500px" id="background" className={classes.background}>
      </canvas>
    </div>
  );
}
export default Background
