/**
 * Created by Administrator on 2017/1/11 0011.
 */
function addrPop(a) {
    var b=document.querySelector(".addr-pop");
    b.style.display=a;
}
function keepHover(b) {
    var a=document.querySelector(".addr-menu");
    a.className=b?a.className+" hover":"addr-menu";
}
function myjdPop(a) {
    var b=document.querySelector(".myjd");
    b.style.display=a;
}
function phonePop(a) {
    var b=document.querySelector(".phone-pop");
    b.style.display=a;
}
function keepPhoneHover(c) {
    var d=document.querySelector(".phone label");
    d.className=c?d.className+" hover":"phone";
    var b=document.querySelector(".phone label a");
    b.className=c?b.className+" hover1":"";
}
function shutdown() {
    var a=document.querySelector("#top-banner");
    a.style.display="none";
}
function navPop(a,b,c) {
    var d=document.querySelector(".dq"+b);
    d.style.display=c
}
function keepNavHover(d,e) {
    var b=d.parentNode;
    var c=b.querySelector("a");
    c.className=e?c.className+" hover2":""
}
function bgcR(b) {
    var c=b.querySelector("i");
    c.style.background="#b1191a"
}
function bgcG(b) {
    var c=b.querySelector("i");
    c.style.background="#5c5251"
}
function siblings(b) {
    var a=[];
    var c=b.previousSibling;
    while(c) {
        if(c.nodeType==1) {
            a.push(c)
        }
        c=c.previousSibling}a.reverse();
    var d=b.nextSibling;
    while(d) {
        if(d.nodeType==1) {
            a.push(d)
        }
        d=d.nextSibling}return a}function preSibling(b) {
    var a=[];
    var c=b.previousSibling;
    while(c) {
        if(c.nodeType==1) {
            a.push(c)
        }
        c=c.previousSibling}return a}function f1Pop(a,g) {
    var d=a.querySelector("div");
    var e=siblings(a);
    for(var c=0;
        c<e.length;
        c++) {
        var f=e[c].querySelector("div");
        f.style.display="none";
        var b=e[c].childNodes[1];
        b.className=""
    }
    d.style.display=g}function f1popHover(c,d) {
    var b=preSibling(c)[0];
    b.className=b.className+" hover3"
}
function listpopOpen(c) {
    var b=c.querySelector("span");
    var a=c.querySelector("i");
    a.style.backgroundColor="#c81623";
    a.style.borderRadius="0";
    b.style.backgroundColor="#c81623";
    b.style.left="-62px"
}
function listpopNone(c) {
    var b=c.querySelector("span");
    var a=c.querySelector("i");
    a.style.backgroundColor="#7a6e6e";
    a.style.borderRadius="3px 0 0 3px";
    b.style.backgroundColor="#7a6e6e";
    b.style.left="35px"
}
function panelOpen() {
    var a=document.querySelector("#side-right");
    var b=document.defaultView.getComputedStyle(a,null);
    var c=parseInt(b.right);
    if(c==-270) {
        a.style.right="0"
    }
    else {
        a.style.right="-270px"
    }
}