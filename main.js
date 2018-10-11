turno=1;
ficha=0;
mat=[[0,0,0],[0,0,0],[0,0,0]]
end=false;
lienzo=document.getElementById('lienzo');
contexto=lienzo.getContext('2d');
window.onload=function(){
  init();
}
function full()
{
  for (var i = 0; i < 3; i++)
  {
      for (var j = 0; j <3; j++)
      {
          if(mat[i][j]==0)
            return false;
      }
  }
  end=true;
  return true;
}
function check()
{
  //var xini=0,yini=0,xend=0,yend=0;
  for(var i=0;i<3;i++)
  {
      if(mat[i][0]==mat[i][1] && mat[i][1]==mat[i][2] && mat[i][0]!=0)
      {
        drawWinningLine(20,(i*200)+100,580,(i*200)+100);
        end=true;
        return mat[i][0];
      }
  }
  for(var i=0;i<3;i++)
  {
      if(mat[0][i]==mat[1][i] && mat[1][i]==mat[2][i] && mat[0][i]!=0)
      {
        drawWinningLine((i*200)+100,20,(i*200)+100,580);
        end=true;
        return mat[0][i];
      }
  }
  if(mat[0][0]==mat[1][1] && mat[1][1]==mat[2][2] && mat[0][0]!=0){
    drawWinningLine(20,20,580,580);
    end=true;
    return mat[0][0];
  }
  if(mat[2][0]==mat[1][1] && mat[1][1]==mat[0][2] && mat[2][0]!=0){
      drawWinningLine(20,580,580,20);
      end=true;
      return mat[2][0];
    }
  return -1;
}
function makeSimpleLine(x1,y1,x2,y2)
{
  contexto.beginPath();
  contexto.lineWidth=8;
  contexto.strokeStyle='#000000';
  contexto.moveTo(x1,y1);
  contexto.lineTo(x2,y2);
  ///contexto.lineCap='round';
  contexto.stroke();
}
function drawWinningLine(x1,y1,x2,y2){
  contexto.beginPath();
  contexto.lineWidth=20;
  contexto.strokeStyle='rgb(64, 238, 255)';
  contexto.moveTo(x1,y1);
  contexto.lineTo(x2,y2);
  contexto.lineCap='round';
  contexto.stroke();
}
function cambiaTurno(){
  var p1=document.getElementById('player1');
  var p2=document.getElementById('player2');
  if(turno==1){
    p1.style.opacity=0;
    p2.style.opacity=1;
    turno=2;
  }
  else{
    turno=1;
    p1.style.opacity=1;
    p2.style.opacity=0;
  }
}
function getMousePos(canvas,evt){
  var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
}
function drawX(x1,y1,x2,y2){
  contexto.beginPath();
  contexto.lineWidth=8;
  contexto.strokeStyle='#1b46b5';
  contexto.moveTo(x1,y1);
  contexto.lineTo(x2,y2);
  contexto.lineCap='round';
  contexto.stroke();

  contexto.beginPath();
  contexto.lineWidth=10;
  contexto.strokeStyle='#1b46b5';
  contexto.moveTo(x1,y2);
  contexto.lineTo(x2,y1);
  contexto.lineCap='round';
  contexto.stroke();
}
function drawCircle(x,y,r){
  contexto.beginPath();
  contexto.arc(x,y,r,0,(Math.PI/180)*360,true);
  contexto.strokeStyle = "rgb(196, 61, 31)";
  contexto.lineWidth = 10;
  contexto.stroke();
}
function drawCat(){
  contexto.beginPath();
  contexto.arc(300,300,200,(Math.PI/180)*270,(Math.PI/180)*360,true);
  contexto.strokeStyle = "#5200ff";
  contexto.lineWidth = 20;
  contexto.stroke();
  contexto.beginPath();
  contexto.moveTo(500,300);
  contexto.lineTo(300,300);
  contexto.lineCap='round';
  contexto.strokeStyle = "#5200ff";
  contexto.lineWidth = 20;
  contexto.stroke();
}
function marca(x,y)
{
  if(end)
    return;
  var xini=0,yini=0,xend=0,yend=0;
  var cuadro=0;
  var ocupado=0;
  if(x>=0 && x<200)
  {
    if(y>=0 && y<200)
      {
          xini=0;
          yini=0;
          xend=200;
          yend=200;
          cuadro=1;
      }
      else
      {
          if(y>=200 && y<400)
          {
            xini=0;
            yini=200;
            xend=200;
            yend=400;
            cuadro=4;
          }
          else
          {
            xini=0;
            yini=400;
            xend=200;
            yend=600;
            cuadro=7;
          }
      }
  }
  else
  {
    if(x>=200 && x<400)
    {
        if(y>=0 && y<200)
          {
              xini=200;
              yini=0;
              xend=400;
              yend=200;
              cuadro=2;
          }
          else
          {
              if(y>=200 && y<400)
              {
                xini=200;
                yini=200;
                xend=400;
                yend=400;
                cuadro=5;
              }
              else
              {
                xini=200;
                yini=400;
                xend=400;
                yend=600;
                cuadro=8;
              }
          }
    }
    else
    {
        if(y>=0 && y<200)
          {
              xini=400;
              yini=0;
              xend=600;
              yend=200;
              cuadro=3;
          }
          else
          {
              if(y>=200 && y<400)
              {
                xini=400;
                yini=200;
                xend=600;
                yend=400;
                cuadro=6;
              }
              else
              {
                xini=400;
                yini=400;
                xend=600;
                yend=600;
                cuadro=9;
              }
          }
      }
  }
  switch (cuadro) {
    case 1:
      if(mat[0][0]!=0)
        ocupado=1;
      else
        mat[0][0]=turno;
      //console.log('0 0' + mat[0][0]);
      break;
    case 2:
      if(mat[0][1]!=0)
        ocupado=1;
      else
        mat[0][1]=turno;
      //console.log('0 1' + mat[0][1]);
      break;
    case 3:
      if(mat[0][2]!=0)
        ocupado=1;
      else
        mat[0][2]=turno;
      //console.log('0 2' + mat[0][2]);
      break;
    case 4:
      if(mat[1][0]!=0)
        ocupado=1;
      else
        mat[1][0]=turno;
      //console.log('1 0' + mat[1][0]);
      break;
    case 5:
      if(mat[1][1]!=0)
        ocupado=1;
      else
        mat[1][1]=turno;
      //console.log('1 1' + mat[1][1]);
      break;
    case 6:
      if(mat[1][2]!=0)
        ocupado=1;
      else
        mat[1][2]=turno;
      //console.log('1 2' + mat[1][2]);
      break;
    case 7:
      if(mat[2][0]!=0)
        ocupado=1;
      else
        mat[2][0]=turno;
      //console.log('2 0' + mat[2][0]);
      break;
    case 8:
      if(mat[2][1]!=0)
        ocupado=1;
      else
        mat[2][1]=turno;
      //console.log('2 1' + mat[2][1]);
      break;
    case 9:
    if(mat[2][2]!=0)
      ocupado=1;
    else
      mat[2][2]=turno;
      //console.log('2 2' + mat[2][2]);
      break;
  }
  if(ocupado)
    return;
  if(turno==1)
  {
    if(ficha==1)
      drawX(xini+20,yini+20,xend-20,yend-20);
    else
      drawCircle((xini+xend)/2,(yini+yend)/2,60);
  }
  else{
    if(ficha==1)
      drawCircle((xini+xend)/2,(yini+yend)/2,60);
    else
      drawX(xini+20,yini+20,xend-20,yend-20);
  }
  var result=check();
  if(end)
    return;
  if(full())
    drawCat();
  else
    cambiaTurno();
}
function init()
{
    makeSimpleLine(200,0,200,600);
    makeSimpleLine(400,0,400,600);
    makeSimpleLine(0,200,600,200);
    makeSimpleLine(0,400,600,400);
    lienzo.addEventListener('click',function(evt){
      var coordenadas=getMousePos(lienzo,evt);
      marca(coordenadas.x,coordenadas.y);
    },false);
}
function asignar(valor){
  document.getElementById('asignacion').style.display="none";
  document.getElementById('lienzo').style.display="block";
  ficha=valor;
}
