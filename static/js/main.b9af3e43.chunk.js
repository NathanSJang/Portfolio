(this["webpackJsonpsei-cafe"]=this["webpackJsonpsei-cafe"]||[]).push([[0],{65:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1),s=a.n(i),c=a(14),r=a.n(c),o=a(54),l=(a(65),a(55)),m=a(103);a(17),a(25);function j(){var e=localStorage.getItem("token");return e?JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3?(localStorage.removeItem("token"),null):e:null}function d(){var e=j();return e?JSON.parse(atob(e.split(".")[1])).user:null}var h=a(101),g=a(113),x=a(102),b=a(22),p=a.p+"static/media/Resume.5de5e4c9.pdf",O=a(99),u=Object(O.a)((function(e){return{appBar:{margin:"0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start",backgroundColor:"#071B37"},navLinks:{marginRight:e.spacing(2)},toolBar:{marginTop:"2vmin"},logo:{width:"55%",minWidth:"80px",marginTop:"1.2vmin",marginLeft:"-1.5vmin"},logoBtn:{padding:"0"},text:{color:"#FF7272",fontFamily:"Big Shoulders Display",fontSize:"20px"},resumeBtn:{color:"#FF7272",border:"1px solid #FF7272",marginLeft:"2vmin"}}}));function v(){var e=u();return Object(n.jsxs)(h.a,{className:e.appBar,color:"inherit",position:"fixed",children:[Object(n.jsx)(g.a,{className:e.logoBtn,children:Object(n.jsx)(b.Link,{activeClass:"active",to:"welcome",spy:!0,smooth:!0,offset:-70,duration:500,children:Object(n.jsx)("img",{className:e.logo,src:"data:image/png;base64,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",alt:"logo"})})}),Object(n.jsxs)(x.a,{className:e.toolBar,children:[Object(n.jsx)(g.a,{children:Object(n.jsx)(b.Link,{className:e.text,activeClass:"active",to:"aboutme",spy:!0,smooth:!0,offset:-70,duration:500,children:"about me"})}),Object(n.jsx)(g.a,{children:Object(n.jsx)(b.Link,{className:e.text,activeClass:"active",to:"projcets",spy:!0,smooth:!0,offset:-70,duration:500,children:"project"})}),Object(n.jsx)(g.a,{children:Object(n.jsx)(b.Link,{className:e.text,activeClass:"active",to:"resume",spy:!0,smooth:!0,offset:-70,duration:500,children:"Contact"})}),Object(n.jsx)(g.a,{children:Object(n.jsx)(b.Link,{className:e.text,activeClass:"active",to:"getInTouch",spy:!0,smooth:!0,offset:-70,duration:500,children:"Get In Touch"})}),Object(n.jsx)(g.a,{className:e.resumeBtn,variant:"outlined",href:p,children:"Resume"})]})]})}var f=a(104),N=a(114),C=a(82),A=Object(O.a)((function(e){return{welcomeConatainer:{height:"90vh"},paddingTop:{paddingTop:"20vmin"},title:{marginBottom:"2vmin",fontFamily:"Noto Sans JP",fontWeight:"400"},text:{fontFamily:"Noto Sans JP",fontWeight:"300"}}}));function y(){var e=A();return Object(n.jsx)(m.a,{id:"welcome",className:e.welcomeConatainer,children:Object(n.jsxs)(f.a,{className:e.paddingTop,container:!0,children:[Object(n.jsxs)(f.a,{xs:12,children:[Object(n.jsx)(N.a,{in:!0,timeout:1500,children:Object(n.jsx)(C.a,{style:{color:"#FF7272"},className:e.title,variant:"h6",children:"Hi, My name is"})}),Object(n.jsx)(N.a,{in:!0,timeout:2500,children:Object(n.jsx)(C.a,{className:e.title,variant:"h2",children:"Nathan S Jang"})})]}),Object(n.jsx)(f.a,{xs:12,children:Object(n.jsx)(N.a,{in:!0,timeout:2800,children:Object(n.jsxs)(C.a,{className:e.text,variant:"h6",children:["I'm a software engineer based in San Francisco, CA.",Object(n.jsx)("br",{}),"I have strong passion for learning, maintaining, and improving complex systems."]})})})]})})}var F=a(105),S=a(80),k=a.p+"static/media/nathan.5ced9040.jpeg",B=Object(O.a)((function(e){return{container:{height:"130vh",marginTop:"3vmin",paddingTop:"20vmin"},title:{marginBottom:"2vmin",fontFamily:"Noto Sans JP"},divider:{backgroundColor:"#FF7272",width:"55%"},listContainer:{display:"flex",justifyContent:"space-between"},technologiesContainer:{marginTop:"3vmin"},textContainer:{marginTop:"3vmin",fontFamily:"Noto Sans JP"},list:{"&::marker":{content:'"\u25b9"',color:"#FF7272",marginRight:"1vmin"},paddingLeft:"1vmin"},text:{fontFamily:"Noto Sans JP"},textHeader:{fontFamily:"Noto Sans JP",fontWeight:"400"},myPhoto:{maxHeight:"300px",maxWidth:"300px",marginLeft:"auto",marginRight:"auto",display:"block"},potoPaper:{maxWidth:"280px"}}}));function w(){var e=B();return Object(n.jsx)(m.a,{id:"aboutme",className:e.container,children:Object(n.jsxs)("div",{children:[Object(n.jsx)(C.a,{className:e.title,variant:"h4",align:"left",children:"About Me"}),Object(n.jsx)(F.a,{className:e.divider}),Object(n.jsxs)(f.a,{className:e.textContainer,container:!0,spacing:3,children:[Object(n.jsxs)(f.a,{item:!0,xs:12,lg:6,children:[Object(n.jsx)(C.a,{className:e.text,variant:"h6",children:"Software Engineer with a background in the Michelin starred culinary scene for over 8 years. I am a self starter who is a reliable and responsible individual, having experience in high pressure and fast paced working environments, successfully producing finest quality end results. I have a strong passion for learning, maintaining, and improving complex systems."}),Object(n.jsxs)("div",{className:e.technologiesContainer,children:[Object(n.jsx)(C.a,{className:e.textHeader,variant:"h6",children:"Technologies"}),Object(n.jsx)(f.a,{xs:12,children:Object(n.jsxs)("ul",{className:e.listContainer,children:[Object(n.jsxs)(f.a,{xs:6,children:[Object(n.jsx)("li",{className:e.list,children:"JavaScript"}),Object(n.jsx)("li",{className:e.list,children:"HTML & CSS "}),Object(n.jsx)("li",{className:e.list,children:"React "})]}),Object(n.jsxs)(f.a,{xs:6,children:[Object(n.jsx)("li",{className:e.list,children:"Node Js "}),Object(n.jsx)("li",{className:e.list,children:"Mongoose "}),Object(n.jsx)("li",{className:e.list,children:"MongoDB "})]})]})})]})]}),Object(n.jsx)(f.a,{item:!0,xs:6,sm:6,lg:6,children:Object(n.jsx)(S.a,{className:e.potoPaper,children:Object(n.jsx)("img",{className:e.myPhoto,src:k,alt:"me"})})})]})]})})}var I=a(53),J=a.n(I),T=(a(77),a(52)),Q=a(106),P=a(107),R=a(108),K=a(109),U=Object(O.a)((function(e){return{slideContainer:{marginBottom:"10vmin"},image:{width:"110%",zIndex:"-1",marginTop:"8vmin",marginLeft:"5vmin"},contentContainer:{marginTop:"8vmin"},listUl:{display:"flex",paddingLeft:"10vmin",justifyContent:"space-evenly",marginTop:"3vmin"},list:{"&::marker":{content:"none"}},papper:{backgroundColor:"#1c1d25",color:"white",display:"flex",alignItems:"center",padding:"3vmin",marginTop:"2vmin",marginBottom:"2vmin"},title:{marginBottom:"2vmin"},iconContainer:{display:"flex",justifyContent:"flex-end",marginRight:"4vmin"},icon:{marginRight:"1vmin",padding:"2.5px"},text:{fontFamily:"Noto Sans JP"},textHeader:{fontFamily:"Noto Sans JP",fontWeight:"400"},languagetext:{color:"#FF7272"}}}));function H(){var e=U(),t=Object(T.a)(),a=Object(Q.a)(t.breakpoints.up("sm"));return Object(n.jsxs)(f.a,{container:!0,className:e.slideContainer,children:[Object(n.jsx)(f.a,{item:!0,xs:6,children:Object(n.jsx)("img",{className:e.image,src:"https://i.imgur.com/2zrP3Za.png",alt:"imgur"})}),Object(n.jsxs)(f.a,{className:e.contentContainer,item:!0,xs:5,children:[Object(n.jsx)(C.a,{className:e.textHeader,variant:"body1",align:"right",children:"Project"}),Object(n.jsx)(C.a,{className:"".concat(e.title," ").concat(e.textHeader),variant:"h6",align:"right",children:"Nathan's Recipe blog"}),a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(S.a,{className:e.papper,children:Object(n.jsx)(C.a,{className:e.text,variant:"body1",children:"In one week, I built first full-stack app that shares my recipes from my ex-work place. First user centric CURD project and using Google OAuth authoriztion for users"})}),Object(n.jsx)(S.a,{className:e.papper,children:Object(n.jsxs)(C.a,{className:e.text,variant:"body1",children:[Object(n.jsx)("span",{className:e.languagetext,children:"HTML & CSS & EJS "})," - Frontend structure and styling",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"Express"})," - MVC routing",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"Node Js"})," - Non blocking network process",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"MongoDB"})," - Embedding Like data for recipes data",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"Mongoose"})," - Manage object mapping between Node Js and MongoDB"]})})]}):Object(n.jsx)(n.Fragment,{}),Object(n.jsxs)("div",{className:e.iconContainer,children:[Object(n.jsx)(P.a,{color:"inherit",href:"https://github.com/grey1287/mogoose-blog",children:Object(n.jsx)(R.a,{className:e.icon,fontSize:"large"})}),Object(n.jsx)(P.a,{color:"inherit",href:"https://nathan-recipe.herokuapp.com/",children:Object(n.jsx)(K.a,{fontSize:"large"})})]})]})]})}var D=Object(O.a)((function(e){return{slideContainer:{marginBottom:"10vmin"},image:{width:"90%",zIndex:"-1",marginTop:"8vmin",marginLeft:"4vmin"},contentContainer:{marginTop:"8vmin"},listUl:{display:"flex",paddingLeft:"10vmin",justifyContent:"space-evenly",marginTop:"3vmin"},list:{"&::marker":{content:"none"}},papper:{backgroundColor:"#1c1d25",color:"white",display:"flex",alignItems:"center",padding:"3vmin",marginTop:"2vmin",marginBottom:"2vmin"},title:{marginBottom:"2vmin"},iconContainer:{display:"flex",justifyContent:"flex-end",marginRight:"4vmin"},icon:{marginRight:"1vmin",padding:"2.5px"},text:{fontFamily:"Noto Sans JP"},textHeader:{fontFamily:"Noto Sans JP",fontWeight:"400"},languagetext:{color:"#FF7272"}}}));function W(){var e=D(),t=Object(T.a)(),a=Object(Q.a)(t.breakpoints.up("sm"));return Object(n.jsxs)(f.a,{container:!0,className:e.slideContainer,children:[Object(n.jsx)(f.a,{item:!0,xs:6,children:Object(n.jsx)("img",{className:e.image,src:"https://i.imgur.com/5d0jjKF.png",alt:"imgur"})}),Object(n.jsxs)(f.a,{className:e.contentContainer,item:!0,xs:5,children:[Object(n.jsx)(C.a,{className:e.textHeader,variant:"body1",align:"right",children:"Project"}),Object(n.jsx)(C.a,{className:"".concat(e.title," ").concat(e.textHeader),variant:"h6",align:"right",children:"MineSweeper"}),a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(S.a,{className:e.papper,children:Object(n.jsxs)(C.a,{className:e.text,variant:"body1",children:["I build this game after three weeks of learning to code.",Object(n.jsx)("br",{}),"I thought it would be a fun way for myself and remembering my childhood. Using simple Vanilla JavaScript recursion founction and Web api for display"]})}),Object(n.jsx)(S.a,{className:e.papper,children:Object(n.jsxs)(C.a,{className:e.text,variant:"body1",children:[Object(n.jsx)("span",{className:e.languagetext,children:"HTML & CSS"})," - Frontend structure and styling",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"JavaScript"})," - Logic for MineSweeper",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"DOM"})," - Rendering objects"]})})]}):Object(n.jsx)(n.Fragment,{}),Object(n.jsxs)("div",{className:e.iconContainer,children:[Object(n.jsx)(P.a,{color:"inherit",href:"https://github.com/grey1287/Minesweeper",children:Object(n.jsx)(R.a,{className:e.icon,fontSize:"large"})}),Object(n.jsx)(P.a,{color:"inherit",href:"https://nathansjang.github.io/Minesweeper/",children:Object(n.jsx)(K.a,{fontSize:"large"})})]})]})]})}var M=Object(O.a)((function(e){return{slideContainer:{marginBottom:"10vmin"},image:{width:"100%",zIndex:"-1",marginTop:"8vmin",marginLeft:"5vmin"},contentContainer:{marginTop:"12vmin"},listUl:{display:"flex",paddingLeft:"10vmin",justifyContent:"space-evenly",marginTop:"3vmin"},list:{"&::marker":{content:"none"}},papper:{backgroundColor:"#1c1d25",color:"white",display:"flex",alignItems:"center",padding:"3vmin",marginTop:"2vmin",marginBottom:"2vmin"},title:{marginBottom:"2vmin"},iconContainer:{display:"flex",justifyContent:"flex-end",marginRight:"4vmin"},icon:{marginRight:"1vmin",padding:"2.5px"},text:{fontFamily:"Noto Sans JP"},textHeader:{fontFamily:"Noto Sans JP",fontWeight:"400"},languagetext:{color:"#FF7272"}}}));function E(){var e=M(),t=Object(T.a)(),a=Object(Q.a)(t.breakpoints.up("sm"));return Object(n.jsxs)(f.a,{container:!0,className:e.slideContainer,children:[Object(n.jsx)(f.a,{item:!0,xs:6,children:Object(n.jsx)("img",{className:e.image,src:"https://i.imgur.com/OawVSsG.png",alt:"imgur"})}),Object(n.jsxs)(f.a,{className:e.contentContainer,item:!0,xs:5,children:[Object(n.jsx)(C.a,{className:e.textHeader,variant:"body1",align:"right",children:"Project"}),Object(n.jsx)(C.a,{className:"".concat(e.title," ").concat(e.textHeader),variant:"h6",align:"right",children:"Hackathon Calulator"}),a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(S.a,{className:e.papper,children:Object(n.jsxs)(C.a,{className:e.text,variant:"body1",children:["In the React hackathon, I worked with other developers less than 6 hours to create a Calculator.",Object(n.jsx)("br",{}),"Used Codesandbox for collaboration and deploy."]})}),Object(n.jsx)(S.a,{className:e.papper,children:Object(n.jsxs)(C.a,{className:e.text,variant:"body1",children:[Object(n.jsx)("span",{className:e.languagetext,children:"React & JavaScript"})," - Frontend component",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"HTML & CSS"})," - Styling",Object(n.jsx)("br",{})]})})]}):Object(n.jsx)(n.Fragment,{}),Object(n.jsxs)("div",{className:e.iconContainer,children:[Object(n.jsx)(P.a,{color:"inherit",href:"https://github.com/grey1287/React_Calculator",children:Object(n.jsx)(R.a,{className:e.icon,fontSize:"large"})}),Object(n.jsx)(P.a,{color:"inherit",href:"https://csb-qudbz.netlify.app/",children:Object(n.jsx)(K.a,{fontSize:"large"})})]})]})]})}var L=Object(O.a)((function(e){return{slideContainer:{marginBottom:"10vmin"},image:{width:"110%",zIndex:"-1",marginTop:"8vmin",marginLeft:"4vmin"},contentContainer:{marginTop:"8vmin"},listUl:{display:"flex",paddingLeft:"10vmin",justifyContent:"space-evenly",marginTop:"3vmin"},list:{"&::marker":{content:"none"}},papper:{backgroundColor:"#1c1d25",color:"white",display:"flex",alignItems:"center",padding:"3vmin",marginTop:"2vmin",marginBottom:"2vmin"},title:{marginBottom:"2vmin"},iconContainer:{display:"flex",justifyContent:"flex-end",marginRight:"4vmin"},icon:{marginRight:"1vmin",padding:"2.5px"},text:{fontFamily:"Noto Sans JP"},textHeader:{fontFamily:"Noto Sans JP",fontWeight:"400"},languagetext:{color:"#FF7272"}}}));function z(){var e=L(),t=Object(T.a)(),a=Object(Q.a)(t.breakpoints.up("md")),i=Object(Q.a)(t.breakpoints.up("sm"));return Object(n.jsxs)(f.a,{container:!0,className:a?"".concat(e.slideContainer):"",children:[Object(n.jsx)(f.a,{item:!0,xs:6,children:Object(n.jsx)("img",{className:e.image,src:"https://i.imgur.com/4uB9H5o.png",alt:"imgur"})}),Object(n.jsxs)(f.a,{className:a?"".concat(e.contentContainer):"",item:!0,xs:5,children:[Object(n.jsx)(C.a,{className:e.textHeader,variant:"body1",align:"right",children:"Project"}),Object(n.jsx)(C.a,{className:"".concat(e.title," ").concat(e.textHeader),variant:"h6",align:"right",children:"KUSAKABE"}),i?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(S.a,{className:e.papper,children:Object(n.jsxs)(C.a,{className:e.text,variant:"body1",children:["In one week, I built React full-stack app for my ex-work place named 'KUSAKABE'.",Object(n.jsx)("br",{}),"First MERN stack app using token base user centric CURD and Stripe API for checkout"]})}),Object(n.jsx)(S.a,{className:e.papper,children:Object(n.jsxs)(C.a,{className:e.text,variant:"body1",children:[Object(n.jsx)("span",{className:e.languagetext,children:"React & JavaScript"})," - Frontend component",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"Express"})," - MVC routing",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"Node Js"})," - Non blocking network process",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"MongoDB"})," - Embedding itmes data for order",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"Mongoose"})," - Manage object mapping between Node Js and MongoDB"]})})]}):Object(n.jsx)(n.Fragment,{}),Object(n.jsxs)("div",{className:e.iconContainer,children:[Object(n.jsx)(P.a,{color:"inherit",href:"https://github.com/grey1287/React_kusakabe",children:Object(n.jsx)(R.a,{className:e.icon,fontSize:"large"})}),Object(n.jsx)(P.a,{color:"inherit",href:"https://kusakabe-nj.herokuapp.com/",children:Object(n.jsx)(K.a,{fontSize:"large"})})]})]})]})}var V=Object(O.a)((function(e){return{mainConatiner:{paddingTop:"2vmin",height:"100vh"},slideDiv:{height:"73.5vmins",widows:"122.5vmin"},text:{fontFamily:"Noto Sans JP"},textHeader:{fontFamily:"Noto Sans JP",fontWeight:"500"}}}));function X(){var e=V(),t=Object(n.jsxs)(J.a,{children:[Object(n.jsx)("div",{children:Object(n.jsx)(z,{})}),Object(n.jsx)("div",{children:Object(n.jsx)(E,{})}),Object(n.jsx)("div",{children:Object(n.jsx)(H,{})}),Object(n.jsx)("div",{children:Object(n.jsx)(W,{})})]});return Object(n.jsxs)(m.a,{id:"projcets",className:e.mainConatiner,children:[Object(n.jsx)("h1",{className:e.textHeader,children:"Projects"}),t]})}var Z=a(110),G=a(111),q=a(112),Y=a(18),_=a.n(Y),$=a.p+"static/media/resume.20e809f6.png",ee=Object(O.a)((function(e){return{mainConatiner:{paddingTop:"8vmin",height:"160vh"},title:{marginBottom:"2vmin",fontFamily:"Noto Sans JP"},divider:{backgroundColor:"#FF7272",width:"55%"},contactDiv:{display:"flex",alignItems:"center",marginTop:"1vmin"},contactText:{marginLeft:"1vmin",fontFamily:"Noto Sans JP"},mailtotext:{color:"white",fontFamily:"Noto Sans JP",textDecoration:"none","&:hover":{textDecoration:"underline"}},resumeDiv:{display:"flex",marginTop:"3vmin"},resumeBtn:{marginLeft:"2vmin",fontFamily:"Noto Sans JP"},resumeImg:{marginTop:"5vmin",height:"auto",width:"60%",minWidth:"400px"},text:{fontFamily:"Noto Sans JP"}}}));function te(){var e=ee();return Object(n.jsxs)(m.a,{id:"resume",className:e.mainConatiner,children:[Object(n.jsx)(C.a,{className:e.title,variant:"h4",align:"left",children:"CONTACT"}),Object(n.jsx)(F.a,{className:e.divider}),Object(n.jsxs)(f.a,{xs:12,children:[Object(n.jsxs)("div",{className:e.contactDiv,children:[Object(n.jsx)(Z.a,{}),Object(n.jsx)(C.a,{className:e.contactText,variant:"h6",children:Object(n.jsx)(_.a,{className:e.mailtotext,tel:"415-317-5944"})})]}),Object(n.jsxs)("div",{className:e.contactDiv,children:[Object(n.jsx)(G.a,{}),Object(n.jsx)(C.a,{className:e.contactText,variant:"h6",children:Object(n.jsx)(_.a,{className:e.mailtotext,email:"nathan.s.jang@gmail.com",obfuscate:!0,sytle:{color:"white"}})})]}),Object(n.jsxs)("div",{className:e.contactDiv,children:[Object(n.jsx)(R.a,{}),Object(n.jsx)(P.a,{className:e.contactText,variant:"h6",color:"inherit",href:"https://github.com/NathanSJang",children:"https://github.com/NathanSJang"})]}),Object(n.jsxs)("div",{className:e.contactDiv,children:[Object(n.jsx)(q.a,{}),Object(n.jsx)(P.a,{className:e.contactText,variant:"h6",color:"inherit",href:"https://www.linkedin.com/in/nathan-sb-j/",children:"https://www.linkedin.com/in/nathan-sb-j/"})]})]}),Object(n.jsxs)(f.a,{className:e.resumeDiv,xs:4,children:[Object(n.jsx)(C.a,{className:e.text,variant:"h6",children:"Download "}),Object(n.jsx)(g.a,{className:e.resumeBtn,variant:"outlined",color:"inherit",href:p,children:"resume"})]}),Object(n.jsx)("img",{className:e.resumeImg,src:$,alt:"resume"})]})}var ae=Object(O.a)((function(e){return{container:{height:"70vh",marginTop:"3vmin",paddingTop:"1vmin"},title:{marginBottom:"2vmin",fontFamily:"Noto Sans JP",fontWeight:"400"},touchBtn:{color:"#FF3E55",border:"1px solid #FF3E55",marginTop:"3vmin"},mailtotext:{color:"#FF3E55",textDecoration:"none",fontFamily:"Noto Sans JP"},text:{fontFamily:"Noto Sans JP"}}}));function ne(){var e=ae();return Object(n.jsxs)(m.a,{id:"getInTouch",className:e.container,children:[Object(n.jsx)(C.a,{className:e.title,variant:"h4",children:"Get In Touch"}),Object(n.jsx)(f.a,{xs:12,children:Object(n.jsxs)(C.a,{className:e.text,varinat:"h6",children:["I'm currently looking for any new opportunities, my inbox is always open.",Object(n.jsx)("br",{}),"Whether you have a question or just want to say hi, I'll try my best to get back to you!"]})}),Object(n.jsx)(g.a,{className:e.touchBtn,varinat:"outlined",href:"sbtan1989@gmail.com",children:Object(n.jsx)(_.a,{className:e.mailtotext,email:"nathan.s.jang@gmail.com",obfuscate:!0,sytle:{color:"white"}})})]})}var ie=Object(O.a)((function(e){return{container:{height:"7vh"},text:{fontFamily:"Noto Sans JP"}}}));function se(){var e=ie();return Object(n.jsx)(m.a,{className:e.container,children:Object(n.jsxs)("footer",{children:[Object(n.jsx)(C.a,{className:e.text,variant:"body2",align:"center",children:"Built by Nathan Jang, Designe by Brittany Chaing"}),Object(n.jsx)(C.a,{className:e.text,variant:"body2",align:"center",children:"Thank you"})]})})}var ce=Object(O.a)((function(e){return{FloatingBtnConatiner:{height:"100%",display:"flex",flexDirection:"column",position:"fixed",marginTop:"530px",marginLeft:"1vmin"},vl:{borderLeft:"1px solid #FF7272",height:"300px",marginLeft:"1vmin"},icon:{marginBottom:"1vmin","&:hover":{color:"#FF7272"}}}}));function re(){var e=ce(),t=Object(T.a)(),a=Object(Q.a)(t.breakpoints.up("sm"));return Object(n.jsx)(n.Fragment,{children:a?Object(n.jsxs)("div",{className:e.FloatingBtnConatiner,r:!0,children:[Object(n.jsx)(P.a,{className:e.icon,color:"inherit",href:"https://github.com/NathanSJang",children:Object(n.jsx)(R.a,{})}),Object(n.jsx)(P.a,{className:e.icon,color:"inherit",href:"https://www.linkedin.com/in/nathan-sb-j/",children:Object(n.jsx)(q.a,{})}),Object(n.jsx)("div",{className:e.vl})]}):Object(n.jsx)(n.Fragment,{})})}var oe=Object(O.a)((function(e){return{FloatingBtnConatiner:{height:"100%",display:"flex",flexDirection:"column",position:"fixed",marginTop:"45vmin",float:"right",marginRight:"3vmin",right:"0"},vl:{borderLeft:"1px solid #FF7272",height:"300px",marginLeft:"1vmin"},mail:{writingMode:"vertical-lr",color:"white",textDecoration:"none",marginBottom:"2vmin"}}}));function le(){var e=oe(),t=Object(T.a)(),a=Object(Q.a)(t.breakpoints.up("sm"));return Object(n.jsx)(n.Fragment,{children:a?Object(n.jsxs)("div",{className:e.FloatingBtnConatiner,r:!0,children:[Object(n.jsx)(_.a,{className:e.mail,email:"nathan.s.jang@gmail.com",obfuscate:!0,sytle:{color:"white"}}),Object(n.jsx)("div",{className:e.vl})]}):Object(n.jsx)(n.Fragment,{})})}var me=Object(O.a)((function(e){return{app:{maxWidth:"100%",paddingLeft:0,paddingRight:0},mainContainer:{marginTop:"12vmin",height:"100vh"}}}));function je(){var e=Object(i.useState)(d()),t=Object(l.a)(e,2),a=t[0],s=t[1],c=me();return Object(n.jsxs)("main",{className:"App",children:[Object(n.jsx)(v,{user:a,setUser:s}),Object(n.jsx)(re,{}),Object(n.jsx)(le,{}),Object(n.jsxs)(m.a,{className:c.mainContainer,children:[Object(n.jsx)(y,{}),Object(n.jsx)(w,{}),Object(n.jsx)(X,{}),Object(n.jsx)(te,{}),Object(n.jsx)(ne,{}),Object(n.jsx)(se,{})]})]})}r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(o.a,{children:Object(n.jsx)(je,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.b9af3e43.chunk.js.map