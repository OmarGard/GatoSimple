turno=1;
mat=[[0,0,0],[0,0,0],[0,0,0]]
ficha=0;
end=false;
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
  for(var i=0;i<3;i++)
  {
      if(mat[i][0]==mat[i][1] && mat[i][1]==mat[i][2] && mat[i][0]!=0){
        end=true;
        return mat[i][0];
      }
  }
  for(var i=0;i<3;i++)
  {
      if(mat[0][i]==mat[1][i] && mat[1][i]==mat[2][i] && mat[0][i]!=0){
        end=true;
        return mat[0][i];
      }
  }
  if(mat[0][0]==mat[1][1] && mat[1][1]==mat[2][2] && mat[0][0]!=0){
    end=true;
    return mat[0][0];
  }
  if(mat[2][0]==mat[1][1] && mat[1][1]==mat[0][2] && mat[2][0]!=0){
      end=true;
      return mat[2][0];
  }
  return -1;
}
function cambiaTurno(){
  if(turno==1)
  {
    turno=2;
    document.getElementById('player2').style.opacity="1";
    document.getElementById('player1').style.opacity="0";
  }
  else{
    turno=1;
    document.getElementById('player2').style.opacity="0";
    document.getElementById('player1').style.opacity="1";
  }
}
function marca(pos)
{
  if(!end)
  {
      var casilla=document.getElementById('cas'+ pos);
      var imagen=casilla.getElementsByTagName('img');
      var fila=Math.floor(pos/3);
      if(pos%3==0)
        fila--;
      var col=(pos%3)-1;
      if(col<0)
        col=col+3;
      if(mat[fila][col]!=0)
        return;
      if(turno==1)
      {
        if(ficha==1){
          imagen[0].src="cross.png";
          imagen[0].style.opacity="1";
        }else {
          imagen[0].src="circle.png";
          imagen[0].style.opacity="1";
        }
        mat[fila][col]=1;
      }
      else
      {
        if(ficha==1){
          imagen[0].src="circle.png";
          imagen[0].style.opacity="1";
        }else {
          imagen[0].src="cross.png";
          imagen[0].style.opacity="1";
        }
          mat[fila][col]=2;
      }
      cambiaTurno();
      var result=check();
      if(full())
      {
        alert('Gato');
        end=true;
      }
      if(result==1){
        alert('Ha ganado el jugador 1');
        end=true;
      }
      else {
        if(result==2){
          alert('Ha ganado el jugador 2');
          end=true;
        }
      }
    }
}
function asignar(valor){
  document.getElementById('asignacion').style.display="none";
  document.getElementById('cat').style.display="block";
  ficha=valor;
}
