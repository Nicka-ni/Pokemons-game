
class Selectors{
  constructor(name){
    this.elHP= document.getElementById(`health-${name}`),
    this.elProgressbar= document.getElementById(`progressbar-${name}`)
  }
}

class Pokemon extends Selectors{
   constructor({name, hp, type, selectors}){
     super(selectors)
    this.name=name
    this.hp={
      current:hp,
      total:hp,
    }
    this.type= type

    this.renderHP()
  }

changeHP=(count, cb)=>{
    this.hp.current -= count;
    if(this.hp.current<0){
        this.hp.current = 0;
        alert('Бедный ' + this.name + ' проиграл бой');
        $btn.disabled = true;
    } 
    this.renderHP()
    cb &&cb(count)
}

  renderHP=()=>{
    this.renderHPLife();
    this.renderProgressbarHP();
  }
  renderHPLife=()=>{
    const{elHP, hp:{current, total}}=this
    elHP.innerText=current+ '/'+ total
    //this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
}
renderProgressbarHP=()=>{
  const{elProgressbar, hp:{current, total}}=this
  elProgressbar.style.width = current + '%';
}
}

export default Pokemon 