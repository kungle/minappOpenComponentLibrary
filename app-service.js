	var __wxAppData = {}; 	var __wxRoute; 	var __wxRouteBegin; 	var __wxAppCode__ = {};	var global = {};	var __WXML_GLOBAL__={};	var __wxAppCurrentFile__; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};
	/*v0.6vv_20180522_fbi*/global.__wcc_version__='v0.6vv_20180522_fbi';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};
if(typeof __WXML_GLOBAL__ === 'undefined') __WXML_GLOBAL__={};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if("undefined"!==typeof debugInfo)
e.stack += "\n "+" "+" "+" at "+debugInfo[g.opindex][0]+":"+debugInfo[g.opindex][1]+":"+debugInfo[g.opindex][2];
throw e;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
return rev;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
if ( !__WXML_GLOBAL__.ops_init.$gwx){
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'cellList']],[[2,'!='],[[6],[[7],[3,'cellList']],[3,'length']],[1,0]]]);Z([3,'cell']);Z([[7],[3,'cellList']]);Z([3,'title']);Z([3,'cellTap']);Z([3,'cell-wrapper']);Z([[7],[3,'cell']]);Z([[2,'!='],[[7],[3,'index']],[[2,'-'],[[6],[[7],[3,'cellList']],[3,'length']],[1,1]]]);Z([[7],[3,'show']]);Z([a,[3,'geek-noticebar '],[[2,'?:'],[[7],[3,'hasRightIcon']],[1,'geek-noticebar--within-icon'],[1,'']]]);Z([a,[3,'color: '],[[7],[3,'color']],[3,';background-color: '],[[7],[3,'backgroundColor']]]);Z([[7],[3,'leftIcon']]);Z([[7],[3,'mode']]);Z([[2,'==='],[[7],[3,'mode']],[1,'closeable']]);Z([[2,'==='],[[7],[3,'mode']],[1,'link']]);Z([[7],[3,'realShow']]);Z(z[15]);Z(z[15]);Z([3,'group']);Z([[7],[3,'groupList']]);Z([3,'share']);Z([[6],[[7],[3,'group']],[3,'pageTitle']]);Z([3,'navigateListener']);Z([[6],[[7],[3,'group']],[3,'cellList']]);Z(z[18]);Z(z[19]);Z(z[20]);Z(z[21]);Z(z[22]);Z(z[23]);Z([3,'style-container']);Z([[6],[[7],[3,'shareOne']],[3,'avatar']]);Z([[6],[[7],[3,'shareOne']],[3,'nickname']]);Z([[6],[[7],[3,'shareOne']],[3,'showShareModel']]);Z([[6],[[7],[3,'shareTwo']],[3,'adImageUrl']]);Z([[6],[[7],[3,'shareTwo']],[3,'adName']]);Z([[6],[[7],[3,'shareTwo']],[3,'adTime']]);Z([[6],[[7],[3,'shareTwo']],[3,'avatar']]);Z([[6],[[7],[3,'shareTwo']],[3,'incomeMoney']]);Z([[6],[[7],[3,'shareTwo']],[3,'joinAvatarList']]);Z([[6],[[7],[3,'shareTwo']],[3,'joinNumber']]);Z([[6],[[7],[3,'shareTwo']],[3,'nickname']]);Z([[6],[[7],[3,'shareTwo']],[3,'showShareModel']]);Z([[6],[[7],[3,'shareThree']],[3,'avatar']]);Z([[6],[[7],[3,'shareThree']],[3,'awardMoney']]);Z([[6],[[7],[3,'shareThree']],[3,'nickname']]);Z([[6],[[7],[3,'shareThree']],[3,'showShareModel']]);Z(z[18]);Z(z[19]);Z(z[20]);Z(z[21]);Z(z[22]);Z(z[23]);Z([3,'文字横向跑马灯']);Z([[6],[[7],[3,'bar']],[3,'backgroundColor']]);Z([[6],[[7],[3,'bar']],[3,'textColor']]);Z([[6],[[7],[3,'bar']],[3,'scrollable']]);Z([[6],[[7],[3,'bar']],[3,'text']]);Z(z[15]);Z([[7],[3,'panelStr']]);Z([3,'syncChange']);Z([[6],[[7],[3,'sync']],[3,'checked']]);})(z);__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
}
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);throw e;}
}}}()
var x=['./components/btn/index.wxml','./components/cell/index.wxml','./components/marquee/index.wxml','./components/page-title/index.wxml','./components/panel/index.wxml','./components/share-award/index.wxml','./components/share-detail/index.wxml','./components/share-moment/index.wxml','./components/switch/index.wxml','./pages/animation/index.wxml','./pages/canvas/index.wxml','./pages/component-share/index.wxml','./pages/index/index.wxml','./pages/marquee/index.wxml','./pages/moment/index.wxml','./pages/rotateY/index.wxml','./pages/switch/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var xC=_v()
_(r,xC)
if(_o(0,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_m('view',['bindtap',4,'class',1,'data-path',2],[],hG,cF,gg)
var lK=_v()
_(oJ,lK)
if(_o(7,hG,cF,gg)){lK.wxVkey=1
}
lK.wxXCkey=1
_(oH,oJ)
return oH
}
oD.wxXCkey=2
_2(2,fE,e,s,gg,oD,'cell','index','title')
}
xC.wxXCkey=1
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var tM=_v()
_(r,tM)
if(_o(8,e,s,gg)){tM.wxVkey=1
var eN=_m('view',['class',9,'style',1],[],e,s,gg)
var bO=_v()
_(eN,bO)
if(_o(11,e,s,gg)){bO.wxVkey=1
}
var oP=_v()
_(eN,oP)
if(_o(12,e,s,gg)){oP.wxVkey=1
var xQ=_v()
_(oP,xQ)
if(_o(13,e,s,gg)){xQ.wxVkey=1
}
var oR=_v()
_(oP,oR)
if(_o(14,e,s,gg)){oR.wxVkey=1
}
xQ.wxXCkey=1
oR.wxXCkey=1
}
bO.wxXCkey=1
oP.wxXCkey=1
_(tM,eN)
}
tM.wxXCkey=1
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var hU=_n('slot')
_(r,hU)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var cW=_v()
_(r,cW)
if(_o(15,e,s,gg)){cW.wxVkey=1
}
cW.wxXCkey=1
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var lY=_v()
_(r,lY)
if(_o(16,e,s,gg)){lY.wxVkey=1
}
lY.wxXCkey=1
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var t1=_v()
_(r,t1)
if(_o(17,e,s,gg)){t1.wxVkey=1
}
t1.wxXCkey=1
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var o4=_v()
_(r,o4)
var x5=function(f7,o6,c8,gg){
var o0=_n('view')
var cAB=_n('page-title')
_r(cAB,'pageTitle',21,f7,o6,gg)
_(o0,cAB)
var oBB=_m('cell',['bind:navigate',22,'cellList',1],[],f7,o6,gg)
_(o0,oBB)
_(c8,o0)
return c8
}
o4.wxXCkey=4
_2(19,x5,e,s,gg,o4,'group','index','share')
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var aDB=_v()
_(r,aDB)
var tEB=function(bGB,eFB,oHB,gg){
var oJB=_n('view')
var fKB=_n('page-title')
_r(fKB,'pageTitle',27,bGB,eFB,gg)
_(oJB,fKB)
var cLB=_m('cell',['bind:navigate',28,'cellList',1],[],bGB,eFB,gg)
_(oJB,cLB)
_(oHB,oJB)
return oHB
}
aDB.wxXCkey=4
_2(25,tEB,e,s,gg,aDB,'group','index','share')
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var oNB=_n('view')
_r(oNB,'class',30,e,s,gg)
var cOB=_m('share-one',['avatar',31,'nickname',1,'showShareModel',2],[],e,s,gg)
_(oNB,cOB)
var oPB=_m('share-two',['adImageUrl',34,'adName',1,'adTime',2,'avatar',3,'incomeMoney',4,'joinAvatarList',5,'joinNumber',6,'nickname',7,'showShareModel',8],[],e,s,gg)
_(oNB,oPB)
var lQB=_m('share-three',['avatar',43,'awardMoney',1,'nickname',2,'showShareModel',3],[],e,s,gg)
_(oNB,lQB)
_(r,oNB)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var tSB=_v()
_(r,tSB)
var eTB=function(oVB,bUB,xWB,gg){
var fYB=_n('view')
var cZB=_n('page-title')
_r(cZB,'pageTitle',50,oVB,bUB,gg)
_(fYB,cZB)
var h1B=_m('cell',['bind:navigate',51,'cellList',1],[],oVB,bUB,gg)
_(fYB,h1B)
_(xWB,fYB)
return xWB
}
tSB.wxXCkey=4
_2(48,eTB,e,s,gg,tSB,'group','index','share')
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var c3B=_n('page-title')
_r(c3B,'pageTitle',53,e,s,gg)
_(r,c3B)
var o4B=_m('marquee',['backgroundColor',54,'color',1,'scrollable',2,'text',3],[],e,s,gg)
_(r,o4B)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var a6B=_v()
_(r,a6B)
if(_o(58,e,s,gg)){a6B.wxVkey=1
}
a6B.wxXCkey=1
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var b9B=_n('panel')
_r(b9B,'panelStr',59,e,s,gg)
var o0B=_m('switch',['bind:change',60,'checked',1],[],e,s,gg)
_(b9B,o0B)
_(r,b9B)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['components/btn/index.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/btn/index.wxml'] = $gwx( './components/btn/index.wxml' );
		__wxAppCode__['components/cell/index.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/cell/index.wxml'] = $gwx( './components/cell/index.wxml' );
		__wxAppCode__['components/marquee/index.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/marquee/index.wxml'] = $gwx( './components/marquee/index.wxml' );
		__wxAppCode__['components/page-title/index.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/page-title/index.wxml'] = $gwx( './components/page-title/index.wxml' );
		__wxAppCode__['components/panel/index.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/panel/index.wxml'] = $gwx( './components/panel/index.wxml' );
		__wxAppCode__['components/share-award/index.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/share-award/index.wxml'] = $gwx( './components/share-award/index.wxml' );
		__wxAppCode__['components/share-detail/index.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/share-detail/index.wxml'] = $gwx( './components/share-detail/index.wxml' );
		__wxAppCode__['components/share-moment/index.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/share-moment/index.wxml'] = $gwx( './components/share-moment/index.wxml' );
		__wxAppCode__['components/switch/index.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/switch/index.wxml'] = $gwx( './components/switch/index.wxml' );
		__wxAppCode__['pages/animation/index.json'] = {"navigationBarTitleText":"animation 3D动画","usingComponents":{"page-title":"../../components/page-title/index","cell":"../../components/cell/index"}};
		__wxAppCode__['pages/animation/index.wxml'] = $gwx( './pages/animation/index.wxml' );
		__wxAppCode__['pages/canvas/index.json'] = {"usingComponents":{"page-title":"../../components/page-title/index","cell":"../../components/cell/index"}};
		__wxAppCode__['pages/canvas/index.wxml'] = $gwx( './pages/canvas/index.wxml' );
		__wxAppCode__['pages/component-share/index.json'] = {"navigationBarTitleText":"canvas 封装演示","usingComponents":{"share-one":"../../components/share-moment/index","share-two":"../../components/share-detail/index","share-three":"../../components/share-award/index"}};
		__wxAppCode__['pages/component-share/index.wxml'] = $gwx( './pages/component-share/index.wxml' );
		__wxAppCode__['pages/index/index.json'] = {"usingComponents":{"page-title":"../../components/page-title/index","cell":"../../components/cell/index"}};
		__wxAppCode__['pages/index/index.wxml'] = $gwx( './pages/index/index.wxml' );
		__wxAppCode__['pages/marquee/index.json'] = {"navigationBarTitleText":"marquee 跑马灯","usingComponents":{"marquee":"../../components/marquee/index","page-title":"../../components/page-title/index"}};
		__wxAppCode__['pages/marquee/index.wxml'] = $gwx( './pages/marquee/index.wxml' );
		__wxAppCode__['pages/rotateY/index.json'] = {"navigationBarTitleText":"3D 翻转动画","usingComponents":{"geek-btn":"../../components/btn/index"}};
		__wxAppCode__['pages/rotateY/index.wxml'] = $gwx( './pages/rotateY/index.wxml' );
		__wxAppCode__['pages/switch/index.json'] = {"navigationBarTitleText":"switch 开关按钮","usingComponents":{"switch":"../../components/switch/index","panel":"../../components/panel/index"}};
		__wxAppCode__['pages/switch/index.wxml'] = $gwx( './pages/switch/index.wxml' );
	
	define("utils/stringUtil.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={substringStr:function(u){return u&&u.length>12?(u=u.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g,""))?u.slice(0,12)+"...":"匿名":u}}; 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(t){return(t=t.toString())[1]?t:"0"+t};module.exports={formatTime:function(e){var n=e.getFullYear(),r=e.getMonth()+1,o=e.getDate(),u=e.getHours(),i=e.getMinutes(),a=e.getSeconds();return[n,r,o].map(t).join("/")+" "+[u,i,a].map(t).join(":")}}; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";App({onLaunch:function(){var n=this,s=wx.getStorageSync("logs")||[];s.unshift(Date.now()),wx.setStorageSync("logs",s),wx.login({success:function(n){}}),wx.getSetting({success:function(s){s.authSetting["scope.userInfo"]&&wx.getUserInfo({success:function(s){n.globalData.userInfo=s.userInfo,n.userInfoReadyCallback&&n.userInfoReadyCallback(s)}})}})},globalData:{userInfo:null}}); 
 			}); 	require("app.js");
 		__wxRoute = 'components/btn/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/btn/index.js';	define("components/btn/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{},data:{},methods:{}}); 
 			}); 	require("components/btn/index.js");
 		__wxRoute = 'components/cell/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/cell/index.js';	define("components/cell/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{cellList:{type:Array,value:[]}},data:{},methods:{cellTap:function(t){console.log(t);var e={cell:t.currentTarget.dataset.path},a={};this.triggerEvent("navigate",e,a)}}}); 
 			}); 	require("components/cell/index.js");
 		__wxRoute = 'components/marquee/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/marquee/index.js';	define("components/marquee/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=["closeable"];Component({properties:{text:{type:String,value:""},mode:{type:String,value:""},url:{type:String,value:""},openType:{type:String,value:"navigate"},delay:{type:Number,value:0},speed:{type:Number,value:40},scrollable:{type:Boolean,value:!1},leftIcon:{type:String,value:""},color:{type:String,value:"#f60"},backgroundColor:{type:String,value:"#fff7cc"}},data:{show:!0,hasRightIcon:!1,width:void 0,wrapWidth:void 0,elapse:void 0,animation:null,resetAnimation:null,timer:null},attached:function(){var t=this.data.mode;t&&this._checkMode(t)&&this.setData({hasRightIcon:!0})},detached:function(){var t=this.data.timer;t&&clearTimeout(t)},ready:function(){this._init()},methods:{_checkMode:function(e){var a=~t.indexOf(e);return a||console.warn("mode only accept value of "+t+", now get "+e+"."),a},_init:function(){var t=this;wx.createSelectorQuery().in(this).select(".geek-noticebar__content").boundingClientRect(function(e){if(!e||!e.width)throw new Error("页面缺少 noticebar 元素");t.setData({width:e.width}),wx.createSelectorQuery().in(t).select(".geek-noticebar__content-wrap").boundingClientRect(function(e){if(e&&e.width){var a=e.width,i=t.data,n=i.width,o=i.speed,r=i.scrollable,l=i.delay;if(r&&a<n){var c=n/o*1e3,s=wx.createAnimation({duration:c,timeingFunction:"linear",delay:l}),u=wx.createAnimation({duration:0,timeingFunction:"linear"});t.setData({elapse:c,wrapWidth:a,animation:s,resetAnimation:u},function(){t._scroll()})}}}).exec()}).exec()},_scroll:function(){var t=this,e=this.data,a=e.animation,i=e.resetAnimation,n=e.wrapWidth,o=e.elapse,r=e.speed;i.translateX(n).step();var l=a.translateX(-o*r/1e3).step();this.setData({animationData:i.export()}),setTimeout(function(){t.setData({animationData:l.export()})},100);var c=setTimeout(function(){t._scroll()},o);this.setData({timer:c})},_handleButtonClick:function(){var t=this.data.timer;t&&clearTimeout(t),this.setData({show:!1,timer:null})}}}); 
 			}); 	require("components/marquee/index.js");
 		__wxRoute = 'components/page-title/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/page-title/index.js';	define("components/page-title/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{pageTitle:{type:String,value:""}},data:{},methods:{}}); 
 			}); 	require("components/page-title/index.js");
 		__wxRoute = 'components/panel/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/panel/index.js';	define("components/panel/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{panelStr:{type:String,value:""}},data:{},methods:{}}); 
 			}); 	require("components/panel/index.js");
 		__wxRoute = 'components/share-award/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/share-award/index.js';	define("components/share-award/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp();var t,e,a=require("../../utils/stringUtil.js");Component({properties:{avatar:{type:String,value:null},nickname:{type:String,value:null},awardMoney:{type:String,value:0},positionStatus:{type:String,value:"fixed"},showShareModel:{type:Boolean,value:!1,observer:"_propertyChange"}},data:{detailStr:{invite:"学海无涯苦作舟",nickInvite:"蹦萨卡拉卡",bpbMini:"极客组件库演示小程序",clickToMini:"(啦啦啦啦啦啦啦)",awardContent:"我在北方的寒夜里四季如春"},awardStr:"你在南方的艳阳里",targetSharePath:null,QRPath:"../../image/geek-qr.jpg",avatarPath:null,canvasHeight:0,imageWidth:0,imageHeight:0,realShow:!1},ready:function(){var a=this;wx.getSystemInfo({success:function(i){t=i.windowWidth,e=1.78*i.windowWidth,a.setData({canvasHeight:e,imageWidth:.7*t,imageHeight:.7*e})}})},methods:{_propertyChange:function(t,e){t&&this.shareMoments()},shareMoments:function(){var t=this;t.showLoading(),t.downloadAvatar()},showErrorModel:function(t){this.hideLoading(),t||(t="网络错误"),wx.showModal({title:"提示",content:t}),this.setData({showShareModel:!1})},showLoading:function(){wx.showLoading({title:"极客加载中..."})},hideLoading:function(){wx.hideLoading()},downloadAvatar:function(){var t=this;wx.downloadFile({url:t.data.avatar,success:function(e){t.setData({avatarPath:e.tempFilePath}),t.drawImage()},fail:function(){t.showErrorModel("网络错误")}})},drawImage:function(){var i=this,n=wx.createCanvasContext("myCanvas",this);n.setFillStyle("#FFFFFF"),n.fillRect(0,0,t,e),n.drawImage("../../image/share-award-bg.png",0,0,t,.6506*e),n.arc(t/2,.1065*t+.45*e,.1065*t+2,0,2*Math.PI),n.setFillStyle("#ffdb12"),n.fill(),n.save(),n.beginPath(),n.arc(t/2,.1065*t+.45*e,.1065*t,0,2*Math.PI),n.setStrokeStyle("#ffdb12"),n.stroke(),n.clip();var s=.213*t;if(n.drawImage(i.data.avatarPath,.3935*t,.45*e,s,s),n.restore(),n.setFillStyle("#747474"),n.setFontSize(14),n.setTextAlign("center"),n.fillText(i.data.detailStr.clickToMini,t/2,.97*e),i.setFontStyle(n,"bold"),n.setFillStyle("#333333"),n.setFontSize(16),n.setTextAlign("left"),wx.canIUse("canvasContext.measureText")){var o=n.measureText(a.substringStr(i.data.nickname));n.setFillStyle("#FF555C"),n.fillText(a.substringStr(i.data.nickname),.187*t,.27*e),n.setFillStyle("#333333"),n.fillText(i.data.detailStr.nickInvite,.187*t+o.width+10,.27*e)}else n.fillText(i.data.detailStr.invite,.187*t,.27*e);n.setFillStyle("#FFFFFF"),n.setFontSize(20),n.setTextAlign("center"),n.fillText(a.substringStr(i.data.nickname),.5*t,.615*e),n.setFillStyle("#666666"),n.setFontSize(14),n.setTextAlign("left"),n.fillText(i.data.awardStr,.187*t,.338*e),n.setFillStyle("#FF555C"),n.setFontSize(36),n.setTextAlign("left"),n.fillText(i.data.awardMoney,.51*t,.34*e),n.setFillStyle("#666666"),n.setFontSize(16),n.setTextAlign("left"),n.fillText(i.data.detailStr.awardContent,.187*t,.38*e),n.drawImage(i.data.QRPath,.3295*t,.69*e,.341*t,.341*t),n.setFillStyle("#333333"),n.setFontSize(16),n.setTextAlign("center"),n.fillText(i.data.detailStr.bpbMini,t/2,(.92+.02)*e),n.draw(!1,function(){i.saveCanvasImage()})},setFontStyle:function(t,e){wx.canIUse("canvasContext.font")&&(t.font="normal "+e+" 14px sans-serif")},saveCanvasImage:function(){var t=this;wx.canvasToTempFilePath({canvasId:"myCanvas",success:function(e){console.log(e.tempFilePath),t.setData({targetSharePath:e.tempFilePath,realShow:!0});var a={},i={};t.triggerEvent("hideDialog",a,i)},complete:function(){t.hideLoading()}},this)},saveImageTap:function(){this.requestAlbumScope()},requestAlbumScope:function(){var t=this;wx.getSetting({success:function(e){e.authSetting["scope.writePhotosAlbum"]?t.saveImageToPhotosAlbum():wx.authorize({scope:"scope.writePhotosAlbum",success:function(e){t.saveImageToPhotosAlbum()},fail:function(){wx.showModal({title:"提示",content:"你需要授权才能保存图片到相册",success:function(e){e.confirm&&wx.openSetting({success:function(e){e.authSetting["scope.writePhotosAlbum"]&&t.saveImageToPhotosAlbum()},fail:function(){}})}})}})}})},saveImageToPhotosAlbum:function(){var t=this;wx.saveImageToPhotosAlbum({filePath:t.data.targetSharePath,success:function(){wx.showModal({title:"",content:"✌️图片保存成功，\n快去分享到朋友圈吧",showCancel:!1}),t.hideDialog()}})},closeModel:function(){this.hideDialog()},hideDialog:function(){this.setData({realShow:!1,showShareModel:!1})}}}); 
 			}); 	require("components/share-award/index.js");
 		__wxRoute = 'components/share-detail/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/share-detail/index.js';	define("components/share-detail/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp();var t,e,a=require("../../utils/stringUtil.js");Component({properties:{avatar:{type:String,value:null},incomeMoney:{type:Number,value:0},nickname:{type:String,value:""},joinNumber:{type:Number,value:0},joinAvatarList:{type:Array,value:[]},adImageUrl:{type:String,value:null},adName:{type:String,value:""},adTime:{type:String,value:""},showShareModel:{type:Boolean,value:!1,observer:"_propertyChange"}},data:{detailStr:{invite:"在疯狂打call",bpbMini:"极客组件库演示小程序",clickToMini:"(啦啦啦啦啦)",incomeTitle:"饿呃呃呃：",timeTitle:"好久不见：",joinTitle:"哈哈哈"},targetSharePath:null,QRPath:"../../image/geek-qr.jpg",avatarPath:null,adPath:null,joinPathList:[],canvasHeight:0,imageWidth:0,imageHeight:0,realShow:!1},ready:function(){var a=this;wx.getSystemInfo({success:function(i){t=i.windowWidth,e=1.78*i.windowWidth,a.setData({canvasHeight:e,imageWidth:.7*t,imageHeight:.7*e})}})},methods:{_propertyChange:function(t,e){t&&(this.data.targetSharePath?this.setData({realShow:!0}):this.shareMoments())},shareMoments:function(){var t=this;t.showLoading(),t.downloadAvatar()},downloadAvatar:function(){var t=this;wx.downloadFile({url:t.data.avatar,success:function(e){t.setData({avatarPath:e.tempFilePath}),t.downloadAdImage()},fail:function(){t.showErrorModel()}})},downloadAdImage:function(){var t=this,e=t.data.adImageUrl;-1!=e.indexOf("http:")&&(e=e.replace("http:","https:")),t.setData({adImageUrl:e}),wx.downloadFile({url:t.data.adImageUrl,success:function(e){t.setData({adPath:e.tempFilePath}),t.data.joinAvatarList&&0!=t.data.joinAvatarList.length?t.downloadJoinAvatarList():t.drawCanvas()},fail:function(){t.showErrorModel()}})},downloadJoinAvatarList:function(){var t=this;t.data.joinAvatarList.length>7&&t.setData({joinAvatarList:t.data.joinAvatarList.slice(0,7)});var e=0,a=[],i=!0,n=!1,l=void 0;try{for(var o,s=t.data.joinAvatarList[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){var r=o.value;-1!=r.indexOf("http:")&&(r=r.replace("http:","https:")),wx.downloadFile({url:r,success:function(t){a.push(t.tempFilePath)},complete:function(){++e==t.data.joinAvatarList.length&&(t.setData({joinPathList:a}),t.drawCanvas())}})}}catch(t){n=!0,l=t}finally{try{!i&&s.return&&s.return()}finally{if(n)throw l}}},showErrorModel:function(t){this.hideLoading(),t||(t="网络错误"),wx.showModal({title:"提示",content:t}),this.setData({showShareModel:!1})},showLoading:function(){wx.showLoading({title:"极客加载中..."})},hideLoading:function(){wx.hideLoading()},drawCanvas:function(){var i=this,n=wx.createCanvasContext("myCanvas",this);n.setFillStyle("#FFFFFF"),n.fillRect(0,0,t,e),n.drawImage(i.data.adPath,0,.06*e,t,.315*e),n.save(),n.beginPath(),n.arc(.0533*t+.085*t*.5,.0425*t+.006*e,.0425*t,0,2*Math.PI),n.setStrokeStyle("#FFFFFF"),n.stroke(),n.clip();var l=.085*t;if(n.drawImage(i.data.avatarPath,.0533*t,.006*e,l,l),n.restore(),n.setFillStyle("#747474"),n.setFontSize(14),n.setTextAlign("center"),n.fillText(i.data.detailStr.clickToMini,t/2,.97*e),n.setFillStyle("#666666"),n.setFontSize(16),n.setTextAlign("left"),n.fillText(i.data.detailStr.incomeTitle,.06*t,.5*e),n.setFillStyle("#666666"),n.setFontSize(16),n.setTextAlign("left"),n.fillText(i.data.detailStr.timeTitle,.06*t,.54*e),n.setFillStyle("#666666"),n.setFontSize(16),n.setTextAlign("left"),n.fillText(i.data.adTime,.28*t,.54*e),n.setFillStyle("#666666"),n.setFontSize(16),n.setTextAlign("left"),n.fillText(i.data.detailStr.joinTitle,.06*t,.62*e),n.setFillStyle("#666666"),n.setFontSize(12),n.setTextAlign("left"),n.fillText(i.data.joinNumber+"人",.08*t,.645*e),n.setFillStyle("#666666"),n.setFontSize(16),n.setTextAlign("left"),wx.canIUse("canvasContext.measureText")){var o=n.measureText(a.substringStr(i.data.nickname));n.fillText(i.data.detailStr.invite,.165*t+o.width+10,.04*e)}else n.fillText(i.data.detailStr.invite,.7*t,.04*e);i.setFontStyle(n,"bold","16px"),n.setFillStyle("#333333"),n.setFontSize(20),n.setTextAlign("left"),n.fillText(i.data.adName,.06*t,.42*e),n.setStrokeStyle("#DDDDDD"),n.setLineDash([10,20],5),n.moveTo(.06*t,.451*e),n.lineTo(.94*t,.451*e),n.stroke(),n.setFillStyle("#FF555C"),n.setFontSize(16),n.setTextAlign("left"),n.fillText(a.substringStr(i.data.nickname),.165*t,.04*e),n.setFillStyle("#FF555C"),n.setFontSize(24),n.setTextAlign("left"),n.fillText(0==i.data.incomeMoney?"300+":i.data.incomeMoney+"元",.28*t,.502*e),n.setFillStyle("#F7F7F7"),n.fillRect(0,.661*e,t,.015*e),n.setStrokeStyle("#DDDDDD"),n.setLineDash([10,5],5),n.moveTo(.06*t,.571*e),n.lineTo(.94*t,.571*e),n.stroke(),n.drawImage(i.data.QRPath,.3295*t,.69*e,.341*t,.341*t),n.setFillStyle("#333333"),n.setFontSize(16),n.setTextAlign("center"),n.fillText(i.data.detailStr.bpbMini,t/2,(.92+.02)*e);for(var s in i.data.joinPathList){var r=i.data.joinPathList[s],d=.04*t,h=.25*t+.08*t*s+.013*t*s,c=.602*e;n.drawImage(r,h,c,2*d,2*d)}n.draw(!1,function(t){console.log(t),i.saveCanvasImage()})},setFontStyle:function(t,e,a){wx.canIUse("canvasContext.font")&&(t.font="normal "+e+" "+a+" sans-serif")},saveCanvasImage:function(){var t=this;wx.canvasToTempFilePath({canvasId:"myCanvas",success:function(e){console.log(e.tempFilePath),t.setData({targetSharePath:e.tempFilePath,realShow:!0});var a={},i={};t.triggerEvent("hideDialog",a,i)},complete:function(){t.hideLoading()}},this)},saveImageTap:function(){this.requestAlbumScope()},requestAlbumScope:function(){var t=this;wx.getSetting({success:function(e){e.authSetting["scope.writePhotosAlbum"]?t.saveImageToPhotosAlbum():wx.authorize({scope:"scope.writePhotosAlbum",success:function(e){t.saveImageToPhotosAlbum()},fail:function(){wx.showModal({title:"提示",content:"你需要授权才能保存图片到相册",success:function(e){e.confirm&&wx.openSetting({success:function(e){e.authSetting["scope.writePhotosAlbum"]&&t.saveImageToPhotosAlbum()},fail:function(){}})}})}})}})},saveImageToPhotosAlbum:function(){var t=this;wx.saveImageToPhotosAlbum({filePath:t.data.targetSharePath,success:function(){wx.showModal({title:"",content:"✌️图片保存成功，\n快去分享到朋友圈吧",showCancel:!1}),t.hideDialog()}})},closeModel:function(){this.hideDialog()},hideDialog:function(){this.setData({showShareModel:!1,realShow:!1})}}}); 
 			}); 	require("components/share-detail/index.js");
 		__wxRoute = 'components/share-moment/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/share-moment/index.js';	define("components/share-moment/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp();var t,e,a=require("../../utils/stringUtil.js");Component({properties:{avatar:{type:String,value:null},nickname:{type:String,value:null},showShareModel:{type:Boolean,value:!1,observer:"_propertyChange"}},data:{detailStr:{tip:"canvas绘制,你值得拥有",content:"极客组件库极客组件库",contentOther:"canvas，canvas，canvas",bpbMini:"极客组件库演示小程序",clickToMini:"(长按进入学习)"},canvasHeight:0,imageWidth:0,imageHeight:0,targetSharePath:null,QRPath:"../../image/geek-qr.jpg",avatarPath:null,realShow:!1},ready:function(){var a=this;wx.getSystemInfo({success:function(n){t=n.windowWidth,e=1.78*n.windowWidth,a.setData({canvasHeight:e,imageWidth:.7*t,imageHeight:.7*e})}})},methods:{_propertyChange:function(t,e){console.log("_propertyChange----------\x3e"+t),t&&(this.data.targetSharePath?this.setData({realShow:!0}):this.shareMoments())},shareMoments:function(){var t=this;t.data.targetSharePath?t.setData({showShareModel:!0}):(t.showLoading(),t.downloadAvatar())},showErrorModel:function(t){this.hideLoading(),t||(t="网络错误"),wx.showModal({title:"提示",content:t}),this.setData({showShareModel:!1})},showLoading:function(){wx.showLoading({title:"极客加载中..."})},hideLoading:function(){wx.hideLoading()},downloadAvatar:function(){var t=this;wx.downloadFile({url:t.data.avatar,success:function(e){t.setData({avatarPath:e.tempFilePath}),t.drawImage()},fail:function(){t.showErrorModel()}})},drawImage:function(){var n=this,o=wx.createCanvasContext("myCanvas",this);o.setFillStyle("#FFFFFF"),o.fillRect(0,0,t,e),o.drawImage("../../image/share-bg.png",0,0,t,.5*e),o.arc(t/2,.184*t+.117*e,.184*t+4,0,2*Math.PI),o.setFillStyle("#FFFFFF"),o.fill(),o.save(),o.beginPath(),o.arc(t/2,.184*t+.117*e,.184*t,0,2*Math.PI),o.setStrokeStyle("#FFFFFF"),o.stroke(),o.clip();var i=.368*t;o.drawImage(n.data.avatarPath,.316*t,.117*e,i,i),o.restore(),o.setFillStyle("#333333"),o.setFontSize(18),o.setTextAlign("center"),o.fillText(n.data.detailStr.content,t/2,.615*e),o.setFillStyle("#333333"),o.setFontSize(18),o.setTextAlign("center"),o.fillText(n.data.detailStr.contentOther,t/2,.65*e),o.drawImage(n.data.QRPath,.3295*t,.69*e,.341*t,.341*t),console.log("font------------\x3e"+wx.canIUse("canvasContext.font")),o.setFillStyle("#747474"),o.setFontSize(14),o.setTextAlign("center"),o.fillText(n.data.detailStr.clickToMini,t/2,(.935+.02)*e),n.setFontStyle(o,"bold"),o.setFillStyle("#FFFFFF"),o.setFontSize(20),o.setTextAlign("center"),o.fillText(a.substringStr(n.data.nickname),t/2,.39*e),o.setFillStyle("#FF555C"),o.setFontSize(24),o.setTextAlign("center"),o.fillText(n.data.detailStr.tip,t/2,.545*e),o.setFillStyle("#747474"),o.setFontSize(16),o.setTextAlign("center"),o.fillText(n.data.detailStr.bpbMini,t/2,.93*e),o.draw(!1,function(){console.log("callback---------------\x3e"),n.saveCanvasImage()})},setFontStyle:function(t,e){wx.canIUse("canvasContext.font")&&(t.font="normal "+e+" 14px sans-serif")},saveCanvasImage:function(){var t=this;wx.canvasToTempFilePath({canvasId:"myCanvas",success:function(e){console.log(e.tempFilePath),t.setData({targetSharePath:e.tempFilePath,realShow:!0})},complete:function(){t.hideLoading()}},this)},saveImageTap:function(){this.requestAlbumScope()},requestAlbumScope:function(){var t=this;wx.getSetting({success:function(e){e.authSetting["scope.writePhotosAlbum"]?t.saveImageToPhotosAlbum():wx.authorize({scope:"scope.writePhotosAlbum",success:function(e){t.saveImageToPhotosAlbum()},fail:function(){wx.showModal({title:"提示",content:"你需要授权才能保存图片到相册",success:function(e){e.confirm&&wx.openSetting({success:function(e){e.authSetting["scope.writePhotosAlbum"]&&t.saveImageToPhotosAlbum()},fail:function(){}})}})}})}})},saveImageToPhotosAlbum:function(){var t=this;wx.saveImageToPhotosAlbum({filePath:t.data.targetSharePath,success:function(){wx.showModal({title:"",content:"✌️图片保存成功，\n快去分享到朋友圈吧",showCancel:!1}),t.hideDialog()}})},closeModel:function(){this.hideDialog()},hideDialog:function(){this.setData({realShow:!1,showShareModel:!1})}}}); 
 			}); 	require("components/share-moment/index.js");
 		__wxRoute = 'components/switch/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/switch/index.js';	define("components/switch/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{checked:{type:Boolean,value:!1},loading:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1}},methods:{handleGeekSwitchChange:function(){if(!this.data.loading&&!this.data.disabled){var e=!this.data.checked;this.triggerEvent("change",{checked:e,loading:this.data.loading})}}}}); 
 			}); 	require("components/switch/index.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/index.js';	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp();Page({data:{groupList:[{pageTitle:"基础组件",cellList:[{name:"marquee 跑马灯",path:"../marquee/index"},{name:"switch 开关按钮",path:"../switch/index"}]},{pageTitle:"动画",cellList:[{name:"animation 3D动画",path:"../animation/index"}]},{pageTitle:"画布",cellList:[{name:"canvas 组件演示",path:"../canvas/index"}]}]},navigateListener:function(e){console.log(e),wx.navigateTo({url:e.detail.cell.path})}}); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/moment/index';__wxRouteBegin = true; 	define("pages/moment/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,e,a=require("../../utils/stringUtil.js");Page({data:{detailStr:{tip:"canvas绘制,你值得拥有",content:"组件库极客组件库",contentOther:"canvas，canvas，canvas",bpbMini:"组件库演示小程序",clickToMini:"(开始学习)"},avatar4:"https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132",avatar:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2136187651,870864669&fm=27&gp=0.jpg",bgImage1:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2155967225,3553147031&fm=27&gp=0.jpg",nickname:"Geek",canvasHeight:0,imageWidth:0,imageHeight:0,targetSharePath:null,QRPath:"../../image/geek-qr.jpg",avatarPath:null,realShow:!1},onLoad:function(a){var n=this;wx.getSystemInfo({success:function(a){t=a.windowWidth,e=1.78*a.windowWidth,n.setData({canvasHeight:e,imageWidth:.7*t,imageHeight:.7*e})}})},onReady:function(){},onShow:function(){},shareMemontListener:function(){this.shareMoments()},shareMoments:function(){var t=this;t.data.targetSharePath?t.setData({realShow:!1}):(t.showLoading(),t.downloadAvatar())},showErrorModel:function(t){this.hideLoading(),t||(t="网络错误"),wx.showModal({title:"提示",content:t})},showLoading:function(){wx.showLoading({title:"极客加载中..."})},hideLoading:function(){wx.hideLoading()},downloadAvatar:function(){var t=this;wx.downloadFile({url:t.data.avatar,success:function(e){t.setData({avatarPath:e.tempFilePath}),t.drawImage()},fail:function(){t.showErrorModel()}})},drawImage:function(){var n=this,i=wx.createCanvasContext("myCanvas",this);i.setFillStyle("#FFFFFF"),i.fillRect(0,0,t,e),i.drawImage("../../image/share-bg.png",0,0,t,.5*e),i.arc(t/2,.184*t+.117*e,.184*t+4,0,2*Math.PI),i.setFillStyle("#FFFFFF"),i.fill(),i.save(),i.beginPath(),i.arc(t/2,.184*t+.117*e,.184*t,0,2*Math.PI),i.setStrokeStyle("#FFFFFF"),i.stroke(),i.clip();var o=.368*t;i.drawImage(n.data.avatarPath,.316*t,.117*e,o,o),i.restore(),i.setFillStyle("#333333"),i.setFontSize(18),i.setTextAlign("center"),i.fillText(n.data.detailStr.content,t/2,.615*e),i.setFillStyle("#333333"),i.setFontSize(18),i.setTextAlign("center"),i.fillText(n.data.detailStr.contentOther,t/2,.65*e),i.drawImage(n.data.QRPath,.3295*t,.69*e,.341*t,.341*t),console.log("font------------\x3e"+wx.canIUse("canvasContext.font")),i.setFillStyle("#747474"),i.setFontSize(14),i.setTextAlign("center"),i.fillText(n.data.detailStr.clickToMini,t/2,(.935+.02)*e),n.setFontStyle(i,"bold"),i.setFillStyle("#FFFFFF"),i.setFontSize(20),i.setTextAlign("center"),i.fillText(a.substringStr(n.data.nickname),t/2,.39*e),i.setFillStyle("#FF555C"),i.setFontSize(24),i.setTextAlign("center"),i.fillText(n.data.detailStr.tip,t/2,.545*e),i.setFillStyle("#747474"),i.setFontSize(16),i.setTextAlign("center"),i.fillText(n.data.detailStr.bpbMini,t/2,.93*e),i.draw(!1,function(){console.log("callback---------------\x3e"),n.saveCanvasImage()})},setFontStyle:function(t,e){wx.canIUse("canvasContext.font")&&(t.font="normal "+e+" 14px sans-serif")},saveCanvasImage:function(){var t=this;wx.canvasToTempFilePath({canvasId:"myCanvas",success:function(e){console.log(e.tempFilePath),t.setData({targetSharePath:e.tempFilePath,realShow:!1})},complete:function(){t.hideLoading()}},this)},saveImageTap:function(){this.requestAlbumScope()},requestAlbumScope:function(){var t=this;wx.getSetting({success:function(e){e.authSetting["scope.writePhotosAlbum"]?t.saveImageToPhotosAlbum():wx.authorize({scope:"scope.writePhotosAlbum",success:function(e){t.saveImageToPhotosAlbum()},fail:function(){wx.showModal({title:"提示",content:"你需要授权才能保存图片到相册",success:function(e){e.confirm&&wx.openSetting({success:function(e){e.authSetting["scope.writePhotosAlbum"]?t.saveImageToPhotosAlbum():console.log("用户未同意获取用户信息权限--------\x3esuccess")},fail:function(){console.log("用户未同意获取用户信息权限--------\x3efail")}})}})}})}})},saveImageToPhotosAlbum:function(){var t=this;wx.saveImageToPhotosAlbum({filePath:t.data.targetSharePath,success:function(){wx.showModal({title:"",content:"✌️图片保存成功，\n快去分享到朋友圈吧",showCancel:!1}),t.hideDialog()}})},closeModel:function(){this.hideDialog()},hideDialog:function(){this.setData({realShow:!1})}}); 
 			}); 	require("pages/moment/index.js");
 		__wxRoute = 'pages/component-share/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/component-share/index.js';	define("pages/component-share/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{shareOne:{avatar:"",nickname:"",showShareModel:!1},shareTwo:{avatar:"",nickname:"",incomeMoney:"",joinNumber:"",joinAvatarList:"",adImageUrl:"",adName:"",adTime:"",showShareModel:!1},shareThree:{avatar:"",nickname:"",awardMoney:"",showShareModel:!1}},onLoad:function(a){},onShow:function(){},handleTapOne:function(){this.setData({shareOne:{avatar:"https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132",nickname:"极客学苑",showShareModel:!0}})},handleTapTwo:function(){this.setData({shareTwo:{avatar:"https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132",nickname:"stone",incomeMoney:"0",joinNumber:"0",joinAvatarList:["https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132","https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132","https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132","https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132","https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132"],adImageUrl:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2136187651,870864669&fm=27&gp=0.jpg",adName:"哈哈哈哈哈哈哈哈哈",adTime:"看看你最近改变",showShareModel:!0}})},handleTapThree:function(){this.setData({shareThree:{avatar:"https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132",nickname:"路人甲",awardMoney:"哈哈",showShareModel:!0}})}}); 
 			}); 	require("pages/component-share/index.js");
 		__wxRoute = 'pages/canvas/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/canvas/index.js';	define("pages/canvas/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{groupList:[{pageTitle:"绘制",cellList:[{name:"canvas 绘制演示",path:"../moment/index"}]},{pageTitle:"封装",cellList:[{name:"canvas 封装演示",path:"../component-share/index"}]}]},onLoad:function(a){},onShow:function(){},navigateListener:function(a){wx.navigateTo({url:a.detail.cell.path})}}); 
 			}); 	require("pages/canvas/index.js");
 		__wxRoute = 'pages/marquee/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/marquee/index.js';	define("pages/marquee/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{bar:{text:"最新资讯：微软以75亿美元价格收购世界上最大的同性交友平台 Github，不知道这是否是一向封闭的微软拥抱开源的信号！",scrollable:!0,textColor:"#fff",backgroundColor:"#707070"}},onLoad:function(o){}}); 
 			}); 	require("pages/marquee/index.js");
 		__wxRoute = 'pages/switch/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/switch/index.js';	define("pages/switch/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{sync:{checked:!1},panelStr:"Switch"},onLoad:function(c){},syncChange:function(c){var e=c.detail;this.setData({"sync.checked":e.checked})}}); 
 			}); 	require("pages/switch/index.js");
 		__wxRoute = 'pages/animation/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/animation/index.js';	define("pages/animation/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{groupList:[{pageTitle:"翻转",cellList:[{name:"rotateY 翻转动画",path:"../rotateY/index"}]}]},onLoad:function(t){},navigateListener:function(t){console.log(t),wx.navigateTo({url:t.detail.cell.path})}}); 
 			}); 	require("pages/animation/index.js");
 		__wxRoute = 'pages/rotateY/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/rotateY/index.js';	define("pages/rotateY/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{showFront:!0},onLoad:function(t){},animationListener:function(){this.setData({showFront:!this.data.showFront})}}); 
 			}); 	require("pages/rotateY/index.js");
 	