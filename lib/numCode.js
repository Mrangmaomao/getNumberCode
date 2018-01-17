class Fn {
    constructor( obj ){
        this.param = {};
        Object.assign( this.param,obj);
        this.param.num = this.param.num || 4;
        this.init();
    }
    *ye( arr ){
        let _this = this;
        for ( let i=0; i< arr.length; i++ ){
            yield arr[i](_this);
        }
    }
    init (  ) {
        let _this = this;
        this.el = document.querySelector( this.param.el );
        this.el.onclick = function() {
            _this.init();
        }
        this.width = this.el.width;
        this.height = this.el.height;
        this.font = this.getNumber( this.param.num );
        this.ctx = this.el.getContext('2d');
        this.clearnFont();
        this.ctxFont();
    }
    clearnFont() { // 清画布
        let _this = this;
        _this.ctx.fillRect(0,0,_this.width,_this.height );
    }
    ctxFont() { 
        let _this = this;
        let ctx = _this.ctx;
        let bgGradient = ctx.createLinearGradient(0,0,_this.width,0);
        bgGradient.addColorStop("0.5","#cfd9df");
        bgGradient.addColorStop("1.0","#e2ebf0");
        _this.ctx.fillStyle = bgGradient;
        ctx.fillRect(0,0,_this.width,_this.height );
        let gradient=ctx.createLinearGradient(0,0,_this.width,0);
        gradient.addColorStop("0.5","#4facfe");
        gradient.addColorStop("1.0","#00f2fe");
        ctx.fillStyle=gradient;
        ctx.font="30px Verdana";
        let textWidth = ctx.measureText( _this.font ).width;
        let x = parseInt( ( _this.width - textWidth ) /2 );
        let y = 30;
        ctx.fillText( _this.font,x, y )
    }
    getNumber( num ){ 
        let _this = this;
        let ch = '';
        let arr = [];
        for ( let i=0;i<num; i++ ) {
            arr.push( _this.randomNumber);
        }
        for ( let x of _this.ye(arr) ) {
            ch +=  x ;
        }
        return ch;
    }
    randomNumber(){ 
        return Math.floor(Math.random()*10) ; 
    }
    getFonts() {
        return this.font;
    }
}
function getCode( obj ) {
    let fn =  new Fn( obj );
    return fn;
}
export default getCode;