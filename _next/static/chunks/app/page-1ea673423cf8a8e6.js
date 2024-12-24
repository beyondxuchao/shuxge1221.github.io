(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{3686:()=>{},2383:()=>{},5267:(e,t,a)=>{Promise.resolve().then(a.bind(a,3829))},3829:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>O});var r=a(5155),l=a(2115),n=a(4081),s=a(8684),o=a(9022);function i(e){let{onFileSelect:t}=e,a=(0,l.useCallback)(e=>{e.length>0&&t(e[0])},[t]),{getRootProps:n,getInputProps:i,isDragActive:c}=(0,o.VB)({onDrop:a,accept:{"text/csv":[".csv"]},multiple:!1});return(0,r.jsxs)("div",{...n(),className:"border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors\n        ".concat(c?"border-primary bg-primary/5":"border-border hover:border-primary"),children:[(0,r.jsx)("input",{...i()}),(0,r.jsx)(s.A,{className:"w-16 h-16 mx-auto mb-6 ".concat(c?"text-primary":"text-gray-400")}),(0,r.jsx)("p",{className:"text-xl font-medium text-gray-900",children:c?"Drop your CSV file here":"Drag & drop your CSV file here"}),(0,r.jsx)("p",{className:"mt-2 text-sm text-gray-600",children:"or click to select a file"})]})}var c=a(1556),d=a(853),u=a(1981),m=a(1290),p=a(1027),x=a(3463),h=a(9795);let v=(0,p.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),g=l.forwardRef((e,t)=>{let{className:a,variant:l,size:n,asChild:s=!1,...o}=e,i=s?m.DX:"button";return(0,r.jsx)(i,{className:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,h.QP)((0,x.$)(t))}(v({variant:l,size:n,className:a})),ref:t,...o})});g.displayName="Button";var f=a(2772),b=a(2060);function j(e){let{filter:t,columns:a,onUpdate:l,onRemove:n,isOnly:s,onAdd:o}=e,i=e=>{let t=[{value:"equals",label:"等于"},{value:"notEquals",label:"不等于"},{value:"isNull",label:"为空"},{value:"isNotNull",label:"不为空"}];switch(e){case"text":return[...t,{value:"contains",label:"包含"},{value:"notContains",label:"不包含"},{value:"startsWith",label:"以...开头"},{value:"endsWith",label:"以...结尾"}];case"number":return[...t,{value:"greaterThan",label:"大于"},{value:"lessThan",label:"小于"},{value:"between",label:"在...之间"}];case"date":return[...t,{value:"before",label:"早于"},{value:"after",label:"晚于"},{value:"onDate",label:"在日期"},{value:"between",label:"在...之间"}];default:return t}},c=a.find(e=>e.name===t.column),d=c?i(c.type):[];return(0,r.jsxs)("div",{className:"flex flex-wrap items-center gap-4",children:[(0,r.jsxs)("select",{className:"flex-1 min-w-[200px] p-2 border rounded-md",value:t.column,onChange:e=>{let r=a.find(t=>t.name===e.target.value);r&&l({...t,column:r.name,columnType:r.type,operator:i(r.type)[0].value,value:""})},children:[(0,r.jsx)("option",{value:"",children:"选择列"}),a.map(e=>(0,r.jsx)("option",{value:e.name,children:e.name},e.name))]}),(0,r.jsx)("select",{className:"flex-1 min-w-[150px] p-2 border rounded-md",value:t.operator,onChange:e=>l({...t,operator:e.target.value}),children:d.map(e=>(0,r.jsx)("option",{value:e.value,children:e.label},e.value))}),"isNull"!==t.operator&&"isNotNull"!==t.operator&&("between"===t.operator?(0,r.jsxs)("div",{className:"flex-1 min-w-[200px] flex gap-2",children:[(0,r.jsx)("input",{type:(null==c?void 0:c.type)==="date"?"date":"text",className:"flex-1 p-2 border rounded-md",placeholder:"起始值...",value:t.value[0]||"",onChange:e=>l({...t,value:[e.target.value,t.value[1]||""]})}),(0,r.jsx)("input",{type:(null==c?void 0:c.type)==="date"?"date":"text",className:"flex-1 p-2 border rounded-md",placeholder:"结束值...",value:t.value[1]||"",onChange:e=>l({...t,value:[t.value[0]||"",e.target.value]})})]}):(0,r.jsx)("input",{type:(null==c?void 0:c.type)==="date"?"date":"text",className:"flex-1 min-w-[200px] p-2 border rounded-md",placeholder:"输入值...",value:t.value,onChange:e=>l({...t,value:e.target.value})})),(0,r.jsxs)("div",{className:"flex gap-2",children:[!s&&(0,r.jsx)(g,{onClick:n,variant:"ghost",size:"icon",className:"text-red-500 hover:text-red-600 hover:bg-red-100",title:"移除过滤条件",children:(0,r.jsx)(f.A,{className:"w-5 h-5"})}),(0,r.jsx)(g,{onClick:o,variant:"ghost",size:"icon",className:"text-primary hover:text-primary-dark hover:bg-primary/10",title:"添加过滤条件",children:(0,r.jsx)(b.A,{className:"w-5 h-5"})})]})]})}let N={filters:[{id:"1",column:"",operator:"contains",value:"",columnType:"text"}],conjunction:"AND"},y={filters:[],conjunction:"AND"};function w(e){let{columns:t,onQueryChange:a,onExport:n,exportFormat:s,setExportFormat:o}=e,[i,m]=(0,l.useState)(N),p=(e,t)=>{let a=[...i.filters];a[e]=t,m({...i,filters:a})},x=e=>{let t=i.filters.filter((t,a)=>a!==e);m({...i,filters:t})},h=()=>{m({...i,filters:[...i.filters,{id:String(Date.now()),column:"",operator:"contains",value:"",columnType:"text"}]})},v=i.filters.some(e=>e.column&&("isNull"===e.operator||"isNotNull"===e.operator||e.value));return(0,r.jsxs)("div",{className:"bg-white rounded-lg shadow-sm border border-border p-6 space-y-6",children:[(0,r.jsx)("div",{className:"space-y-4",children:i.filters.map((e,a)=>(0,r.jsx)(j,{filter:e,columns:t,onUpdate:e=>p(a,e),onRemove:()=>x(a),isOnly:1===i.filters.length,onAdd:h},e.id))}),(0,r.jsxs)("div",{className:"flex items-center justify-between pt-6 border-t border-border",children:[(0,r.jsxs)("select",{className:"px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors",value:i.conjunction,onChange:e=>m({...i,conjunction:e.target.value}),children:[(0,r.jsx)("option",{value:"AND",children:"匹配所有过滤条件 (AND)"}),(0,r.jsx)("option",{value:"OR",children:"匹配任意过滤条件 (OR)"})]}),(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsxs)(g,{onClick:()=>{m(N),a(y)},variant:"outline",className:"flex items-center gap-2",disabled:!v,children:[(0,r.jsx)(c.A,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"hidden sm:inline",children:"重置"})]}),(0,r.jsxs)(g,{onClick:()=>{let e=i.filters.filter(e=>e.column&&("isNull"===e.operator||"isNotNull"===e.operator||e.value));e.length>0&&a({...i,filters:e})},className:"flex items-center gap-2",disabled:!v,children:[(0,r.jsx)(d.A,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"hidden sm:inline",children:"应用过滤条件"})]}),(0,r.jsxs)("select",{className:"px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors",value:s,onChange:e=>o(e.target.value),children:[(0,r.jsx)("option",{value:"csv",children:"CSV"}),(0,r.jsx)("option",{value:"xls",children:"XLS"}),(0,r.jsx)("option",{value:"json",children:"JSON"})," "]}),(0,r.jsxs)(g,{onClick:n,className:"flex items-center gap-2",disabled:!v,children:[(0,r.jsx)(u.A,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"hidden sm:inline",children:"导出"})]})," "]})]})]})}var S=a(3518),C=a(6967);let Y=[10,25,50,100];function D(e){let{currentPage:t,totalPages:a,pageSize:l,onPageChange:n,onPageSizeChange:s}=e;return(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3 bg-white border-t border-gray-200",children:[(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row items-center gap-4",children:[(0,r.jsxs)("span",{className:"text-sm text-gray-700",children:["第 ",t," 页，共 ",a," 页"]}),(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("label",{htmlFor:"pageSize",className:"text-sm text-gray-600",children:"每页显示条目数："}),(0,r.jsx)("select",{id:"pageSize",value:l,onChange:e=>s(Number(e.target.value)),className:"text-sm border rounded-md p-1",children:Y.map(e=>(0,r.jsx)("option",{value:e,children:e},e))})]})]}),(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)(g,{onClick:()=>n(t-1),disabled:1===t,variant:"ghost",className:"p-2 rounded hover:bg-gray-100 disabled:opacity-50",children:(0,r.jsx)(S.A,{className:"w-5 h-5"})}),(0,r.jsx)("div",{className:"flex items-center gap-1",children:Array.from({length:Math.min(5,a)},(e,l)=>{let s;return s=a<=5?l+1:t<=3?l+1:t>=a-2?a-4+l:t-2+l,(0,r.jsx)(g,{variant:t===s?"default":"outline",onClick:()=>n(s),children:s},s)})}),(0,r.jsx)(g,{onClick:()=>n(t+1),disabled:t===a,variant:"ghost",className:"p-2 rounded hover:bg-gray-100 disabled:opacity-50",children:(0,r.jsx)(C.A,{className:"w-5 h-5"})})]})]})}function k(e){let{data:t,columns:a,currentPage:l,totalPages:n,pageSize:s,onPageChange:o,onPageSizeChange:i}=e;return(0,r.jsxs)("div",{className:"bg-white rounded-lg shadow-sm border border-border overflow-hidden",children:[(0,r.jsx)(D,{currentPage:l,totalPages:n,pageSize:s,totalItems:t.length,onPageChange:o,onPageSizeChange:i}),(0,r.jsx)("div",{className:"overflow-x-auto",children:(0,r.jsxs)("table",{className:"w-full table-fixed divide-y divide-border",children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{className:"bg-gray-50",children:a.map(e=>(0,r.jsx)("th",{className:"px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider w-[200px] min-w-[200px]",children:(0,r.jsx)("div",{className:"truncate",title:e,children:e})},e))})}),(0,r.jsx)("tbody",{className:"divide-y divide-border",children:0===t.length?(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:a.length,className:"px-6 py-8 text-center text-sm text-gray-500",children:"No data available"})}):t.map((e,t)=>(0,r.jsx)("tr",{className:"hover:bg-gray-50",children:a.map(t=>(0,r.jsx)("td",{className:"px-6 py-4 text-sm text-gray-600 w-[200px] min-w-[200px]",children:(0,r.jsx)("div",{className:"truncate",title:e[t],children:e[t]})},t))},t))})]})}),(0,r.jsx)(D,{currentPage:l,totalPages:n,pageSize:s,totalItems:t.length,onPageChange:o,onPageSizeChange:i})]})}async function M(e){return new Promise((t,a)=>{let r=new FileReader;r.onload=e=>{var r;if(!(null===(r=e.target)||void 0===r?void 0:r.result)){a(Error("Failed to read file"));return}let l=e.target.result.split("\n").map(e=>e.split(",")),n=l[0];t({data:l.slice(1).map(e=>n.reduce((t,a,r)=>(t[a]=e[r],t),{}))})},r.onerror=e=>{var t;let r=null===(t=e.target)||void 0===t?void 0:t.error;r?a(r):a(Error("Unknown error reading file"))},r.readAsText(e)})}var _=a(1455),A=a.n(_),P=a(1909),E=a.n(P);A().extend(E());let z=["DD-MM-YYYY HH:mm:ss","MM-DD-YYYY HH:mm:ss","YYYY-MM-DD HH:mm:ss","DD/MM/YYYY HH:mm:ss","MM/DD/YYYY HH:mm:ss","YYYY/MM/DD HH:mm:ss","YYYY-MM-DD","MM/DD/YYYY","DD/MM/YYYY"];var H=a(7660);function R(e){let t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),l=String(e.getHours()).padStart(2,"0"),n=String(e.getMinutes()).padStart(2,"0"),s=String(e.getSeconds()).padStart(2,"0");return"".concat(t).concat(a).concat(r,"_").concat(l).concat(n).concat(s)}function L(e){return e.replace(/\.[^/.]+$/,"")}function O(){let[e,t]=(0,l.useState)([]),[a,s]=(0,l.useState)([]),[o,c]=(0,l.useState)([]),[d,u]=(0,l.useState)(1),[m,p]=(0,l.useState)(10),[x,h]=(0,l.useState)(""),[v,g]=(0,l.useState)("csv"),f=async e=>{try{var a;let r=await M(e),l=(a=r.data,0===a.length?[]:Object.keys(a[0]).map(e=>({name:e,type:function(e,t){let a=e.slice(0,100).map(e=>e[t]).filter(e=>null!=e&&""!==e);return 0===a.length?"text":a.every(e=>!isNaN(Number(e)))?"number":a.every(e=>null!=e&&""!==e&&z.some(t=>A()(e,t,!0).isValid()))?"date":a.every(e=>"boolean"==typeof e||["true","false","0","1"].includes(String(e).toLowerCase()))?"boolean":"text"}(a,e)})));t(r.data),s(l),c(r.data),u(1),h("")}catch(e){console.error("Error parsing CSV file:",e),h("Error parsing CSV file. Please ensure it's a valid CSV.")}},b=Math.ceil(o.length/m),j=o.slice((d-1)*m,d*m);return(0,r.jsx)("div",{className:"",children:(0,r.jsx)("div",{className:"max-w-[1600px] mx-auto px-4 py-8",children:(0,r.jsx)("div",{className:"flex flex-col lg:flex-row gap-8",children:(0,r.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 mb-8",children:[(0,r.jsx)(n.A,{className:"h-8 w-8 text-primary"}),(0,r.jsx)("h1",{className:"text-3xl font-bold text-primary",children:"CSV Query Parser"})]}),x&&(0,r.jsx)("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4",children:x}),(0,r.jsx)("div",{className:"space-y-6",children:0===e.length?(0,r.jsx)(i,{onFileSelect:f}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{columns:a,onQueryChange:t=>{c(e.filter(e=>{let a=t.filters.map(t=>(function(e,t){let a=e[t.column];if("isNull"===t.operator)return null==a||""===a;if("isNotNull"===t.operator)return null!=a&&""!==a;if(!a)return!1;switch(t.columnType){case"date":return function(e,t){let a=A()(e),r=A()(t.value);switch(t.operator){case"before":return a.isBefore(r);case"after":return a.isAfter(r);case"onDate":return a.isSame(r,"day");case"between":let[l,n]=t.value;return a.isAfter(A()(l))&&a.isBefore(A()(n));default:return!1}}(a,t);case"number":return function(e,t){let a=Number(e),r=Number(t.value);switch(t.operator){case"equals":return a===r;case"notEquals":return a!==r;case"greaterThan":return a>r;case"lessThan":return a<r;case"between":let[l,n]=t.value.map(Number);return a>=l&&a<=n;default:return!1}}(a,t);default:return function(e,t){let a=e.toLowerCase(),r=t.value.toLowerCase();switch(t.operator){case"equals":return a===r;case"notEquals":return a!==r;case"contains":return a.includes(r);case"notContains":return!a.includes(r);case"startsWith":return a.startsWith(r);case"endsWith":return a.endsWith(r);default:return!1}}(String(a),t)}})(e,t));return"AND"===t.conjunction?a.every(Boolean):a.some(Boolean)})),u(1)},onExport:()=>{o.length>0&&("csv"===v?function(e,t,a){let r=[],l=t.map(e=>e.name);for(let t of(r.push(l.join(",")),e)){let e=l.map(e=>{let a=(""+t[e]).replace(/"/g,'""');return'"'.concat(a,'"')});r.push(e.join(","))}let n=new Blob([r.join("\n")],{type:"text/csv;charset=utf-8;"}),s=window.URL.createObjectURL(n),o=R(new Date),i=L(a),c="".concat(i,"_").concat(o,".csv"),d=document.createElement("a");d.href=s,d.download=c,document.body.appendChild(d),d.click(),document.body.removeChild(d),window.URL.revokeObjectURL(s)}(o,a,"filtered_data.csv"):"xls"===v?function(e,t,a){let r=[t.map(e=>e.name)];for(let a of e){let e=t.map(e=>a[e.name]);r.push(e)}let l=H.Wp.aoa_to_sheet(r),n=H.Wp.book_new();H.Wp.book_append_sheet(n,l,"Sheet1");let s=R(new Date),o=L(a),i="".concat(o,"_").concat(s,".xlsx");H._h(n,i)}(o,a,"filtered_data.xls"):"json"===v&&function(e,t){let a=new Blob([JSON.stringify(e,null,2)],{type:"application/json;charset=utf-8;"}),r=window.URL.createObjectURL(a),l=R(new Date),n=L(t),s="".concat(n,"_").concat(l,".json"),o=document.createElement("a");o.href=r,o.download=s,document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(r)}(o,"filtered_data.json"))},exportFormat:v,setExportFormat:g}),(0,r.jsx)("div",{className:"overflow-hidden opacity-[.98] shadow-lg hover:shadow-xl",children:(0,r.jsx)(k,{data:j,columns:a.map(e=>e.name),currentPage:d,totalPages:b,pageSize:m,onPageChange:u,onPageSizeChange:e=>{p(e),u(1)}})})]})})]})})})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[524,126,441,517,358],()=>t(5267)),_N_E=e.O()}]);