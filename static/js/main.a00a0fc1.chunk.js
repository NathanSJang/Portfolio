(this["webpackJsonpsei-cafe"]=this["webpackJsonpsei-cafe"]||[]).push([[0],{65:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1),s=a.n(i),c=a(14),r=a.n(c),o=a(54),l=(a(65),a(55)),m=a(103);a(17),a(25);function j(){var e=localStorage.getItem("token");return e?JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3?(localStorage.removeItem("token"),null):e:null}function d(){var e=j();return e?JSON.parse(atob(e.split(".")[1])).user:null}var h=a(101),x=a(113),g=a(102),b=a(23),p=a.p+"static/media/Resume.5265f2ff.pdf",O=a(99),v=Object(O.a)((function(e){return{appBar:{margin:"0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start",backgroundColor:"#071B37"},navLinks:{marginRight:e.spacing(2)},toolBar:{marginTop:"2vmin"},logo:{width:"55%",minWidth:"80px",marginTop:"1.2vmin",marginLeft:"-1.5vmin"},logoBtn:{padding:"0"},text:{color:"#FF7272",fontFamily:"Big Shoulders Display",fontSize:"20px"},resumeBtn:{color:"#FF7272",border:"1px solid #FF7272",marginLeft:"2vmin"}}}));function u(){var e=v();return Object(n.jsxs)(h.a,{className:e.appBar,color:"inherit",position:"fixed",children:[Object(n.jsx)(x.a,{className:e.logoBtn,children:Object(n.jsx)(b.Link,{activeClass:"active",to:"welcome",spy:!0,smooth:!0,offset:-70,duration:500,children:Object(n.jsx)("img",{className:e.logo,src:"data:image/png;base64,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",alt:"logo"})})}),Object(n.jsxs)(g.a,{className:e.toolBar,children:[Object(n.jsx)(x.a,{children:Object(n.jsx)(b.Link,{className:e.text,activeClass:"active",to:"aboutme",spy:!0,smooth:!0,offset:-70,duration:500,children:"about me"})}),Object(n.jsx)(x.a,{children:Object(n.jsx)(b.Link,{className:e.text,activeClass:"active",to:"projcets",spy:!0,smooth:!0,offset:-70,duration:500,children:"project"})}),Object(n.jsx)(x.a,{children:Object(n.jsx)(b.Link,{className:e.text,activeClass:"active",to:"resume",spy:!0,smooth:!0,offset:-70,duration:500,children:"Contact"})}),Object(n.jsx)(x.a,{children:Object(n.jsx)(b.Link,{className:e.text,activeClass:"active",to:"getInTouch",spy:!0,smooth:!0,offset:-70,duration:500,children:"Get In Touch"})}),Object(n.jsx)(x.a,{className:e.resumeBtn,variant:"outlined",href:p,children:"Resume"})]})]})}var f=a(104),N=a(114),y=a(82),C=Object(O.a)((function(e){return{welcomeConatainer:{height:"90vh"},paddingTop:{paddingTop:"20vmin"},title:{marginBottom:"2vmin",fontFamily:"Noto Sans JP",fontWeight:"400"},text:{fontFamily:"Noto Sans JP",fontWeight:"300"}}}));function A(){var e=C();return Object(n.jsx)(m.a,{id:"welcome",className:e.welcomeConatainer,children:Object(n.jsxs)(f.a,{className:e.paddingTop,container:!0,children:[Object(n.jsxs)(f.a,{xs:12,children:[Object(n.jsx)(N.a,{in:!0,timeout:1500,children:Object(n.jsx)(y.a,{style:{color:"#FF7272"},className:e.title,variant:"h6",children:"Hi, My name is"})}),Object(n.jsx)(N.a,{in:!0,timeout:2500,children:Object(n.jsx)(y.a,{className:e.title,variant:"h2",children:"Nathan S Jang"})})]}),Object(n.jsx)(f.a,{xs:12,children:Object(n.jsx)(N.a,{in:!0,timeout:2800,children:Object(n.jsxs)(y.a,{className:e.text,variant:"h6",children:["I'm a software engineer based in San Francisco, CA.",Object(n.jsx)("br",{}),"I have strong passion for learning, maintaining, and improving complex systems."]})})})]})})}var F=a(105),B=a(80),w=a.p+"static/media/nathan.5ced9040.jpeg",S=Object(O.a)((function(e){return{container:{height:"130vh",marginTop:"3vmin",paddingTop:"20vmin"},title:{marginBottom:"2vmin",fontFamily:"Noto Sans JP"},divider:{backgroundColor:"#FF7272",width:"55%"},listContainer:{display:"flex",justifyContent:"space-between"},technologiesContainer:{marginTop:"3vmin"},textContainer:{marginTop:"3vmin",fontFamily:"Noto Sans JP"},list:{"&::marker":{content:'"\u25b9"',color:"#FF7272",marginRight:"1vmin"},paddingLeft:"1vmin"},text:{fontFamily:"Noto Sans JP"},textHeader:{fontFamily:"Noto Sans JP",fontWeight:"400"},myPhoto:{maxHeight:"300px",maxWidth:"300px",marginLeft:"auto",marginRight:"auto",display:"block"},potoPaper:{maxWidth:"280px"}}}));function k(){var e=S();return Object(n.jsx)(m.a,{id:"aboutme",className:e.container,children:Object(n.jsxs)("div",{children:[Object(n.jsx)(y.a,{className:e.title,variant:"h4",align:"left",children:"About Me"}),Object(n.jsx)(F.a,{className:e.divider}),Object(n.jsxs)(f.a,{className:e.textContainer,container:!0,spacing:3,children:[Object(n.jsxs)(f.a,{item:!0,xs:12,lg:6,children:[Object(n.jsx)(y.a,{className:e.text,variant:"h6",children:"Software Engineer with a background in the Michelin starred culinary scene for over 8 years. I am a self starter who is a reliable and responsible individual, having experience in high pressure and fast paced working environments, successfully producing finest quality end results. I have a strong passion for learning, maintaining, and improving complex systems."}),Object(n.jsxs)("div",{className:e.technologiesContainer,children:[Object(n.jsx)(y.a,{className:e.textHeader,variant:"h6",children:"Technologies"}),Object(n.jsx)(f.a,{xs:12,children:Object(n.jsxs)("ul",{className:e.listContainer,children:[Object(n.jsxs)(f.a,{xs:6,children:[Object(n.jsx)("li",{className:e.list,children:"React & Redux "}),Object(n.jsx)("li",{className:e.list,children:"Next Js "}),Object(n.jsx)("li",{className:e.list,children:"JavaScript"}),Object(n.jsx)("li",{className:e.list,children:"HTML & CSS "})]}),Object(n.jsxs)(f.a,{xs:6,children:[Object(n.jsx)("li",{className:e.list,children:"Node Js "}),Object(n.jsx)("li",{className:e.list,children:"GraphQL & Apollo Server "}),Object(n.jsx)("li",{className:e.list,children:"Mongoose & Sequelize "}),Object(n.jsx)("li",{className:e.list,children:"MongoDB & PostgreSQL "})]})]})})]})]}),Object(n.jsx)(f.a,{item:!0,xs:6,sm:6,lg:6,children:Object(n.jsx)(B.a,{className:e.potoPaper,children:Object(n.jsx)("img",{className:e.myPhoto,src:w,alt:"me"})})})]})]})})}var T=a(53),J=a.n(T),I=(a(77),a(52)),L=a(106),M=a(107),H=a(108),D=a(109),E=Object(O.a)((function(e){return{slideContainer:{marginBottom:"10vmin"},image:{width:"110%",zIndex:"-1",marginTop:"8vmin",marginLeft:"5vmin"},contentContainer:{marginTop:"8vmin"},listUl:{display:"flex",paddingLeft:"10vmin",justifyContent:"space-evenly",marginTop:"3vmin"},list:{"&::marker":{content:"none"}},papper:{backgroundColor:"#1c1d25",color:"white",display:"flex",alignItems:"center",padding:"3vmin",marginTop:"2vmin",marginBottom:"2vmin"},title:{marginBottom:"2vmin"},iconContainer:{display:"flex",justifyContent:"flex-end",marginRight:"4vmin"},icon:{marginRight:"1vmin",padding:"2.5px"},text:{fontFamily:"Noto Sans JP"},textHeader:{fontFamily:"Noto Sans JP",fontWeight:"400"},languagetext:{color:"#FF7272"}}}));function R(){var e=E(),t=Object(I.a)(),a=Object(L.a)(t.breakpoints.up("sm"));return Object(n.jsxs)(f.a,{container:!0,className:e.slideContainer,children:[Object(n.jsx)(f.a,{item:!0,xs:6,children:Object(n.jsx)("img",{className:e.image,src:"https://i.imgur.com/2zrP3Za.png",alt:"imgur"})}),Object(n.jsxs)(f.a,{className:e.contentContainer,item:!0,xs:5,children:[Object(n.jsx)(y.a,{className:e.textHeader,variant:"body1",align:"right",children:"Project"}),Object(n.jsx)(y.a,{className:"".concat(e.title," ").concat(e.textHeader),variant:"h6",align:"right",children:"Nathan's Recipe blog"}),a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(B.a,{className:e.papper,children:Object(n.jsx)(y.a,{className:e.text,variant:"body1",children:"In one week, I built first full-stack app that shares my recipes from my ex-work place. First user centric CURD project and using Google OAuth authoriztion for users"})}),Object(n.jsx)(B.a,{className:e.papper,children:Object(n.jsxs)(y.a,{className:e.text,variant:"body1",children:[Object(n.jsx)("span",{className:e.languagetext,children:"HTML & CSS & EJS "})," - Frontend structure and styling",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"Express"})," - MVC routing",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"Node Js"})," - Non blocking network process",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"MongoDB"})," - Embedding Like data for recipes data",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"Mongoose"})," - Manage object mapping between Node Js and MongoDB"]})})]}):Object(n.jsx)(n.Fragment,{}),Object(n.jsxs)("div",{className:e.iconContainer,children:[Object(n.jsx)(M.a,{color:"inherit",href:"https://github.com/grey1287/mogoose-blog",children:Object(n.jsx)(H.a,{className:e.icon,fontSize:"large"})}),Object(n.jsx)(M.a,{color:"inherit",href:"https://nathan-recipe.herokuapp.com/",children:Object(n.jsx)(D.a,{fontSize:"large"})})]})]})]})}var P=Object(O.a)((function(e){return{slideContainer:{marginBottom:"10vmin"},image:{width:"90%",zIndex:"-1",marginTop:"8vmin",marginLeft:"4vmin"},image1:{width:"90%",zIndex:"-1",marginTop:"3vmin",marginLeft:"4vmin"},contentContainer:{marginTop:"8vmin"},listUl:{display:"flex",paddingLeft:"10vmin",justifyContent:"space-evenly",marginTop:"3vmin"},list:{"&::marker":{content:"none"}},papper:{backgroundColor:"#1c1d25",color:"white",display:"flex",alignItems:"center",padding:"3vmin",marginTop:"2vmin",marginBottom:"2vmin"},title:{marginBottom:"2vmin"},iconContainer:{display:"flex",justifyContent:"flex-end",marginRight:"4vmin"},icon:{marginRight:"1vmin",padding:"2.5px"},text:{fontFamily:"Noto Sans JP"},textHeader:{fontFamily:"Noto Sans JP",fontWeight:"400"},languagetext:{color:"#FF7272"}}}));function U(){var e=P(),t=Object(I.a)(),a=Object(L.a)(t.breakpoints.up("sm"));return Object(n.jsxs)(f.a,{container:!0,className:e.slideContainer,children:[Object(n.jsxs)(f.a,{item:!0,xs:6,children:[Object(n.jsx)("img",{className:e.image,src:"https://i.imgur.com/gGgSiMX.png",alt:"imgur"}),Object(n.jsx)("img",{className:e.image1,src:"https://i.imgur.com/4RYFoxA.png",alt:"imgur2"})]}),Object(n.jsxs)(f.a,{className:e.contentContainer,item:!0,xs:5,children:[Object(n.jsx)(y.a,{className:e.textHeader,variant:"body1",align:"right",children:"Project"}),Object(n.jsx)(y.a,{className:"".concat(e.title," ").concat(e.textHeader),variant:"h6",align:"right",children:"Chat_Chat"}),a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(B.a,{className:e.papper,children:Object(n.jsxs)(y.a,{className:e.text,variant:"body1",children:["React Code-along",Object(n.jsx)("br",{}),"Build live chat app for people working from home using React, GraphQL"]})}),Object(n.jsx)(B.a,{className:e.papper,children:Object(n.jsxs)(y.a,{className:e.text,variant:"body1",children:[Object(n.jsx)("span",{className:e.languagetext,children:"React & Bootstrap"})," - Frontend structure and styling",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"GraphQL & Apollo Server"})," - Using GraphQL query ",Object(n.jsx)("br",{}),Object(n.jsx)("span",{style:{paddingLeft:"200px"},children:"load data from database"}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"PostgreSQL"})," - Database for app",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"Sequelize"})," - Object-relational mapping for Postgres",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"AWS"})," - Depolyment for app"]})})]}):Object(n.jsx)(n.Fragment,{}),Object(n.jsxs)("div",{className:e.iconContainer,children:[Object(n.jsx)(M.a,{color:"inherit",href:"https://github.com/NathanSJang/react_chat",children:Object(n.jsx)(H.a,{className:e.icon,fontSize:"large"})}),Object(n.jsx)(M.a,{color:"inherit",href:"http://nathan-react-chat.com",children:Object(n.jsx)(D.a,{fontSize:"large"})})]})]})]})}var Q=Object(O.a)((function(e){return{slideContainer:{marginBottom:"10vmin"},image:{width:"100%",zIndex:"-1",marginTop:"8vmin",marginLeft:"5vmin"},contentContainer:{marginTop:"12vmin"},listUl:{display:"flex",paddingLeft:"10vmin",justifyContent:"space-evenly",marginTop:"3vmin"},list:{"&::marker":{content:"none"}},papper:{backgroundColor:"#1c1d25",color:"white",display:"flex",alignItems:"center",padding:"3vmin",marginTop:"2vmin",marginBottom:"2vmin"},title:{marginBottom:"2vmin"},iconContainer:{display:"flex",justifyContent:"flex-end",marginRight:"4vmin"},icon:{marginRight:"1vmin",padding:"2.5px"},text:{fontFamily:"Noto Sans JP"},textHeader:{fontFamily:"Noto Sans JP",fontWeight:"400"},languagetext:{color:"#FF7272"}}}));function z(){var e=Q(),t=Object(I.a)(),a=Object(L.a)(t.breakpoints.up("sm"));return Object(n.jsxs)(f.a,{container:!0,className:e.slideContainer,children:[Object(n.jsx)(f.a,{item:!0,xs:6,children:Object(n.jsx)("img",{className:e.image,src:"https://i.imgur.com/OawVSsG.png",alt:"imgur"})}),Object(n.jsxs)(f.a,{className:e.contentContainer,item:!0,xs:5,children:[Object(n.jsx)(y.a,{className:e.textHeader,variant:"body1",align:"right",children:"Project"}),Object(n.jsx)(y.a,{className:"".concat(e.title," ").concat(e.textHeader),variant:"h6",align:"right",children:"Hackathon Calulator"}),a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(B.a,{className:e.papper,children:Object(n.jsxs)(y.a,{className:e.text,variant:"body1",children:["In the React hackathon, I worked with other developers less than 6 hours to create a Calculator.",Object(n.jsx)("br",{}),"Used Codesandbox for collaboration and deploy."]})}),Object(n.jsx)(B.a,{className:e.papper,children:Object(n.jsxs)(y.a,{className:e.text,variant:"body1",children:[Object(n.jsx)("span",{className:e.languagetext,children:"React & JavaScript"})," - Frontend component",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"HTML & CSS"})," - Styling",Object(n.jsx)("br",{})]})})]}):Object(n.jsx)(n.Fragment,{}),Object(n.jsxs)("div",{className:e.iconContainer,children:[Object(n.jsx)(M.a,{color:"inherit",href:"https://github.com/grey1287/React_Calculator",children:Object(n.jsx)(H.a,{className:e.icon,fontSize:"large"})}),Object(n.jsx)(M.a,{color:"inherit",href:"https://csb-qudbz.netlify.app/",children:Object(n.jsx)(D.a,{fontSize:"large"})})]})]})]})}var W=Object(O.a)((function(e){return{slideContainer:{marginBottom:"10vmin"},image:{width:"110%",zIndex:"-1",marginTop:"8vmin",marginLeft:"4vmin"},contentContainer:{marginTop:"8vmin"},listUl:{display:"flex",paddingLeft:"10vmin",justifyContent:"space-evenly",marginTop:"3vmin"},list:{"&::marker":{content:"none"}},papper:{backgroundColor:"#1c1d25",color:"white",display:"flex",alignItems:"center",padding:"3vmin",marginTop:"2vmin",marginBottom:"2vmin"},title:{marginBottom:"2vmin"},iconContainer:{display:"flex",justifyContent:"flex-end",marginRight:"4vmin"},icon:{marginRight:"1vmin",padding:"2.5px"},text:{fontFamily:"Noto Sans JP"},textHeader:{fontFamily:"Noto Sans JP",fontWeight:"400"},languagetext:{color:"#FF7272"}}}));function K(){var e=W(),t=Object(I.a)(),a=Object(L.a)(t.breakpoints.up("md")),i=Object(L.a)(t.breakpoints.up("sm"));return Object(n.jsxs)(f.a,{container:!0,className:a?"".concat(e.slideContainer):"",children:[Object(n.jsx)(f.a,{item:!0,xs:6,children:Object(n.jsx)("img",{className:e.image,src:"https://i.imgur.com/4uB9H5o.png",alt:"imgur"})}),Object(n.jsxs)(f.a,{className:a?"".concat(e.contentContainer):"",item:!0,xs:5,children:[Object(n.jsx)(y.a,{className:e.textHeader,variant:"body1",align:"right",children:"Project"}),Object(n.jsx)(y.a,{className:"".concat(e.title," ").concat(e.textHeader),variant:"h6",align:"right",children:"KUSAKABE"}),i?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(B.a,{className:e.papper,children:Object(n.jsxs)(y.a,{className:e.text,variant:"body1",children:["In one week, I built React full-stack app for my ex-work place named 'KUSAKABE'.",Object(n.jsx)("br",{}),"First MERN stack app using token base user centric CURD and Stripe API for checkout"]})}),Object(n.jsx)(B.a,{className:e.papper,children:Object(n.jsxs)(y.a,{className:e.text,variant:"body1",children:[Object(n.jsx)("span",{className:e.languagetext,children:"React & JavaScript"})," - Frontend component",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"React Hooks"})," - Mange React states",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"Express"})," - MVC routing",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"Node Js"})," - Non blocking network process",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"MongoDB"})," - Embedding itmes data for order",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"Mongoose"})," - Manage object mapping between Node Js and MongoDB"]})})]}):Object(n.jsx)(n.Fragment,{}),Object(n.jsxs)("div",{className:e.iconContainer,children:[Object(n.jsx)(M.a,{color:"inherit",href:"https://github.com/grey1287/React_kusakabe",children:Object(n.jsx)(H.a,{className:e.icon,fontSize:"large"})}),Object(n.jsx)(M.a,{color:"inherit",href:"https://kusakabe-nj.herokuapp.com/",children:Object(n.jsx)(D.a,{fontSize:"large"})})]})]})]})}var Y=Object(O.a)((function(e){return{slideContainer:{marginBottom:"10vmin"},image:{width:"110%",zIndex:"-1",marginTop:"8vmin",marginLeft:"4vmin"},contentContainer:{marginTop:"8vmin"},listUl:{display:"flex",paddingLeft:"10vmin",justifyContent:"space-evenly",marginTop:"3vmin"},list:{"&::marker":{content:"none"}},papper:{backgroundColor:"#1c1d25",color:"white",display:"flex",alignItems:"center",padding:"3vmin",marginTop:"2vmin",marginBottom:"2vmin"},title:{marginBottom:"2vmin"},iconContainer:{display:"flex",justifyContent:"flex-end",marginRight:"4vmin"},icon:{marginRight:"1vmin",padding:"2.5px"},text:{fontFamily:"Noto Sans JP"},textHeader:{fontFamily:"Noto Sans JP",fontWeight:"400"},languagetext:{color:"#FF7272"}}}));function G(){var e=Y(),t=Object(I.a)(),a=Object(L.a)(t.breakpoints.up("md")),i=Object(L.a)(t.breakpoints.up("sm"));return Object(n.jsxs)(f.a,{container:!0,className:a?"".concat(e.slideContainer):"",children:[Object(n.jsx)(f.a,{item:!0,xs:6,children:Object(n.jsx)("img",{className:e.image,src:"https://i.imgur.com/wCoNAA4.png",alt:"imgur"})}),Object(n.jsxs)(f.a,{className:a?"".concat(e.contentContainer):"",item:!0,xs:5,children:[Object(n.jsx)(y.a,{className:e.textHeader,variant:"body1",align:"right",children:"Project"}),Object(n.jsx)(y.a,{className:"".concat(e.title," ").concat(e.textHeader),variant:"h6",align:"right",children:"Memories"}),i?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(B.a,{className:e.papper,children:Object(n.jsxs)(y.a,{className:e.text,variant:"body1",children:["React Code-along",Object(n.jsx)("br",{}),"Build SNS sytle MERN stack app for people's memories using Google OAuth and token base user centric CURD"]})}),Object(n.jsx)(B.a,{className:e.papper,children:Object(n.jsxs)(y.a,{className:e.text,variant:"body1",children:[Object(n.jsx)("span",{className:e.languagetext,children:"React & JavaScript"})," - Frontend component",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"Redux"})," - Manage React states",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"Express"})," - MVC routing",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"Node Js"})," - Non blocking network process",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"MongoDB"})," - data server",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:e.languagetext,children:"Mongoose"})," - Manage object mapping between Node Js and MongoDB"]})})]}):Object(n.jsx)(n.Fragment,{}),Object(n.jsxs)("div",{className:e.iconContainer,children:[Object(n.jsx)(M.a,{color:"inherit",href:"https://github.com/NathanSJang/React_memories",children:Object(n.jsx)(H.a,{className:e.icon,fontSize:"large"})}),Object(n.jsx)(M.a,{color:"inherit",href:"https://memories-nj.herokuapp.com/",children:Object(n.jsx)(D.a,{fontSize:"large"})})]})]})]})}var V=Object(O.a)((function(e){return{mainConatiner:{paddingTop:"2vmin",height:"100vh"},slideDiv:{height:"73.5vmins",widows:"122.5vmin"},text:{fontFamily:"Noto Sans JP"},textHeader:{fontFamily:"Noto Sans JP",fontWeight:"500"}}}));function X(){var e=V(),t=Object(n.jsxs)(J.a,{children:[Object(n.jsx)("div",{children:Object(n.jsx)(U,{})}),Object(n.jsx)("div",{children:Object(n.jsx)(K,{})}),Object(n.jsx)("div",{children:Object(n.jsx)(G,{})}),Object(n.jsx)("div",{children:Object(n.jsx)(z,{})}),Object(n.jsx)("div",{children:Object(n.jsx)(R,{})})]});return Object(n.jsxs)(m.a,{id:"projcets",className:e.mainConatiner,children:[Object(n.jsx)("h1",{className:e.textHeader,children:"Projects"}),t]})}var Z=a(110),q=a(111),_=a(112),$=a(18),ee=a.n($),te=a.p+"static/media/resume.2a2e7d6d.png",ae=Object(O.a)((function(e){return{mainConatiner:{paddingTop:"8vmin",height:"160vh"},title:{marginBottom:"2vmin",fontFamily:"Noto Sans JP"},divider:{backgroundColor:"#FF7272",width:"55%"},contactDiv:{display:"flex",alignItems:"center",marginTop:"1vmin"},contactText:{marginLeft:"1vmin",fontFamily:"Noto Sans JP"},mailtotext:{color:"white",fontFamily:"Noto Sans JP",textDecoration:"none","&:hover":{textDecoration:"underline"}},resumeDiv:{display:"flex",marginTop:"3vmin"},resumeBtn:{marginLeft:"2vmin",fontFamily:"Noto Sans JP"},resumeImg:{marginTop:"5vmin",height:"auto",width:"60%",minWidth:"400px"},text:{fontFamily:"Noto Sans JP"}}}));function ne(){var e=ae();return Object(n.jsxs)(m.a,{id:"resume",className:e.mainConatiner,children:[Object(n.jsx)(y.a,{className:e.title,variant:"h4",align:"left",children:"CONTACT"}),Object(n.jsx)(F.a,{className:e.divider}),Object(n.jsxs)(f.a,{xs:12,children:[Object(n.jsxs)("div",{className:e.contactDiv,children:[Object(n.jsx)(Z.a,{}),Object(n.jsx)(y.a,{className:e.contactText,variant:"h6",children:Object(n.jsx)(ee.a,{className:e.mailtotext,tel:"415-317-5944"})})]}),Object(n.jsxs)("div",{className:e.contactDiv,children:[Object(n.jsx)(q.a,{}),Object(n.jsx)(y.a,{className:e.contactText,variant:"h6",children:Object(n.jsx)(ee.a,{className:e.mailtotext,email:"nathan.s.jang@gmail.com",obfuscate:!0,sytle:{color:"white"}})})]}),Object(n.jsxs)("div",{className:e.contactDiv,children:[Object(n.jsx)(H.a,{}),Object(n.jsx)(M.a,{className:e.contactText,variant:"h6",color:"inherit",href:"https://github.com/NathanSJang",children:"https://github.com/NathanSJang"})]}),Object(n.jsxs)("div",{className:e.contactDiv,children:[Object(n.jsx)(_.a,{}),Object(n.jsx)(M.a,{className:e.contactText,variant:"h6",color:"inherit",href:"https://www.linkedin.com/in/nathan-sb-j/",children:"https://www.linkedin.com/in/nathan-sb-j/"})]})]}),Object(n.jsxs)(f.a,{className:e.resumeDiv,xs:4,children:[Object(n.jsx)(y.a,{className:e.text,variant:"h6",children:"Download "}),Object(n.jsx)(x.a,{className:e.resumeBtn,variant:"outlined",color:"inherit",href:p,children:"resume"})]}),Object(n.jsx)("img",{className:e.resumeImg,src:te,alt:"resume"})]})}var ie=Object(O.a)((function(e){return{container:{height:"70vh",marginTop:"3vmin",paddingTop:"1vmin"},title:{marginBottom:"2vmin",fontFamily:"Noto Sans JP",fontWeight:"400"},touchBtn:{color:"#FF3E55",border:"1px solid #FF3E55",marginTop:"3vmin"},mailtotext:{color:"#FF3E55",textDecoration:"none",fontFamily:"Noto Sans JP"},text:{fontFamily:"Noto Sans JP"}}}));function se(){var e=ie();return Object(n.jsxs)(m.a,{id:"getInTouch",className:e.container,children:[Object(n.jsx)(y.a,{className:e.title,variant:"h4",children:"Get In Touch"}),Object(n.jsx)(f.a,{xs:12,children:Object(n.jsxs)(y.a,{className:e.text,varinat:"h6",children:["I'm currently looking for any new opportunities, my inbox is always open.",Object(n.jsx)("br",{}),"Whether you have a question or just want to say hi, I'll try my best to get back to you!"]})}),Object(n.jsx)(x.a,{className:e.touchBtn,varinat:"outlined",href:"sbtan1989@gmail.com",children:Object(n.jsx)(ee.a,{className:e.mailtotext,email:"nathan.s.jang@gmail.com",obfuscate:!0,sytle:{color:"white"}})})]})}var ce=Object(O.a)((function(e){return{container:{height:"7vh"},text:{fontFamily:"Noto Sans JP"}}}));function re(){var e=ce();return Object(n.jsx)(m.a,{className:e.container,children:Object(n.jsxs)("footer",{children:[Object(n.jsx)(y.a,{className:e.text,variant:"body2",align:"center",children:"Built by Nathan Jang, Designe by Brittany Chaing"}),Object(n.jsx)(y.a,{className:e.text,variant:"body2",align:"center",children:"Thank you"})]})})}var oe=Object(O.a)((function(e){return{FloatingBtnConatiner:{height:"100%",display:"flex",flexDirection:"column",position:"fixed",marginTop:"530px",marginLeft:"1vmin"},vl:{borderLeft:"1px solid #FF7272",height:"300px",marginLeft:"1vmin"},icon:{marginBottom:"1vmin","&:hover":{color:"#FF7272"}}}}));function le(){var e=oe(),t=Object(I.a)(),a=Object(L.a)(t.breakpoints.up("sm"));return Object(n.jsx)(n.Fragment,{children:a?Object(n.jsxs)("div",{className:e.FloatingBtnConatiner,r:!0,children:[Object(n.jsx)(M.a,{className:e.icon,color:"inherit",href:"https://github.com/NathanSJang",children:Object(n.jsx)(H.a,{})}),Object(n.jsx)(M.a,{className:e.icon,color:"inherit",href:"https://www.linkedin.com/in/nathan-sb-j/",children:Object(n.jsx)(_.a,{})}),Object(n.jsx)("div",{className:e.vl})]}):Object(n.jsx)(n.Fragment,{})})}var me=Object(O.a)((function(e){return{FloatingBtnConatiner:{height:"100%",display:"flex",flexDirection:"column",position:"fixed",marginTop:"45vmin",float:"right",marginRight:"3vmin",right:"0"},vl:{borderLeft:"1px solid #FF7272",height:"300px",marginLeft:"1vmin"},mail:{writingMode:"vertical-lr",color:"white",textDecoration:"none",marginBottom:"2vmin"}}}));function je(){var e=me(),t=Object(I.a)(),a=Object(L.a)(t.breakpoints.up("sm"));return Object(n.jsx)(n.Fragment,{children:a?Object(n.jsxs)("div",{className:e.FloatingBtnConatiner,r:!0,children:[Object(n.jsx)(ee.a,{className:e.mail,email:"nathan.s.jang@gmail.com",obfuscate:!0,sytle:{color:"white"}}),Object(n.jsx)("div",{className:e.vl})]}):Object(n.jsx)(n.Fragment,{})})}var de=Object(O.a)((function(e){return{app:{maxWidth:"100%",paddingLeft:0,paddingRight:0},mainContainer:{marginTop:"12vmin",height:"100vh"}}}));function he(){var e=Object(i.useState)(d()),t=Object(l.a)(e,2),a=t[0],s=t[1],c=de();return Object(n.jsxs)("main",{className:"App",children:[Object(n.jsx)(u,{user:a,setUser:s}),Object(n.jsx)(le,{}),Object(n.jsx)(je,{}),Object(n.jsxs)(m.a,{className:c.mainContainer,children:[Object(n.jsx)(A,{}),Object(n.jsx)(k,{}),Object(n.jsx)(X,{}),Object(n.jsx)(ne,{}),Object(n.jsx)(se,{}),Object(n.jsx)(re,{})]})]})}r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(o.a,{children:Object(n.jsx)(he,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.a00a0fc1.chunk.js.map