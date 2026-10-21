const u=(r,t)=>Object.keys(r).reduce((e,n)=>(e[n]=t(r[n],n),e),{}),p=(r,t)=>r?t.reduce((s,e)=>(Object.prototype.hasOwnProperty.call(r,e)&&(s[e]=r[e]),s),{}):{};export{u as m,p};
